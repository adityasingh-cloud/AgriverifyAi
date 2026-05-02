import React, { useState, useEffect, useRef } from 'react';

const cropEmojis = { Rice: '🌾', Wheat: '🌿', Maize: '🌽', Cotton: '☁️', Potato: '🥔', Onion: '🧅', Tomato: '🍅', Soybean: '🫘' };
const farmers = ['Ravi Kumar (WB)', 'Suresh Patel (GJ)', 'Mohan Das (UP)', 'Priya Devi (HR)', 'Arjun Singh (PB)', 'Kavita Rao (MH)', 'Dinesh Yadav (MP)', 'Sunita Bai (RJ)'];
const bidderNames = ['Buyer_Raj', 'Trader_99', 'FreshMart_Ltd', 'BigBasket_B2B', 'ITC_Agri', 'Amit_K', 'Reliance_Fresh', 'SpencerB2B', 'Buyer_Singh', 'NatFarm_Co'];

const initialAuctions = [
  { id: 1, crop: 'Rice', farmer: farmers[0], grade: 'Gold', qty: '50 Quintals', basePrice: 2600, currentBid: 2840, bids: 18, endsAt: Date.now() + 180000, location: 'West Bengal', cert: '0x7f3a91bc', category: 'grains' },
  { id: 2, crop: 'Wheat', farmer: farmers[1], grade: 'Silver', qty: '80 Quintals', basePrice: 2100, currentBid: 2240, bids: 11, endsAt: Date.now() + 420000, location: 'Gujarat', cert: '0x3d8a24fc', category: 'grains' },
  { id: 3, crop: 'Cotton', farmer: farmers[2], grade: 'Gold', qty: '30 Quintals', basePrice: 6000, currentBid: 6480, bids: 24, endsAt: Date.now() + 60000, location: 'Uttar Pradesh', cert: '0xb1e92d4a', category: 'pulses' },
];

import { supabase } from './lib/supabase';

export default function Marketplace({ onBack, onAuth, user }) {
  const [auctions, setAuctions] = useState(initialAuctions);
  const [myBids, setMyBids] = useState({});
  const [currentFilter, setCurrentFilter] = useState('all');
  const [activeAuction, setActiveAuction] = useState(null);
  const [autoBidOn, setAutoBidOn] = useState(false);
  const [bidAmount, setBidAmount] = useState('');
  const [liveFeed, setLiveFeed] = useState([
    { user: 'BigBasket_B2B', amount: 2840, crop: 'Rice', time: '22:15:04', isWinning: false },
    { user: 'Trader_99', amount: 2800, crop: 'Rice', time: '22:14:12', isWinning: false },
    { user: 'ITC_Agri', amount: 2760, crop: 'Rice', time: '22:12:45', isWinning: false },
  ]);
  const [toast, setToast] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const curRef = useRef(null);
  const cur2Ref = useRef(null);
  const mx = useRef(0);
  const my = useRef(0);
  const cx = useRef(0);
  const cy = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      if (curRef.current) {
        curRef.current.style.left = mx.current + 'px';
        curRef.current.style.top = my.current + 'px';
      }
    };
    document.addEventListener('mousemove', handleMouseMove);

    let id;
    const lerpC = () => {
      cx.current += (mx.current - cx.current) * 0.12;
      cy.current += (my.current - cy.current) * 0.12;
      if (cur2Ref.current) {
        cur2Ref.current.style.left = cx.current + 'px';
        cur2Ref.current.style.top = cy.current + 'px';
      }
      id = requestAnimationFrame(lerpC);
    };
    lerpC();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(id);
    };
  }, []);

  useEffect(() => {
    const fetchAuctions = async () => {
      const { data, error } = await supabase.from('auctions').select('*').order('created_at', { ascending: false });
      if (error) {
        console.error("Error fetching auctions:", error);
        showToast('❌', 'Connection Error', 'Check your Supabase URL and Key', true);
        return;
      }
      if (data) {
        setAuctions(data.map(item => ({
          ...item,
          endsAt: new Date(item.ends_at).getTime()
        })));
      }
    };
    fetchAuctions();

    const sub = supabase.channel('auctions_realtime')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'auctions' }, (payload) => {
        if (payload.eventType === 'INSERT') {
          setAuctions(prev => [{ ...payload.new, endsAt: new Date(payload.new.ends_at).getTime() }, ...prev]);
        } else if (payload.eventType === 'UPDATE') {
          setAuctions(prev => prev.map(a => a.id === payload.new.id ? { ...payload.new, endsAt: new Date(payload.new.ends_at).getTime() } : a));
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(sub);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAuctions(prev => {
        const randomIndex = Math.floor(Math.random() * prev.length);
        const a = { ...prev[randomIndex] };
        if (a.endsAt - Date.now() <= 0) return prev;

        const inc = Math.floor(Math.random() * 120) + 20;
        a.currentBid += inc;
        a.bids++;

        const bidder = bidderNames[Math.floor(Math.random() * bidderNames.length)];
        const now = new Date();
        const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
        
        setLiveFeed(feed => [{ user: bidder, amount: a.currentBid, crop: a.crop, time, isWinning: false }, ...feed].slice(0, 12));

        const next = [...prev];
        next[randomIndex] = a;
        return next;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms) => {
    if (ms <= 0) return 'ENDED';
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    const h = Math.floor(m / 60);
    if (h > 0) return `${h}h ${m % 60}m`;
    if (m > 0) return `${m}m ${s % 60}s`;
    return `${s}s`;
  };

  const showToast = (icon, text, sub, isError = false) => {
    setToast({ icon, text, sub, isError });
    setTimeout(() => setToast(null), 4000);
  };

  const handleBid = () => {
    if (!activeAuction) return;
    const amount = parseInt(bidAmount);
    const minBid = activeAuction.currentBid + 1;
    if (!amount || amount < minBid) {
      showToast('❌', 'Bid too low!', `Minimum bid: ₹${minBid.toLocaleString()}/qtl`, true);
      return;
    }

    setAuctions(prev => prev.map(a => a.id === activeAuction.id ? { ...a, currentBid: amount, bids: a.bids + 1 } : a));
    setMyBids(prev => ({ ...prev, [activeAuction.id]: amount }));
    
    const now = new Date();
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    setLiveFeed(feed => [{ user: 'You', amount: amount, crop: activeAuction.crop, time, isWinning: true }, ...feed].slice(0, 12));
    
    setActiveAuction(null);
    setBidAmount('');
    showToast('✅', `Bid placed on ${activeAuction.crop}!`, `₹${amount.toLocaleString()}/qtl · You are currently winning 🏆`);
  };

  const filteredAuctions = auctions.filter(a => {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'ending') return (a.endsAt - Date.now()) < 300000;
    return a.category === currentFilter;
  });

  return (
    <div style={{ background: '#050a07', color: '#e8f5e9', fontFamily: "'Syne', sans-serif", minHeight: '100vh', display: 'flex', cursor: 'none', position: 'relative', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');
        
        :root {
          --g1: #00ff87; --g2: #00d4aa; --gold: #f4c542; --red2: #ff6b81; --muted: #5a8a6a; --border: rgba(0,255,135,0.08);
        }

        @keyframes livePulse { 0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(255, 71, 87, 0.5); } 70% { opacity: .6; box-shadow: 0 0 0 6px rgba(255, 71, 87, 0); } }
        @keyframes urgentGlow { 0%, 100% { box-shadow: 0 0 0 0 rgba(255, 99, 72, 0); } 50% { box-shadow: 0 0 24px rgba(255, 99, 72, .15); } }
        @keyframes badgeBlink { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
        @keyframes feedEntry { from { opacity: 0; transform: translateY(-8px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #050a07; }
        ::-webkit-scrollbar-thumb { background: #00ff87; border-radius: 2px; }

        .btn-bid:hover { box-shadow: 0 0 30px rgba(0, 255, 135, 0.3); }
        .btn-bid::before { content: ''; position: absolute; inset: 0; background: rgba(255, 255, 255, .2); transform: translateX(-100%) skewX(-15deg); transition: transform .4s; }
        .btn-bid:hover::before { transform: translateX(200%) skewX(-15deg); }
      `}</style>

      {/* CURSOR */}
      <div ref={curRef} style={{ position: 'fixed', width: '10px', height: '10px', background: '#00ff87', borderRadius: '50%', pointerEvents: 'none', zIndex: 9999, transform: 'translate(-50%, -50%)', mixBlendMode: 'screen', boxShadow: '0 0 16px #00ff87' }} />
      <div ref={cur2Ref} style={{ position: 'fixed', width: '34px', height: '34px', border: '1px solid rgba(0, 255, 135, 0.35)', borderRadius: '50%', pointerEvents: 'none', zIndex: 9998, transform: 'translate(-50%, -50%)', transition: 'width .3s, height .3s, border-color .3s' }} />

      {/* SIDEBAR */}
      <aside style={{ position: 'fixed', left: 0, top: 0, bottom: 0, width: '240px', background: 'rgba(5, 10, 7, 0.9)', backdropFilter: 'blur(32px)', borderRight: '1px solid rgba(0, 255, 135, 0.08)', zIndex: 100, display: 'flex', flexDirection: 'column', transform: sidebarOpen ? 'translateX(0)' : undefined }}>
        <div style={{ padding: '26px 22px 22px', borderBottom: '1px solid rgba(0, 255, 135, 0.08)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'linear-gradient(135deg, #00ff87, #00d4aa)', display: 'flex', alignItems: 'center', justifyCenter: 'center', fontSize: '17px', boxShadow: '0 0 20px rgba(0, 255, 135, 0.25)', display: 'flex', justifyContent: 'center' }}>🌿</div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '15px', fontWeight: 700, background: 'linear-gradient(90deg, #00ff87, #f4c542)', WebkitBackgroundClip: 'text', color: 'transparent' }}>AgriVerify AI</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: '#5a8a6a', letterSpacing: '.1em' }}>LEARVON · 2025</div>
          </div>
        </div>
        <nav style={{ flex: 1, padding: '8px 0' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', letterSpacing: '.18em', color: '#5a8a6a', padding: '18px 22px 8px', opacity: 0.5 }}>MARKETPLACE</div>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 22px', fontSize: '13px', fontWeight: 600, color: '#00ff87', background: 'rgba(0, 255, 135, 0.06)', textDecoration: 'none', borderLeft: '2px solid #00ff87' }}>Live Auctions</a>
          <a onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 22px', fontSize: '13px', fontWeight: 600, color: '#5a8a6a', textDecoration: 'none', cursor: 'pointer' }}>← Back to Home</a>
          
          <div style={{ marginTop: 'auto', padding: '12px 22px' }}>
            {user ? (
              <div style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '12px', padding: '12px' }}>
                <div style={{ fontSize: '10px', color: '#4d9e88', textTransform: 'uppercase', marginBottom: '4px' }}>Logged in as</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user.email}</div>
                <button onClick={() => supabase.auth.signOut()} style={{ background: 'none', border: 'none', color: '#ff6b81', fontSize: '11px', padding: 0, marginTop: '8px', cursor: 'pointer' }}>Sign Out</button>
              </div>
            ) : (
              <button onClick={onAuth} style={{ width: '100%', padding: '12px', background: 'rgba(0, 255, 135, 0.1)', border: '1px solid rgba(0, 255, 135, 0.2)', color: '#00ff87', borderRadius: '12px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>Login / Signup</button>
            )}
          </div>
        </nav>
        <div style={{ padding: '18px 22px', borderTop: '1px solid rgba(0, 255, 135, 0.08)' }}>
           <div style={{ background: 'rgba(0, 255, 135, 0.06)', border: '1px solid rgba(0, 255, 135, 0.1)', borderRadius: '8px', padding: '9px 12px', fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#00ff87', display: 'flex', alignItems: 'center', gap: '8px' }}>
             <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00ff87', animation: 'livePulse 2s infinite' }} /> POLYGON MAINNET
           </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main style={{ marginLeft: '240px', width: 'calc(100% - 240px)', minHeight: '100vh' }}>
        <div style={{ padding: '20px 64px', borderBottom: '1px solid rgba(0, 255, 135, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: 'rgba(5, 10, 7, 0.8)', backdropFilter: 'blur(20px)', zIndex: 50 }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 700 }}>Live <em style={{ color: '#00ff87', fontStyle: 'italic' }}>Auction</em> Marketplace</div>
          <div style={{ display: 'flex', gap: '4px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(0, 255, 135, 0.08)', borderRadius: '10px', padding: '4px' }}>
            {['all', 'ending', 'grains', 'pulses'].map(f => (
              <button key={f} onClick={() => setCurrentFilter(f)} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', padding: '7px 16px', borderRadius: '7px', border: 'none', background: currentFilter === f ? 'rgba(0, 255, 135, 0.1)' : 'transparent', color: currentFilter === f ? '#00ff87' : '#5a8a6a', cursor: 'none' }}>
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px' }}>
          {/* AUCTION GRID */}
          <div style={{ padding: '48px', borderRight: '1px solid rgba(0, 255, 135, 0.08)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '28px' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', fontWeight: 700 }}>Active <em style={{ color: '#00ff87', fontStyle: 'italic' }}>Listings</em></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
              {filteredAuctions.map(a => {
                const remaining = a.endsAt - Date.now();
                return (
                  <div key={a.id} style={{ background: 'rgba(10, 20, 14, 0.7)', border: '1px solid rgba(0, 255, 135, 0.08)', borderRadius: '18px', overflow: 'hidden', position: 'relative' }}>
                    <div style={{ height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '72px', background: 'radial-gradient(circle at 50% 60%, rgba(0, 255, 135, 0.06), #070e09)', position: 'relative', overflow: 'hidden' }}>
                      {a.photo_url ? (
                        <img src={a.photo_url} alt={a.crop} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        cropEmojis[a.crop]
                      )}
                      <div style={{ position: 'absolute', bottom: '12px', left: '14px', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', padding: '4px 12px', borderRadius: '100px', background: 'rgba(244, 197, 66, 0.12)', color: '#f4c542', border: '1px solid rgba(244, 197, 66, 0.25)', zIndex: 2 }}>🏅 {a.grade} Grade</div>
                    </div>
                    <div style={{ padding: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 700 }}>{a.crop}</div>
                        <div style={{ fontSize: '11px', color: '#5a8a6a', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(0, 255, 135, 0.08)', padding: '3px 10px', borderRadius: '100px' }}>{a.qty}</div>
                      </div>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#5a8a6a', marginBottom: '16px' }}>👨‍🌾 {a.farmer}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', padding: '10px 14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(0, 255, 135, 0.08)', borderRadius: '10px' }}>
                        <span style={{ fontSize: '10px', color: '#5a8a6a', flex: 1 }}>ENDS IN</span>
                        <span style={{ fontSize: '14px', color: remaining < 60000 ? '#ff6b81' : '#e8f5e9' }}>{formatTime(remaining)}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px' }}>
                        <div>
                          <div style={{ fontSize: '9px', color: '#5a8a6a' }}>CURRENT BID</div>
                          <div style={{ fontSize: '32px', fontWeight: 900, color: '#00ff87', fontFamily: "'Playfair Display', serif" }}>₹{a.currentBid.toLocaleString()}</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '20px', color: '#f4c542' }}>{a.bids}</div>
                          <div style={{ fontSize: '10px', color: '#5a8a6a' }}>BIDS</div>
                        </div>
                      </div>
                      <button onClick={() => user ? setActiveAuction(a) : onAuth()} style={{ width: '100%', padding: '12px', background: 'linear-gradient(135deg, #00d4aa, #00ff87)', color: '#000', fontWeight: 800, border: 'none', borderRadius: '10px', cursor: 'pointer' }}>⚡ Place Bid</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SIDEBAR FEED */}
          <div style={{ padding: '32px', background: 'rgba(7, 14, 9, 0.5)' }}>
            <div style={{ fontSize: '11px', color: '#5a8a6a', letterSpacing: '.15em', marginBottom: '16px' }}>LIVE BID FEED</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {liveFeed.map((item, i) => (
                <div key={i} style={{ background: 'rgba(10, 20, 14, 0.8)', border: '1px solid rgba(0, 255, 135, 0.08)', borderRadius: '10px', padding: '12px 14px', animation: 'feedEntry .4s ease' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '11px' }}>{item.user}</span>
                    <span style={{ fontSize: '13px', color: '#00ff87' }}>₹{item.amount.toLocaleString()}</span>
                  </div>
                  <div style={{ fontSize: '10px', color: '#5a8a6a', marginTop: '3px' }}>{item.crop} · {item.time}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '48px', padding: '20px', background: 'rgba(255, 71, 87, 0.05)', border: '1px solid rgba(255, 71, 87, 0.15)', borderRadius: '14px' }}>
              <div style={{ color: '#ff6b81', fontWeight: 700, marginBottom: '12px' }}>⚠️ Bid Responsibility</div>
              <div style={{ fontSize: '12px', color: '#5a8a6a', lineHeight: 1.5 }}>
                Bids are legally binding on blockchain. Non-payment within 24h results in a 10% fine.
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* BID MODAL */}
      {activeAuction && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0, 0, 0, 0.88)', backdropFilter: 'blur(24px)', zIndex: 600, display: 'flex', alignItems: 'center', justifyCenter: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ background: '#0a1410', border: '1px solid rgba(0, 255, 135, 0.08)', borderRadius: '22px', width: '100%', maxWidth: '520px', padding: '48px', position: 'relative' }}>
            <button onClick={() => setActiveAuction(null)} style={{ position: 'absolute', top: '18px', right: '18px', background: 'rgba(255, 255, 255, 0.04)', border: 'none', color: '#fff', fontSize: '20px', cursor: 'none' }}>✕</button>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ fontSize: '11px', color: '#5a8a6a' }}>BIDDING ON</div>
              <div style={{ fontSize: '24px', fontWeight: 700 }}>{activeAuction.crop}</div>
              <div style={{ fontSize: '11px', color: '#5a8a6a' }}>{activeAuction.qty} · {activeAuction.farmer}</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(0, 255, 135, 0.08)', borderRadius: '12px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
              <span style={{ padding: '16px', borderRight: '1px solid rgba(0, 255, 135, 0.08)', color: '#5a8a6a' }}>₹</span>
              <input type="number" value={bidAmount} onChange={e => setBidAmount(e.target.value)} placeholder={activeAuction.currentBid + 1} style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontSize: '32px', fontWeight: 900, padding: '16px' }} />
            </div>
            <button onClick={handleBid} style={{ width: '100%', padding: '16px', background: 'linear-gradient(135deg, #00d4aa, #00ff87)', color: '#000', fontWeight: 800, fontSize: '15px', borderRadius: '12px', border: 'none', marginTop: '24px', cursor: 'none' }}>⚡ PLACE BID</button>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast && (
        <div style={{ position: 'fixed', bottom: '32px', right: '32px', background: '#0a1410', border: '1px solid rgba(0, 255, 135, 0.25)', borderRadius: '14px', padding: '16px 22px', display: 'flex', alignItems: 'center', gap: '12px', zIndex: 800 }}>
          <div style={{ fontSize: '22px' }}>{toast.icon}</div>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 500, color: toast.isError ? '#ff6b81' : '#00ff87' }}>{toast.text}</div>
            <div style={{ fontSize: '11px', color: '#5a8a6a' }}>{toast.sub}</div>
          </div>
        </div>
      )}
    </div>
  );
}
