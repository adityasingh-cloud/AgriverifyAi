import { useState, useEffect, useRef } from "react";

const BLOGS = [
  { id:1,icon:"💰",category:"Market Exploitation",color:"#f472b6",date:"Apr 12 2025",readTime:"8 min",title:"The Price They Never See: How Middlemen Steal from Indian Farmers",excerpt:"Every harvest season, millions of farmers walk away with a fraction of what their crops are worth. The system is broken by design.",content:`## The Invisible Chain of Exploitation\n\nEvery year, India produces over 300 million tonnes of food grains. Yet the people who grow this food remain among the country's poorest citizens. The reason is a systemic failure baked into the agricultural supply chain.\n\n## How the Mandi System Works\n\nThe APMC system was designed in the 1960s to protect farmers. In practice it became the mechanism of exploitation. Commission agents (arhatiyas) control weighing, grading, storage, and credit — creating debt-bondage cycles lasting generations.\n\n**The Grade Manipulation**: Without standardized grading, arhatiyas visually inspect produce and assign quality grades. The conflict of interest is enormous — agents profit when grades are lower.\n\n## Real Numbers, Real Pain\n\nA 2022 ICAR study found onion farmers in Maharashtra received ₹2–₹5/kg at the farm gate, while Delhi consumers paid ₹40–₹60 for the same onions. The 10x gap was absorbed entirely by intermediaries. NABARD found 52.5% of agricultural households are indebted, with average debt of ₹74,121 per family.\n\n## What AgriVerify AI Changes\n\nObjective AI-driven quality grades, real-time price data synced from e-NAM, and blockchain-certified quality passports are dismantling 60 years of institutionalized exploitation — one verified transaction at a time.`},
  { id:2,icon:"🌡️",category:"Climate Crisis",color:"#fb923c",date:"Mar 28 2025",readTime:"10 min",title:"Death by a Thousand Droughts: Climate Change and the Indian Farmer",excerpt:"Monsoon patterns have shifted. Groundwater is depleting. Temperatures are rising. Farmers face a crisis they did nothing to create.",content:`## A Crisis Without a Voice\n\nThe IPCC warned: South Asia's agricultural systems face catastrophic disruption by 2050. For Indian farmers, this is not an abstract future — it is happening now, in their fields, this season.\n\n## The Monsoon Is Breaking\n\nThe 2023 Southwest Monsoon arrived 10 days late across peninsular India. States received extreme rainfall causing flash floods while Marathwada experienced prolonged dry spells within the same monsoon season.\n\n## Groundwater: The Silent Apocalypse\n\nIndia extracts 230 billion cubic meters of groundwater annually — more than the US and China combined. Punjab groundwater levels have dropped 33 cm per year since 2000. Wheat yields fall 4.5–6% per 1°C temperature increase during grain-filling.\n\n## The Farmer Suicide Connection\n\nA PNAS study found a 7.3% increase in farmer suicide rates per degree Celsius increase. Climate change was responsible for an estimated 59,300 farmer suicides between 1980 and 2013.\n\n## AgriVerify AI's Role\n\nOur blockchain quality passport creates a verifiable record of sustainable farming practices linkable to carbon markets, premium pricing, and international ESG supply chain requirements.`},
  { id:3,icon:"📱",category:"Digital Inclusion",color:"#a78bfa",date:"Mar 15 2025",readTime:"7 min",title:"The Literacy Trap: Why Digital India Left 140 Million Farmers Behind",excerpt:"Every government app assumes the user can read. Most Indian farmers cannot. This is a design failure, not a farmer failure.",content:`## The App That Doesn't Work\n\nThe NSSO estimates only 38% of rural Indians above 15 are functionally literate. In states like Rajasthan, Bihar, and UP, rural female literacy hovers at 30–40%. Every single agricultural app requires the ability to read.\n\n## The Language Layering Problem\n\nIndia has 22 scheduled languages and 1,600+ dialects. 500 million Indians speak neither English nor Hindi as their first language. Technology designed to help farmers cannot even be accessed by them.\n\n## The Voice Revolution\n\nBhashini — India's National Language Translation Mission — was created to bridge this gap. With support for 22+ languages, it makes any digital service voice-accessible across India's linguistic diversity.\n\n**AgriVerify AI's zero-literacy interface**: Farmers speak in their mother tongue or dialect. The system processes, translates, and responds in the same language. Quality reports are read aloud. No reading ability required at any point.\n\n## The Gender Dimension\n\nWomen perform 60–80% of agricultural labor but own less than 13% of agricultural land. Voice-first, vernacular interfaces lower barriers specifically for female farmers who have never typed on a smartphone.`},
  { id:4,icon:"🌱",category:"Soil Health",color:"#4ade80",date:"Feb 20 2025",readTime:"9 min",title:"Soil Under Siege: The Silent Degradation Destroying Indian Farmland",excerpt:"India's Green Revolution fed a billion people. It also quietly poisoned the soil that makes feeding them possible.",content:`## The Green Revolution's Hidden Cost\n\nFifty years of intensive monoculture farming and heavy chemical inputs have left 146.8 million hectares — 45% of India's total area — suffering soil degradation in some form.\n\n## The Chemistry of Destruction\n\nIndia uses 16.3 million tonnes of nitrogen fertilizers annually. Punjab's soil organic carbon has fallen to below 0.3% — critically below the 0.5% minimum for productive soil. Without adequate organic carbon, soils lose water retention capacity, microbial health, and structural integrity.\n\n60,000 tonnes of pesticides annually have decimated soil microbial communities in intensively farmed areas. Without robust microbial communities, plants cannot efficiently access nutrients — so farmers apply more fertilizer, making the problem worse.\n\n## AgriVerify AI's Soil Intelligence Vision\n\nWhen a farmer's crop consistently grades lower than regional benchmarks, the most likely culprit is soil health. Our roadmap includes spectral analysis of crop tissue to flag when quality degradation is soil-related.\n\nFarmers who demonstrate soil health practices — no-till, cover cropping, organic matter addition — can access premium markets that reward sustainable provenance through our blockchain passport.`},
  { id:5,icon:"📋",category:"Policy Failure",color:"#f87171",date:"Feb 5 2025",readTime:"8 min",title:"Broken Promises: The Reality of Crop Insurance in India",excerpt:"PM Fasal Bima Yojana was launched with great fanfare in 2016. Nine years later, farmers are still fighting for their dues.",content:`## The Insurance That Doesn't Insure\n\nSince 2016, farmers have paid PMFBY premiums of approximately ₹25,000 crore annually. Claims pending as of March 2024 exceeded ₹15,000 crore. In Maharashtra, farmers who suffered 2022 kharif losses were still waiting for payment in 2024.\n\n## How the System Fails\n\n**Enrollment Barriers**: Requires Aadhaar-linked bank accounts, valid land records, and smartphone access — excluding the most vulnerable farmers.\n\n**The Crop Cutting Experiment Problem**: Claims require physical crop sampling by state officials — massively understaffed, delayed by politics, prone to manipulation. A 2023 Parliamentary Committee found CCE data from several states "unreliable and not scientifically conducted."\n\n**Insurance Company Exit**: In 2022–23, Bajaj Allianz and HDFC Ergo exited PMFBY contracts. Enrolled farmers were transferred to new insurers, creating enormous confusion and further delays.\n\n## AgriVerify AI's Solution\n\nBlockchain-recorded crop quality data at harvest creates an immutable pre-loss record. A farmer with blockchain-certified Grade A wheat before the hailstorm, and Grade C after, has irrefutable claim evidence.`},
  { id:6,icon:"🥦",category:"Infrastructure",color:"#22d3ee",date:"Jan 18 2025",readTime:"7 min",title:"The Cold Chain Crisis: Why Half of India's Vegetables Rot Before You See Them",excerpt:"India wastes ₹92,651 crore worth of food annually due to cold chain failure. The farmer pays in collapsed prices.",content:`## From Farm to Waste\n\nIndia wastes approximately 40% of fruit and vegetable production — 67 million tonnes annually — due to catastrophically underdeveloped cold chain infrastructure. And it is always the farmer who pays.\n\n## The Economics of Rotting\n\nWhen a Himachal Pradesh tomato farmer has no cold storage, tomatoes must sell within 3–4 days or become worthless. In August 2023, tomato prices crashed to ₹2/kg in Karnataka — below packaging cost. Weeks later: ₹150/kg in Delhi. The crash was caused entirely by a supply glut with no cold storage buffer.\n\n## The Infrastructure Gap\n\nIndia's 37 million tonnes of cold storage capacity is 70% potato-specific and concentrated in UP, West Bengal, and Punjab. Tribal areas and dryland farming regions are almost entirely without cold chain.\n\n## AgriVerify AI's Contribution\n\nQuality verification at harvest helps farmers decide which produce is worth storing vs. selling immediately. Real-time e-NAM prices inform timing decisions. A blockchain quality passport unlocks direct relationships with retail chains and exporters who pay premium prices for certified quality.`},
  { id:7,icon:"🏦",category:"Financial Inclusion",color:"#fbbf24",date:"Jan 3 2025",readTime:"8 min",title:"The Credit Desert: Why Small Farmers Can't Access Formal Finance",excerpt:"Over 80 million small farmers have no formal credit access. Moneylenders charge 24–60% annual interest.",content:`## The Moneylender's Grip\n\nIn rural India, the moneylender — sahukaar — remains one of the most powerful figures in any farming community. They are usually also the grain trader, the weighing scale owner, and the mandi commission agent. A farmer who borrows ₹50,000 for seeds must sell their entire harvest exclusively through the sahukaar at whatever price the sahukaar sets.\n\n## The Formal Credit Gap\n\nDespite NABARD, Regional Rural Banks, and Kisan Credit Cards, 40% of indebted agricultural households borrow from informal sources at 24–60% interest. In tribal and remote areas, this exceeds 70%.\n\n**Why formal credit fails**: Land records are unreliable and disputed. Women farmers rarely have land in their names. Tenant farmers — cultivating 40% of India's agricultural land — have no formal land rights. The documentation burden is impenetrable for low-literacy farmers.\n\n## AgriVerify AI's Finance Vision\n\nOur blockchain quality passport is a financial identity document: verified quality grades across multiple seasons, price realization records, production consistency, and quality compliance history. This is precisely the alternative credit scoring data lenders need to extend credit to unbanked farmers.`},
  { id:8,icon:"🚜",category:"Rural Migration",color:"#c084fc",date:"Dec 15 2024",readTime:"9 min",title:"Generation Exit: Why Young Indians Are Abandoning Agriculture",excerpt:"The average Indian farmer is 50.1 years old. Their children are moving to cities. India faces an agricultural labor crisis within two decades.",content:`## The Aging Farm\n\nWalk through any Indian agricultural village and count young people. The 18–35 age group — who should be learning to farm and innovating — is absent. They are in Surat weaving textiles, in Chennai at construction sites, in Pune delivering food on Zomato.\n\nThe NSSO found the average age of a principal agricultural operator in India is 50.1 years. In some southern states it exceeds 52.\n\n## Why They Leave\n\nThe reasons are entirely rational. Average agricultural household annual income: ₹1,22,616 (about ₹10,000/month). A first-year IT support job in any Indian city pays ₹15,000–₹25,000/month. Farming carries extreme income volatility, physical drudgery, and low social status compared to urban employment.\n\n## What This Means for India\n\nIf the trend continues: structural labor shortages in harvest-intensive crops, collapse in technology adoption capacity, land fragmentation and abandonment as aging farmers die without successors, and slowing food production growth against a still-rising population.\n\n## AgriVerify AI's Answer\n\nWhen a 25-year-old farmer can pull up a blockchain quality certificate, see real-time prices across ten mandis, negotiate directly with a Mumbai retailer, and receive UPI payment within 24 hours — they are doing something fundamentally different from their grandfather's experience. That is the future we are building.`},
];

function Aurora() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d");
    let t = 0, id;
    const resize = () => { c.width = c.offsetWidth; c.height = c.offsetHeight; };
    resize(); window.addEventListener("resize", resize);
    const draw = () => {
      c.width = c.offsetWidth; c.height = c.offsetHeight;
      const W = c.width, H = c.height;
      ctx.clearRect(0, 0, W, H);
      [
        { x: 0.2+0.15*Math.sin(t*.7), y: 0.2+0.1*Math.cos(t*.5), r: W*.45, c1:"rgba(16,185,129,0.22)" },
        { x: 0.75+0.12*Math.cos(t*.4), y: 0.25+0.15*Math.sin(t*.6), r: W*.4, c1:"rgba(244,114,182,0.18)" },
        { x: 0.5+0.1*Math.sin(t*.9), y: 0.7+0.1*Math.cos(t*.7), r: W*.38, c1:"rgba(251,146,60,0.15)" },
        { x: 0.88+0.08*Math.cos(t*.5), y: 0.82+0.1*Math.sin(t*.8), r: W*.3, c1:"rgba(167,139,250,0.18)" },
        { x: 0.08+0.1*Math.cos(t*.6), y: 0.78+0.1*Math.sin(t*.4), r: W*.3, c1:"rgba(34,211,238,0.15)" },
      ].forEach(o => {
        const g = ctx.createRadialGradient(o.x*W,o.y*H,0,o.x*W,o.y*H,o.r);
        g.addColorStop(0,o.c1); g.addColorStop(1,"rgba(0,0,0,0)");
        ctx.fillStyle = g; ctx.fillRect(0,0,W,H);
      });
      t += 0.004; id = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"}} />;
}

function Particles() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d");
    let id;
    const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; };
    resize(); window.addEventListener("resize", resize);
    const cols = ["#10b981","#f472b6","#fb923c","#a78bfa","#22d3ee","#fbbf24","#4ade80","#f87171"];
    const pts = Array.from({length:75},() => ({
      x:Math.random()*window.innerWidth, y:Math.random()*window.innerHeight,
      vx:(Math.random()-.5)*.45, vy:(Math.random()-.5)*.45,
      r:Math.random()*1.8+.4, color:cols[Math.floor(Math.random()*cols.length)]
    }));
    const draw = () => {
      ctx.clearRect(0,0,c.width,c.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if(p.x<0) p.x=c.width; if(p.x>c.width) p.x=0;
        if(p.y<0) p.y=c.height; if(p.y>c.height) p.y=0;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle = p.color+"bb"; ctx.fill();
      });
      pts.forEach((a,i) => pts.slice(i+1).forEach(b => {
        const d = Math.hypot(a.x-b.x,a.y-b.y);
        if(d<120) {
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
          ctx.strokeStyle = a.color+Math.floor((1-d/120)*35).toString(16).padStart(2,"0");
          ctx.lineWidth = .6; ctx.stroke();
        }
      }));
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:0}} />;
}

function Counter({ end, suffix="" }) {
  const [v, setV] = useState(0); const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if(!e.isIntersecting) return;
      let s=0; const step=end/80;
      const t=setInterval(()=>{s+=step;if(s>=end){setV(end);clearInterval(t);}else setV(Math.floor(s));},20);
      obs.disconnect();
    },{threshold:.5});
    if(ref.current) obs.observe(ref.current);
    return ()=>obs.disconnect();
  },[end]);
  return <span ref={ref}>{v.toLocaleString()}{suffix}</span>;
}

function ScanLine({active}) {
  return active ? (
    <div style={{position:"absolute",left:0,right:0,height:3,background:"linear-gradient(90deg,transparent,#10b981,#4ade80,#22d3ee,transparent)",boxShadow:"0 0 20px #10b981,0 0 50px #10b98180",animation:"scanDown 1.6s ease-in-out infinite",zIndex:10,pointerEvents:"none"}} />
  ) : null;
}

function GCard({children,style={},onClick,className=""}) {
  return (
    <div onClick={onClick} className={className} style={{background:"rgba(255,255,255,0.04)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",border:"1px solid rgba(255,255,255,0.09)",borderRadius:22,...style}}>
      {children}
    </div>
  );
}

function Badge({children,style={}}) {
  return (
    <div style={{display:"inline-flex",alignItems:"center",gap:7,padding:"6px 14px",borderRadius:999,fontSize:11,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",...style}}>
      {children}
    </div>
  );
}

export default function App() {
  const [splash,setSplash]=useState(true);
  const [menuOpen,setMenuOpen]=useState(false);
  const [activeBlog,setActiveBlog]=useState(null);
  const [demoState,setDemoState]=useState("idle");
  const [demoImg,setDemoImg]=useState(null);
  const [scanPct,setScanPct]=useState(0);
  const fileRef=useRef(null);

  useEffect(()=>{const t=setTimeout(()=>setSplash(false),2700);return()=>clearTimeout(t);},[]);

  const goTo=id=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setMenuOpen(false);};

  const handleFile=e=>{
    const f=e.target.files[0]; if(!f) return;
    setDemoImg(URL.createObjectURL(f)); setDemoState("scanning"); setScanPct(0);
    let p=0; const iv=setInterval(()=>{p+=Math.random()*3+1;setScanPct(Math.min(p,100));if(p>=100){clearInterval(iv);setTimeout(()=>setDemoState("result"),500);}},70);
  };

  // ── BLOG READER ──
  if(activeBlog) {
    const b=BLOGS.find(x=>x.id===activeBlog);
    const paras=b.content.split("\n\n").filter(Boolean);
    return (
      <div style={{minHeight:"100vh",background:"linear-gradient(145deg,#071a14 0%,#0c1628 55%,#160c28 100%)",color:"#e8f5f0",fontFamily:"'DM Sans',sans-serif"}}>
        <style>{CSS}</style>
        <div style={{maxWidth:760,margin:"0 auto",padding:"5rem 1.5rem 4rem"}}>
          <button onClick={()=>setActiveBlog(null)} style={{display:"flex",alignItems:"center",gap:8,background:"none",border:"none",color:b.color,cursor:"pointer",fontSize:14,fontWeight:700,marginBottom:32,transition:"opacity .2s"}} onMouseOver={e=>e.currentTarget.style.opacity=".6"} onMouseOut={e=>e.currentTarget.style.opacity="1"}>
            ← Back to Blogs
          </button>
          <Badge style={{background:b.color+"20",border:\`1px solid \${b.color}50\`,color:b.color,marginBottom:20}}>{b.icon} {b.category}</Badge>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.8rem,4vw,2.8rem)",fontWeight:900,lineHeight:1.2,color:"#fff",marginBottom:20}}>{b.title}</h1>
          <div style={{display:"flex",gap:16,color:"#6b9b8a",fontSize:13,marginBottom:40,paddingBottom:28,borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
            <span>{b.date}</span><span>·</span><span>{b.readTime} read</span><span>·</span><span>AgriVerify AI Research</span>
          </div>
          {paras.map((p,i)=>{
            if(p.startsWith("## ")) return <h2 key={i} style={{fontFamily:"'Playfair Display',serif",fontSize:"1.5rem",fontWeight:800,color:"#fff",margin:"2.5rem 0 1rem"}}>{p.replace("## ","")}</h2>;
            return <p key={i} style={{color:"#9ecfbe",lineHeight:1.9,marginBottom:18,fontSize:"1.04rem"}} dangerouslySetInnerHTML={{__html:p.replace(/\\*\\*(.+?)\\*\\*/g,\`<strong style="color:#d1fae5">$1</strong>\`)}} />;
          })}
          <div style={{marginTop:48,padding:"16px 20px",borderRadius:16,background:"rgba(16,185,129,0.07)",border:"1px solid rgba(16,185,129,0.2)",display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:8,height:8,borderRadius:"50%",background:"#10b981",animation:"blink 1.5s infinite",flexShrink:0}} />
            <span style={{fontSize:12,color:"#10b981"}}>Recorded immutably on Polygon Network · Block #{Math.floor(Math.random()*9999999+10000000)}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{CSS}</style>
      <Particles />
      {/* Noise grain */}
      <div style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:1,opacity:.022,backgroundImage:\`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")\`}} />

      {/* SPLASH */}
      {splash && (
        <div style={{position:"fixed",inset:0,zIndex:200,background:"linear-gradient(145deg,#071a14,#0c1628,#160c28)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",animation:"fadeOut 0.5s ease 2.2s forwards"}}>
          <div style={{textAlign:"center",animation:"splashPop 0.8s cubic-bezier(0.34,1.56,0.64,1) forwards",opacity:0}}>
            <div style={{width:80,height:80,borderRadius:24,background:"linear-gradient(135deg,#10b981,#059669,#047857)",boxShadow:"0 0 60px #10b98190,0 0 120px #10b98130",display:"flex",alignItems:"center",justifyContent:"center",fontSize:40,margin:"0 auto 20px",animation:"pulseGlow 2s ease-in-out infinite"}}>🌾</div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:"3rem",fontWeight:900,color:"#fff",letterSpacing:"0.04em",lineHeight:1}}>
              AgriVerify <span style={{background:"linear-gradient(135deg,#10b981,#34d399)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>AI</span>
            </div>
            <div style={{fontSize:11,letterSpacing:"0.3em",color:"#4d9e88",textTransform:"uppercase",marginTop:10}}>Blockchain · Edge AI · Web3</div>
            <div style={{marginTop:32,width:220,height:3,borderRadius:2,background:"rgba(255,255,255,0.08)",overflow:"hidden",margin:"32px auto 0"}}>
              <div style={{height:"100%",borderRadius:2,background:"linear-gradient(90deg,#10b981,#f472b6,#fb923c,#a78bfa)",animation:"loadBar 2.1s ease forwards"}} />
            </div>
          </div>
        </div>
      )}

      <div style={{minHeight:"100vh",background:"linear-gradient(160deg,#071a14 0%,#0a1520 40%,#130a22 100%)",color:"#e8f5f0",fontFamily:"'DM Sans',sans-serif",overflowX:"hidden",position:"relative",zIndex:2}}>

        {/* NAV */}
        <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"0 2rem",height:68,display:"flex",alignItems:"center",background:"rgba(7,26,20,0.72)",backdropFilter:"blur(28px)",WebkitBackdropFilter:"blur(28px)",borderBottom:"1px solid rgba(16,185,129,0.13)"}}>
          <div style={{maxWidth:1280,margin:"0 auto",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div onClick={()=>goTo("home")} style={{display:"flex",alignItems:"center",gap:12,cursor:"pointer"}}>
              <div style={{width:38,height:38,borderRadius:12,background:"linear-gradient(135deg,#10b981,#059669)",boxShadow:"0 0 25px #10b98170",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>🌾</div>
              <span style={{fontFamily:"'Playfair Display',serif",fontSize:"1.25rem",fontWeight:800,color:"#fff",letterSpacing:"0.03em"}}>AgriVerify <span style={{color:"#10b981"}}>AI</span></span>
            </div>
            <div className="nav-links" style={{display:"flex",alignItems:"center",gap:28}}>
              {["home","problem","features","demo","blogs","contact"].map(s=>(
                <button key={s} onClick={()=>goTo(s)} style={{background:"none",border:"none",color:"#7fbfa8",fontSize:13,fontWeight:500,cursor:"pointer",textTransform:"capitalize",letterSpacing:"0.04em",transition:"color .2s"}} onMouseOver={e=>e.target.style.color="#10b981"} onMouseOut={e=>e.target.style.color="#7fbfa8"}>{s}</button>
              ))}
              <button onClick={()=>goTo("demo")} style={{padding:"8px 22px",borderRadius:11,background:"linear-gradient(135deg,#10b981,#059669)",color:"#fff",border:"none",cursor:"pointer",fontSize:13,fontWeight:700,boxShadow:"0 0 20px #10b98145",transition:"all .25s"}} onMouseOver={e=>{e.target.style.transform="scale(1.05)";e.target.style.boxShadow="0 0 35px #10b98170"}} onMouseOut={e=>{e.target.style.transform="scale(1)";e.target.style.boxShadow="0 0 20px #10b98145"}}>Try Demo</button>
            </div>
            <button onClick={()=>setMenuOpen(!menuOpen)} className="hamburger" style={{display:"none",background:"none",border:"none",color:"#e8f5f0",fontSize:26,cursor:"pointer",lineHeight:1}}>☰</button>
          </div>
        </nav>

        {menuOpen&&(
          <div style={{position:"fixed",top:68,left:0,right:0,zIndex:99,background:"rgba(7,26,20,.97)",backdropFilter:"blur(20px)",padding:"12px 24px 20px",borderBottom:"1px solid rgba(16,185,129,0.12)"}}>
            {["home","problem","features","demo","blogs","contact"].map(s=>(
              <button key={s} onClick={()=>goTo(s)} style={{display:"block",width:"100%",textAlign:"left",background:"none",border:"none",color:"#7fbfa8",fontSize:15,padding:"11px 0",cursor:"pointer",textTransform:"capitalize",borderBottom:"1px solid rgba(255,255,255,0.04)"}}>{s}</button>
            ))}
          </div>
        )}

        {/* HERO */}
        <section id="home" style={{position:"relative",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",padding:"90px 1.5rem 60px"}}>
          <Aurora />
          {/* Decorative rings */}
          {[600,850,380].map((s,i)=>(
            <div key={i} style={{position:"absolute",width:s,height:s,borderRadius:"50%",border:\`1px solid rgba(\${i===0?"16,185,129":i===1?"244,114,182":"251,146,60"},\${i===0?.09:i===1?.06:.07})\`,top:"50%",left:"50%",transform:"translate(-50%,-50%)",animation:\`spin \${20+i*15}s linear infinite \${i%2===0?"":"reverse"}\`}} />
          ))}
          {/* Glow blobs */}
          <div style={{position:"absolute",top:"12%",right:"10%",width:200,height:200,borderRadius:"50%",background:"radial-gradient(circle,rgba(244,114,182,.25),transparent 70%)",filter:"blur(35px)",animation:"floatY 6s ease-in-out infinite"}} />
          <div style={{position:"absolute",bottom:"18%",left:"6%",width:160,height:160,borderRadius:"50%",background:"radial-gradient(circle,rgba(167,139,250,.22),transparent 70%)",filter:"blur(30px)",animation:"floatY 8s ease-in-out infinite reverse"}} />
          <div style={{position:"absolute",top:"55%",right:"3%",width:120,height:120,borderRadius:"50%",background:"radial-gradient(circle,rgba(34,211,238,.2),transparent 70%)",filter:"blur(25px)",animation:"floatY 7s ease-in-out infinite"}} />

          <div style={{position:"relative",zIndex:5,textAlign:"center",maxWidth:920}}>
            <Badge style={{background:"rgba(16,185,129,0.12)",border:"1px solid rgba(16,185,129,0.35)",color:"#10b981",marginBottom:30,animation:"fadeUp .8s ease .3s both"}}>
              <div style={{width:7,height:7,borderRadius:"50%",background:"#10b981",animation:"blink 1.5s infinite"}} />
              Live on Polygon Mainnet · 12,847 Crops Verified
            </Badge>

            <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(3rem,7.5vw,6.5rem)",fontWeight:900,lineHeight:1.03,marginBottom:24,animation:"fadeUp .8s ease .5s both"}}>
              <span style={{color:"#fff",display:"block"}}>Bringing Science</span>
              <span style={{background:"linear-gradient(135deg,#10b981 0%,#34d399 25%,#f472b6 55%,#fb923c 80%,#fbbf24 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundSize:"200%",animation:"gradShift 5s ease infinite",display:"block"}}>to the Mandi.</span>
            </h1>

            <p style={{fontSize:"clamp(1rem,2vw,1.2rem)",color:"#7fbfa8",maxWidth:580,margin:"0 auto 40px",lineHeight:1.75,animation:"fadeUp .8s ease .7s both"}}>
              An AI-driven ecosystem for world-standard crop grading and fair price discovery. Built for India's 140 million farmers. Powered by blockchain transparency.
            </p>

            <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap",marginBottom:68,animation:"fadeUp .8s ease .9s both"}}>
              <button onClick={()=>goTo("demo")} style={{padding:"15px 34px",borderRadius:15,background:"linear-gradient(135deg,#10b981,#059669)",color:"#fff",border:"none",cursor:"pointer",fontSize:15,fontWeight:800,boxShadow:"0 0 50px #10b98155,0 8px 32px rgba(0,0,0,.4)",transition:"all .3s",letterSpacing:".02em"}} onMouseOver={e=>{e.target.style.transform="translateY(-3px) scale(1.04)";e.target.style.boxShadow="0 0 70px #10b98175,0 14px 42px rgba(0,0,0,.5)"}} onMouseOut={e=>{e.target.style.transform="none";e.target.style.boxShadow="0 0 50px #10b98155,0 8px 32px rgba(0,0,0,.4)"}}>
                🔬 Try Live Demo
              </button>
              <button onClick={()=>goTo("features")} style={{padding:"15px 34px",borderRadius:15,background:"rgba(255,255,255,0.05)",color:"#d1fae5",border:"1px solid rgba(255,255,255,0.13)",cursor:"pointer",fontSize:15,fontWeight:600,backdropFilter:"blur(10px)",transition:"all .3s"}} onMouseOver={e=>{e.target.style.background="rgba(255,255,255,.1)";e.target.style.transform="translateY(-3px)"}} onMouseOut={e=>{e.target.style.background="rgba(255,255,255,.05)";e.target.style.transform="none"}}>
                ⛓️ View Whitepaper
              </button>
            </div>

            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16,maxWidth:720,margin:"0 auto",animation:"fadeUp .8s ease 1.1s both"}} className="stats-grid">
              {[["140M+","Farmers Targeted","#10b981"],["88%","Grade Accuracy","#f472b6"],["22","Languages","#fb923c"],["50%","Better Prices","#a78bfa"]].map(([n,l,c])=>(
                <GCard key={l} style={{padding:"20px 12px",textAlign:"center",borderColor:c+"25"}}>
                  <div style={{fontSize:"1.9rem",fontWeight:900,color:c,fontFamily:"'Playfair Display',serif",lineHeight:1}}>{n}</div>
                  <div style={{fontSize:11,color:"#4d9e88",marginTop:6,fontWeight:500}}>{l}</div>
                </GCard>
              ))}
            </div>
          </div>

          <div style={{position:"absolute",bottom:28,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:6,opacity:.4}}>
            <span style={{fontSize:9,letterSpacing:".22em",textTransform:"uppercase",color:"#4d9e88"}}>Scroll</span>
            <div style={{width:22,height:36,borderRadius:11,border:"1px solid rgba(255,255,255,.18)",display:"flex",alignItems:"flex-start",justifyContent:"center",padding:4}}>
              <div style={{width:4,height:8,borderRadius:2,background:"#10b981",animation:"scrollDot 1.4s ease-in-out infinite"}} />
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div style={{overflow:"hidden",padding:"16px 0",borderTop:"1px solid rgba(16,185,129,0.1)",borderBottom:"1px solid rgba(16,185,129,0.1)",background:"rgba(16,185,129,0.035)"}}>
          <div style={{display:"flex",animation:"marquee 28s linear infinite",whiteSpace:"nowrap"}}>
            {Array(4).fill(["🌾 ResNet-50 AI Grading","⛓️ Polygon Blockchain","🗣️ Bhashini Voice API","📊 e-NAM Price Sync","🔐 Photo-Digital Twins","🌍 22 Indian Languages","📱 Offline-First Architecture","💚 AGMARK Certified","🛡️ Anti-Fraud QR Seals","⚡ Edge Computing"]).flat().map((t,i)=>(
              <span key={i} style={{padding:"0 30px",fontSize:11,fontWeight:700,letterSpacing:".09em",color:"#3d8a75",textTransform:"uppercase"}}>{t}</span>
            ))}
          </div>
        </div>

        {/* PROBLEM */}
        <section id="problem" style={{padding:"100px 1.5rem",position:"relative"}}>
          <div style={{position:"absolute",top:"15%",right:0,width:320,height:320,background:"radial-gradient(circle,rgba(251,146,60,.12),transparent 70%)",filter:"blur(70px)",pointerEvents:"none"}} />
          <div style={{maxWidth:1280,margin:"0 auto"}}>
            <div style={{textAlign:"center",marginBottom:64}}>
              <Badge style={{background:"rgba(248,113,113,.12)",border:"1px solid rgba(248,113,113,.3)",color:"#f87171",marginBottom:20}}>🚨 The Real Crisis</Badge>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,3.2rem)",fontWeight:900,color:"#fff",marginBottom:14}}>The Gap in the System</h2>
              <p style={{color:"#7fbfa8",maxWidth:500,margin:"0 auto",lineHeight:1.75}}>Every harvest season, millions of Indian farmers lose what they've rightfully earned. Here's the anatomy of exploitation.</p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:24}}>
              {[
                {icon:"⚖️",title:"Subjective Exploitation",color:"#f87171",stat:"₹92,651 Cr",statLabel:"Lost to biased grading annually",desc:"Commission agents visually grade crops with zero standards — a 60-year-old unchecked conflict of interest that costs farmers everything.",points:["No standardized grading protocols","Agents control weighing & Pricing","Zero farmer appeal mechanism"]},
                {icon:"📡",title:"Information Asymmetry",color:"#fb923c",stat:"10×",statLabel:"Farm-to-consumer price gap",desc:"Farmers arrive at the mandi without knowing real prices. Buyers coordinate daily. A blindfolded farmer cannot negotiate against organized buyers.",points:["Zero real-time market intelligence","Buyers in daily coordination","Farmer negotiates in the dark"]},
                {icon:"🗣️",title:"Language Barriers",color:"#a78bfa",stat:"62%",statLabel:"Rural Indians non-literate in English",desc:"Every digital agricultural service assumes the user can read English. 500 million Indians speak neither English nor Hindi as their first language.",points:["Apps require English literacy","No dialect-level voice support","Women farmers most excluded"]},
              ].map((c,i)=>(
                <GCard key={i} style={{padding:30,borderColor:c.color+"25",transition:"all .35s"}} className="card-hover">
                  <div style={{fontSize:44,marginBottom:18}}>{c.icon}</div>
                  <div style={{fontSize:"2.2rem",fontWeight:900,color:c.color,fontFamily:"'Playfair Display',serif",lineHeight:1}}>{c.stat}</div>
                  <div style={{fontSize:11,color:"#4d9e88",marginBottom:14,marginTop:4,textTransform:"uppercase",letterSpacing:".07em"}}>{c.statLabel}</div>
                  <h3 style={{fontSize:"1.15rem",fontWeight:800,color:"#fff",marginBottom:12}}>{c.title}</h3>
                  <p style={{fontSize:13,color:"#7fbfa8",marginBottom:18,lineHeight:1.75}}>{c.desc}</p>
                  {c.points.map((p,j)=>(
                    <div key={j} style={{display:"flex",alignItems:"center",gap:9,marginBottom:8}}>
                      <div style={{width:7,height:7,borderRadius:"50%",background:c.color,flexShrink:0,boxShadow:\`0 0 8px \${c.color}\`}} />
                      <span style={{fontSize:12,color:"#5a8a79"}}>{p}</span>
                    </div>
                  ))}
                </GCard>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" style={{padding:"100px 1.5rem",position:"relative"}}>
          <div style={{position:"absolute",top:"25%",left:0,width:360,height:360,background:"radial-gradient(circle,rgba(167,139,250,.12),transparent 70%)",filter:"blur(80px)",pointerEvents:"none"}} />
          <div style={{maxWidth:1280,margin:"0 auto"}}>
            <div style={{textAlign:"center",marginBottom:64}}>
              <Badge style={{background:"rgba(16,185,129,.12)",border:"1px solid rgba(16,185,129,.3)",color:"#10b981",marginBottom:20}}>⚗️ The Secret Sauce</Badge>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,3.2rem)",fontWeight:900,color:"#fff",marginBottom:14}}>Engineered for Fairness</h2>
              <p style={{color:"#7fbfa8",maxWidth:480,margin:"0 auto",lineHeight:1.75}}>Four interlocking technologies that close every loophole of exploitation.</p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:24}}>
              {[
                {icon:"🧠",title:"Edge-AI Grading",sub:"ResNet-50 Visual Intelligence",color:"#10b981",tags:["ResNet-50","TensorFlow Lite","Offline-First","±2% Accuracy"],desc:"Offline visual inspection fine-tuned on 500,000+ Indian crop images. Runs on ₹8,000 Android phones. Delivers objective grades in under 3 seconds."},
                {icon:"🗣️",title:"Vernacular Voice",sub:"Bhashini API Integration",color:"#a78bfa",tags:["Bhashini API","22 Languages","Dialect Support","Zero Literacy"],desc:"Zero-literacy interaction across 22 Indian languages and regional dialects. Farmers speak and receive responses in their mother tongue."},
                {icon:"⛓️",title:"Blockchain Passport",sub:"Polygon · ERC-721 NFT",color:"#f472b6",tags:["Polygon Network","ERC-721 NFT","IPFS Storage","QR Verification"],desc:"Every verified crop receives a tamper-proof quality certificate on Polygon — QR-sealed, instantly verifiable, legally defensible."},
                {icon:"📊",title:"Real-time Discovery",sub:"Direct e-NAM Price Syncing",color:"#fb923c",tags:["e-NAM API","1000+ Mandis","15-min Updates","Regional Compare"],desc:"Live market price feeds from 1,000+ mandis synced every 15 minutes. Farmers see true market value before entering the mandi."},
              ].map((f,i)=>(
                <GCard key={i} style={{padding:28,borderColor:f.color+"28",transition:"all .35s"}} className="card-hover">
                  <div style={{width:58,height:58,borderRadius:18,background:f.color+"18",border:\`1px solid \${f.color}35\`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,marginBottom:20,boxShadow:\`0 0 30px \${f.color}25\`}}>{f.icon}</div>
                  <h3 style={{fontSize:"1.15rem",fontWeight:800,color:"#fff",marginBottom:4}}>{f.title}</h3>
                  <p style={{fontSize:11,color:f.color,marginBottom:14,fontWeight:700,letterSpacing:".06em"}}>{f.sub}</p>
                  <p style={{fontSize:13,color:"#7fbfa8",lineHeight:1.75,marginBottom:18}}>{f.desc}</p>
                  <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
                    {f.tags.map((t,j)=>(
                      <span key={j} style={{padding:"4px 11px",borderRadius:999,fontSize:11,fontWeight:700,background:f.color+"15",border:\`1px solid \${f.color}30\`,color:f.color}}>{t}</span>
                    ))}
                  </div>
                </GCard>
              ))}
            </div>
          </div>
        </section>

        {/* DEMO */}
        <section id="demo" style={{padding:"100px 1.5rem",position:"relative"}}>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg,transparent,rgba(16,185,129,0.03),transparent)",pointerEvents:"none"}} />
          <div style={{maxWidth:920,margin:"0 auto"}}>
            <div style={{textAlign:"center",marginBottom:48}}>
              <Badge style={{background:"rgba(34,211,238,.12)",border:"1px solid rgba(34,211,238,.3)",color:"#22d3ee",marginBottom:20}}>🔬 Interactive Demo</Badge>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,3.2rem)",fontWeight:900,color:"#fff",marginBottom:14}}>Try AgriVerify AI</h2>
              <p style={{color:"#7fbfa8"}}>Upload any crop photo — watch our AI analyze, grade, and price it instantly</p>
            </div>
            <GCard style={{overflow:"hidden",borderColor:"rgba(16,185,129,.25)",boxShadow:"0 0 100px rgba(16,185,129,.07)"}}>
              <div style={{padding:"12px 20px",borderBottom:"1px solid rgba(255,255,255,.07)",background:"rgba(0,0,0,.25)",display:"flex",alignItems:"center",gap:8}}>
                <div style={{width:12,height:12,borderRadius:"50%",background:"#f87171"}} />
                <div style={{width:12,height:12,borderRadius:"50%",background:"#fbbf24"}} />
                <div style={{width:12,height:12,borderRadius:"50%",background:"#4ade80"}} />
                <span style={{marginLeft:10,fontSize:11,color:"#4d9e88",fontFamily:"monospace"}}>agriverify-ai // crop-scanner v2.4.1 // polygon:mainnet</span>
                <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:6,fontSize:11,color:"#10b981"}}>
                  <div style={{width:6,height:6,borderRadius:"50%",background:"#10b981",animation:"blink 1.5s infinite"}} />LIVE
                </div>
              </div>
              <div style={{padding:"32px 28px"}}>
                {demoState==="idle"&&(
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:32}} className="demo-grid">
                    <div>
                      <h3 style={{fontSize:"1.3rem",fontWeight:800,color:"#fff",marginBottom:12}}>Instant Crop Intelligence</h3>
                      <p style={{fontSize:13,color:"#7fbfa8",lineHeight:1.75,marginBottom:24}}>Upload wheat, rice, cotton, tomato or any crop. Our ResNet-50 model analyzes quality against AGMARK standards and fetches real mandi prices.</p>
                      {["Visual quality inspection in 3 seconds","Moisture via spectral reflection analysis","Live prices from 1,000+ mandis","Blockchain certificate on Polygon"].map((x,i)=>(
                        <div key={i} style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
                          <div style={{width:20,height:20,borderRadius:"50%",background:"rgba(16,185,129,.15)",border:"1px solid rgba(16,185,129,.4)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:"#10b981",flexShrink:0}}>✓</div>
                          <span style={{fontSize:13,color:"#9ecfbe"}}>{x}</span>
                        </div>
                      ))}
                      <label style={{display:"inline-block",marginTop:10,cursor:"pointer"}}>
                        <input ref={fileRef} type="file" accept="image/*" style={{display:"none"}} onChange={handleFile} />
                        <div style={{padding:"13px 30px",borderRadius:13,background:"linear-gradient(135deg,#10b981,#059669)",color:"#fff",fontSize:14,fontWeight:800,boxShadow:"0 0 35px #10b98145",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:8,transition:"all .3s"}} onMouseOver={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 0 55px #10b98165"}} onMouseOut={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="0 0 35px #10b98145"}}>
                          📤 Upload Crop Image
                        </div>
                      </label>
                    </div>
                    <div style={{borderRadius:18,background:"rgba(16,185,129,.04)",border:"2px dashed rgba(16,185,129,.2)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:230,gap:12}}>
                      <div style={{fontSize:52}}>🌾</div>
                      <p style={{fontSize:13,color:"#4d9e88",fontWeight:600}}>Drop your crop image here</p>
                      <p style={{fontSize:11,color:"#2d5c5c"}}>JPG · PNG · WEBP supported</p>
                    </div>
                  </div>
                )}
                {demoState==="scanning"&&demoImg&&(
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:32}} className="demo-grid">
                    <div style={{position:"relative",borderRadius:16,overflow:"hidden"}}>
                      <img src={demoImg} alt="crop" style={{width:"100%",height:280,objectFit:"cover",display:"block"}} />
                      <ScanLine active />
                      <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,transparent 55%,rgba(16,185,129,.25))",pointerEvents:"none"}} />
                      <div style={{position:"absolute",bottom:12,left:12,right:12}}>
                        <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"#10b981",marginBottom:6}}><span>Analyzing grain structure...</span><span>{Math.round(scanPct)}%</span></div>
                        <div style={{height:4,borderRadius:2,background:"rgba(16,185,129,.2)"}}>
                          <div style={{height:"100%",borderRadius:2,background:"linear-gradient(90deg,#10b981,#22d3ee,#f472b6)",width:\`\${scanPct}%\`,transition:"width .1s",boxShadow:"0 0 12px #10b981"}} />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:20}}>
                        <div style={{width:9,height:9,borderRadius:"50%",background:"#10b981",animation:"blink .8s infinite"}} />
                        <span style={{fontSize:15,fontWeight:800,color:"#fff"}}>AI Scanning in Progress</span>
                      </div>
                      {["Loading ResNet-50 model weights","Analyzing visual quality markers","Running moisture spectral analysis","Cross-referencing AGMARK standards","Fetching live e-NAM prices"].map((s,i)=>(
                        <div key={i} style={{display:"flex",alignItems:"center",gap:10,marginBottom:13,opacity:scanPct>i*20?1:.3,transition:"opacity .4s"}}>
                          <div style={{width:20,height:20,borderRadius:"50%",background:scanPct>i*20?"rgba(16,185,129,.2)":"rgba(255,255,255,.04)",border:\`1px solid \${scanPct>i*20?"#10b981":"rgba(255,255,255,.1)"}\`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:"#10b981",flexShrink:0,transition:"all .4s"}}>{scanPct>i*20?"✓":i+1}</div>
                          <span style={{fontSize:13,color:scanPct>i*20?"#9ecfbe":"#3d6b5a"}}>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {demoState==="result"&&demoImg&&(
                  <div>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:24,flexWrap:"wrap",gap:12}}>
                      <h3 style={{fontSize:"1.2rem",fontWeight:800,color:"#fff"}}><span style={{color:"#10b981"}}>✓</span> Quality Report Generated</h3>
                      <Badge style={{background:"rgba(16,185,129,.1)",border:"1px solid rgba(16,185,129,.3)",color:"#10b981"}}>
                        <div style={{width:6,height:6,borderRadius:"50%",background:"#10b981",animation:"blink 1.5s infinite"}} />0x7E3A9F2C...Polygon
                      </Badge>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,marginBottom:22}} className="result-grid">
                      {[["AGMARK Grade","GOLD","88% Quality Score","#10b981"],["Moisture Content","12.3%","Within optimal 10–14%","#22d3ee"],["Market Price","₹6,450","Per Quintal · Pune Mandi","#fbbf24"]].map(([label,val,sub,c])=>(
                        <div key={label} style={{padding:"18px 14px",borderRadius:15,background:c+"0e",border:\`1px solid \${c}2e\`,textAlign:"center"}}>
                          <div style={{fontSize:10,color:"#6b9b8a",letterSpacing:".09em",textTransform:"uppercase",marginBottom:8}}>{label}</div>
                          <div style={{fontSize:"1.75rem",fontWeight:900,color:c,fontFamily:"'Playfair Display',serif"}}>{val}</div>
                          <div style={{fontSize:11,color:"#4d9e88",marginTop:6}}>{sub}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:22}} className="demo-grid">
                      <div style={{padding:16,borderRadius:12,background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.06)"}}>
                        <h4 style={{fontSize:12,color:"#fff",marginBottom:12,fontWeight:700}}>Quality Breakdown</h4>
                        {[["Grain Uniformity",91,"#10b981"],["Foreign Matter",98,"#22d3ee"],["Color Consistency",85,"#f472b6"],["Surface Defects",87,"#fbbf24"]].map(([l,v,c])=>(
                          <div key={l} style={{marginBottom:10}}>
                            <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"#5a8a79",marginBottom:4}}><span>{l}</span><span>{v}%</span></div>
                            <div style={{height:3,borderRadius:2,background:"rgba(255,255,255,.05)"}}>
                              <div style={{height:"100%",borderRadius:2,width:\`\${v}%\`,background:c,boxShadow:\`0 0 8px \${c}\`}} />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div style={{padding:16,borderRadius:12,background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.06)"}}>
                        <h4 style={{fontSize:12,color:"#fff",marginBottom:12,fontWeight:700}}>Regional Prices</h4>
                        {[["Pune","6,450",true],["Nagpur","6,520",false],["Nashik","6,380",false],["Mumbai","6,600",false]].map(([city,price,best])=>(
                          <div key={city} style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10,fontSize:13}}>
                            <span style={{color:best?"#10b981":"#7fbfa8",fontWeight:best?700:400}}>{city}</span>
                            <span style={{color:best?"#10b981":"#9ecfbe",fontWeight:best?800:400}}>₹{price}</span>
                            {best&&<span style={{fontSize:10,color:"#10b981",background:"rgba(16,185,129,.15)",padding:"2px 7px",borderRadius:5,fontWeight:700}}>Best</span>}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                      <button style={{padding:"10px 20px",borderRadius:11,background:"linear-gradient(135deg,#f472b6,#a855f7)",color:"#fff",border:"none",cursor:"pointer",fontSize:13,fontWeight:700}}>⛓️ Mint Blockchain Certificate</button>
                      <button style={{padding:"10px 20px",borderRadius:11,background:"rgba(255,255,255,.06)",color:"#d1fae5",border:"1px solid rgba(255,255,255,.1)",cursor:"pointer",fontSize:13}}>📥 Download PDF</button>
                      <button onClick={()=>{setDemoState("idle");setDemoImg(null);if(fileRef.current)fileRef.current.value="";}} style={{padding:"10px 20px",borderRadius:11,background:"rgba(255,255,255,.03)",color:"#7fbfa8",border:"1px solid rgba(255,255,255,.06)",cursor:"pointer",fontSize:13}}>🔄 Scan Another</button>
                    </div>
                  </div>
                )}
              </div>
            </GCard>
          </div>
        </section>

        {/* BLOCKCHAIN */}
        <section style={{padding:"90px 1.5rem",position:"relative"}}>
          <div style={{maxWidth:1280,margin:"0 auto"}}>
            <GCard style={{padding:"48px 40px",borderColor:"rgba(244,114,182,.22)",background:"linear-gradient(135deg,rgba(244,114,182,.04),rgba(167,139,250,.04))",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:-80,right:-80,width:350,height:350,borderRadius:"50%",background:"radial-gradient(circle,rgba(244,114,182,.18),transparent 70%)",filter:"blur(40px)",pointerEvents:"none"}} />
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"center"}} className="bc-grid">
                <div>
                  <Badge style={{background:"rgba(244,114,182,.12)",border:"1px solid rgba(244,114,182,.3)",color:"#f472b6",marginBottom:24}}>⛓️ Blockchain Infrastructure</Badge>
                  <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.8rem,3vw,2.8rem)",fontWeight:900,color:"#fff",lineHeight:1.2,marginBottom:20}}>
                    Every Crop.<br /><span style={{color:"#f472b6"}}>Immutably Verified.</span>
                  </h2>
                  <p style={{color:"#7fbfa8",lineHeight:1.75,marginBottom:28}}>AgriVerify AI issues ERC-721 NFT quality passports on Polygon for every verified crop. Tamper-proof certificates travel from farm gate to retail shelf.</p>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                    {[["12,847","Certificates Minted","#f472b6"],["₹0.08","Avg Gas Fee","#fbbf24"],["99.9%","Uptime SLA","#10b981"],["0","Tampering Incidents","#22d3ee"]].map(([v,l,c])=>(
                      <div key={l} style={{padding:"14px 16px",borderRadius:13,background:c+"0e",border:\`1px solid \${c}25\`,textAlign:"center"}}>
                        <div style={{fontSize:"1.4rem",fontWeight:900,color:c,fontFamily:"'Playfair Display',serif"}}>{v}</div>
                        <div style={{fontSize:11,color:"#4d9e88",marginTop:4}}>{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{fontFamily:"monospace",fontSize:12,lineHeight:1.85,padding:24,borderRadius:18,background:"rgba(0,0,0,.45)",border:"1px solid rgba(244,114,182,.2)",overflowX:"auto"}}>
                  <div style={{color:"#f472b6",marginBottom:6}}>{\`// AgriVerify Smart Contract · Polygon\`}</div>
                  <div><span style={{color:"#a78bfa"}}>contract </span><span style={{color:"#4ade80"}}>CropPassport </span><span style={{color:"#a78bfa"}}>is </span><span style={{color:"#22d3ee"}}>ERC721</span>{" {"}</div>
                  <div style={{paddingLeft:16}}>
                    <div style={{color:"#a78bfa"}}>{"struct "}<span style={{color:"#fbbf24"}}>QualityRecord</span>{" {"}</div>
                    <div style={{paddingLeft:16}}>
                      <div><span style={{color:"#fb923c"}}>string </span><span style={{color:"#e8f5f0"}}>grade</span>; <span style={{color:"#2d5c5c"}}>{\`// "GOLD" | "SILVER"\`}</span></div>
                      <div><span style={{color:"#fb923c"}}>uint8 </span><span style={{color:"#e8f5f0"}}>score</span>; <span style={{color:"#2d5c5c"}}>{\`// 0-100\`}</span></div>
                      <div><span style={{color:"#fb923c"}}>uint256 </span><span style={{color:"#e8f5f0"}}>moisture</span>;</div>
                      <div><span style={{color:"#fb923c"}}>bytes32 </span><span style={{color:"#e8f5f0"}}>imageHash</span>;</div>
                    </div>
                    <div style={{color:"#a78bfa"}}>{"}"}</div>
                    <br />
                    <div><span style={{color:"#22d3ee"}}>function </span><span style={{color:"#fbbf24"}}>mintCertificate</span>{"("}</div>
                    <div style={{paddingLeft:16}}>
                      <div><span style={{color:"#fb923c"}}>address </span>farmer,</div>
                      <div>QualityRecord calldata record</div>
                    </div>
                    <div>{")"}<span style={{color:"#a78bfa"}}> external </span><span style={{color:"#10b981"}}>returns</span>{"("}<span style={{color:"#fb923c"}}>uint256</span>{")"}</div>
                  </div>
                  <div>{"}"}</div>
                  <div style={{marginTop:14,paddingTop:12,borderTop:"1px solid rgba(255,255,255,.07)",color:"#10b981"}}>✓ Deployed · Gas: ~0.001 MATIC per cert</div>
                </div>
              </div>
            </GCard>
          </div>
        </section>

        {/* RISK */}
        <section style={{padding:"80px 1.5rem"}}>
          <div style={{maxWidth:1280,margin:"0 auto"}}>
            <div style={{textAlign:"center",marginBottom:56}}>
              <Badge style={{background:"rgba(167,139,250,.12)",border:"1px solid rgba(167,139,250,.3)",color:"#a78bfa",marginBottom:20}}>🛡️ Risk Mitigation</Badge>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:900,color:"#fff",marginBottom:14}}>Engineered for the Field</h2>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:24}}>
              {[
                {icon:"🔐",title:"Anti-Fraud Architecture",color:"#f472b6",problem:"Photo manipulation, fake certificates",solution:"Photo-Digital Twins create a cryptographic hash of every uploaded image stored on IPFS. Physical QR seals with NFC chips link physical produce to digital records.",tags:["IPFS Hash","NFC QR-Seals","ERC-721 NFT"]},
                {icon:"📡",title:"Offline-First Architecture",color:"#10b981",problem:"2G or worse connectivity in 40% of farming areas",solution:"'Sync-Later' architecture: AI grading, blockchain certificate generation, and quality reports all work offline. Data queues and syncs automatically when connectivity returns.",tags:["SQLite Local","Background Sync","Delta Compression"]},
                {icon:"🌫️",title:"Environmental Pre-processing",color:"#fbbf24",problem:"Mandi environments: dust, poor light, motion blur",solution:"Multi-layer AI pre-processing: adaptive histogram equalization, Gaussian noise reduction for dusty environments, and automatic image quality scoring before analysis.",tags:["OpenCV Pipeline","Adaptive EQ","Noise Reduction"]},
              ].map((c,i)=>(
                <GCard key={i} style={{padding:28}} className="card-hover">
                  <div style={{fontSize:38,marginBottom:16}}>{c.icon}</div>
                  <h3 style={{fontSize:"1.1rem",fontWeight:800,color:"#fff",marginBottom:10}}>{c.title}</h3>
                  <div style={{padding:"8px 12px",borderRadius:9,background:"rgba(248,113,113,.07)",border:"1px solid rgba(248,113,113,.15)",marginBottom:14}}>
                    <span style={{color:"#f87171",fontSize:11,fontWeight:700}}>Risk: </span>
                    <span style={{color:"#7fbfa8",fontSize:11}}>{c.problem}</span>
                  </div>
                  <p style={{fontSize:13,color:"#7fbfa8",lineHeight:1.75,marginBottom:16}}>{c.solution}</p>
                  <div style={{display:"flex",gap:7,flexWrap:"wrap"}}>
                    {c.tags.map((t,j)=>(
                      <span key={j} style={{padding:"4px 11px",borderRadius:999,fontSize:11,fontWeight:700,background:c.color+"15",border:\`1px solid \${c.color}30\`,color:c.color}}>{t}</span>
                    ))}
                  </div>
                </GCard>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section style={{padding:"80px 1.5rem",position:"relative"}}>
          <div style={{position:"absolute",top:"40%",right:"8%",width:260,height:260,background:"radial-gradient(circle,rgba(34,211,238,.1),transparent 70%)",filter:"blur(55px)",pointerEvents:"none"}} />
          <div style={{maxWidth:1000,margin:"0 auto"}}>
            <div style={{textAlign:"center",marginBottom:56}}>
              <Badge style={{background:"rgba(34,211,238,.12)",border:"1px solid rgba(34,211,238,.3)",color:"#22d3ee",marginBottom:20}}>👥 The Team</Badge>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:900,color:"#fff"}}>Built by Believers</h2>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:24}}>
              {[
                {name:"Aditya Singh",role:"Founder & Strategy",emoji:"🚀",color:"#10b981",desc:"Visionary behind AgriVerify AI. Leads product strategy and business development. Passionate about Web3 fairness for Indian agriculture.",tags:["Strategy","Product","BD"]},
                {name:"Reyansh Dalui",role:"Technology Lead",emoji:"⚡",color:"#f472b6",desc:"Architects the AI grading pipeline and blockchain infrastructure. Expert in ML model optimization for edge deployment on low-cost devices.",tags:["AI/ML","Blockchain","Edge Computing"]},
                {name:"Ankan Shah",role:"Technology",emoji:"🔬",color:"#a78bfa",desc:"Builds the Bhashini voice integration and real-time data pipelines. Expert in regional language NLP and distributed agricultural systems.",tags:["NLP","Voice AI","Systems"]},
              ].map((m,i)=>(
                <GCard key={i} style={{padding:28,textAlign:"center",borderColor:m.color+"28"}} className="card-hover">
                  <div style={{width:72,height:72,borderRadius:20,background:m.color+"18",border:\`1px solid \${m.color}35\`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:34,margin:"0 auto 16px",boxShadow:\`0 0 35px \${m.color}35\`}}>{m.emoji}</div>
                  <h3 style={{fontSize:"1.1rem",fontWeight:800,color:"#fff",marginBottom:4}}>{m.name}</h3>
                  <p style={{fontSize:12,color:m.color,fontWeight:700,marginBottom:14}}>{m.role}</p>
                  <p style={{fontSize:12,color:"#7fbfa8",lineHeight:1.75,marginBottom:16}}>{m.desc}</p>
                  <div style={{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"}}>
                    {m.tags.map((t,j)=><span key={j} style={{padding:"4px 11px",borderRadius:999,fontSize:11,background:m.color+"15",color:m.color,fontWeight:700}}>{t}</span>)}
                  </div>
                </GCard>
              ))}
            </div>
          </div>
        </section>

        {/* BLOGS */}
        <section id="blogs" style={{padding:"100px 1.5rem",position:"relative"}}>
          <div style={{position:"absolute",top:"15%",left:0,width:320,height:320,background:"radial-gradient(circle,rgba(251,146,60,.1),transparent 70%)",filter:"blur(75px)",pointerEvents:"none"}} />
          <div style={{maxWidth:1280,margin:"0 auto"}}>
            <div style={{textAlign:"center",marginBottom:56}}>
              <Badge style={{background:"rgba(251,146,60,.12)",border:"1px solid rgba(251,146,60,.3)",color:"#fb923c",marginBottom:20}}>📝 Research & Insights</Badge>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,3.2rem)",fontWeight:900,color:"#fff",marginBottom:14}}>The Indian Farmer's Crisis</h2>
              <p style={{color:"#7fbfa8",maxWidth:480,margin:"0 auto"}}>In-depth research on the systemic challenges facing India's 140 million farming families.</p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:20}}>
              {BLOGS.map(b=>(
                <GCard key={b.id} onClick={()=>setActiveBlog(b.id)} style={{padding:22,cursor:"pointer",borderColor:b.color+"18",transition:"all .35s"}} className="card-hover blog-card">
                  <div style={{fontSize:32,marginBottom:12}}>{b.icon}</div>
                  <Badge style={{background:b.color+"18",border:\`1px solid \${b.color}38\`,color:b.color,marginBottom:14,fontSize:10}}>{b.category}</Badge>
                  <h3 style={{fontSize:"0.94rem",fontWeight:800,color:"#fff",lineHeight:1.45,marginBottom:10,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{b.title}</h3>
                  <p style={{fontSize:12,color:"#5a8a79",lineHeight:1.65,marginBottom:14,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{b.excerpt}</p>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:11,color:"#3d6b5a"}}>
                    <span>{b.readTime} read</span>
                    <span style={{color:b.color,fontWeight:800}}>Read →</span>
                  </div>
                </GCard>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{padding:"100px 1.5rem"}}>
          <div style={{maxWidth:900,margin:"0 auto"}}>
            <GCard style={{padding:"56px 40px",textAlign:"center",position:"relative",overflow:"hidden",borderColor:"rgba(16,185,129,.22)"}}>
              <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(16,185,129,.08),transparent 70%)",pointerEvents:"none"}} />
              <div style={{position:"absolute",top:-60,left:-60,width:250,height:250,borderRadius:"50%",background:"radial-gradient(circle,rgba(244,114,182,.1),transparent 70%)",filter:"blur(40px)",pointerEvents:"none"}} />
              <div style={{position:"relative"}}>
                <div style={{fontSize:60,marginBottom:16,animation:"floatY 4s ease-in-out infinite"}}>🌾</div>
                <Badge style={{background:"rgba(16,185,129,.12)",border:"1px solid rgba(16,185,129,.3)",color:"#10b981",marginBottom:24}}>🤝 Partner With Us</Badge>
                <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:900,color:"#fff",marginBottom:16}}>
                  Join the <span style={{background:"linear-gradient(135deg,#10b981,#34d399,#22d3ee)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Revolution</span>
                </h2>
                <p style={{color:"#7fbfa8",maxWidth:520,margin:"0 auto 40px",lineHeight:1.75}}>Partner with AgriVerify AI to bring transparent, fair, AI-powered crop verification to India's farmers. Seeking pilots, investors, and government partnerships.</p>
                <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap",marginBottom:36}}>
                  {[
                    {icon:"📞",label:"Aditya Singh",value:"+91 9674951947",href:"tel:+919674951947"},
                    {icon:"📧",label:"Email",value:"adityasinghvoid0009@gmail.com",href:"mailto:adityasinghvoid0009@gmail.com"},
                    {icon:"📞",label:"Team",value:"+91 9748124930",href:"tel:+919748124930"},
                  ].map((c,i)=>(
                    <a key={i} href={c.href} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 20px",borderRadius:14,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.09)",textDecoration:"none",transition:"all .3s"}} onMouseOver={e=>{e.currentTarget.style.background="rgba(255,255,255,.08)";e.currentTarget.style.transform="translateY(-3px)"}} onMouseOut={e=>{e.currentTarget.style.background="rgba(255,255,255,.04)";e.currentTarget.style.transform="none"}}>
                      <span style={{fontSize:22}}>{c.icon}</span>
                      <div style={{textAlign:"left"}}>
                        <div style={{fontSize:10,color:"#4d9e88",textTransform:"uppercase",letterSpacing:".07em"}}>{c.label}</div>
                        <div style={{fontSize:13,color:"#d1fae5",fontWeight:700}}>{c.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
                <button onClick={()=>goTo("demo")} style={{padding:"14px 38px",borderRadius:15,background:"linear-gradient(135deg,#10b981,#059669)",color:"#fff",border:"none",cursor:"pointer",fontSize:15,fontWeight:800,boxShadow:"0 0 45px #10b98155",transition:"all .3s"}} onMouseOver={e=>{e.target.style.transform="translateY(-3px)";e.target.style.boxShadow="0 0 65px #10b98175"}} onMouseOut={e=>{e.target.style.transform="none";e.target.style.boxShadow="0 0 45px #10b98155"}}>
                  🚀 Start Free Trial
                </button>
              </div>
            </GCard>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{borderTop:"1px solid rgba(255,255,255,.07)",padding:"28px 1.5rem"}}>
          <div style={{maxWidth:1280,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:14}}>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <div style={{width:32,height:32,borderRadius:9,background:"linear-gradient(135deg,#10b981,#059669)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:17}}>🌾</div>
              <span style={{fontFamily:"'Playfair Display',serif",fontWeight:800,color:"#fff"}}>AgriVerify <span style={{color:"#10b981"}}>AI</span></span>
            </div>
            <div style={{display:"flex",gap:22,flexWrap:"wrap"}}>
              {["home","problem","features","demo","blogs","contact"].map(s=>(
                <button key={s} onClick={()=>goTo(s)} style={{background:"none",border:"none",color:"#4d9e88",fontSize:12,cursor:"pointer",textTransform:"capitalize",transition:"color .2s"}} onMouseOver={e=>e.target.style.color="#10b981"} onMouseOut={e=>e.target.style.color="#4d9e88"}>{s}</button>
              ))}
            </div>
            <div style={{fontSize:12,color:"#2d5c5c"}}>© 2025 AgriVerify AI · Built on <span style={{color:"#a78bfa"}}>Polygon</span></div>
          </div>
        </footer>
      </div>
    </>
  );
}

const CSS = \`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,800;0,900;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{background:#071a14;}
::-webkit-scrollbar{width:5px;}
::-webkit-scrollbar-track{background:#071a14;}
::-webkit-scrollbar-thumb{background:linear-gradient(#10b981,#f472b6,#a78bfa);border-radius:3px;}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.15}}
@keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeOut{to{opacity:0;pointer-events:none}}
@keyframes splashPop{from{opacity:0;transform:scale(.82)}to{opacity:1;transform:scale(1)}}
@keyframes loadBar{from{width:0}to{width:100%}}
@keyframes gradShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
@keyframes spin{from{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(360deg)}}
@keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-22px)}}
@keyframes scrollDot{0%,100%{transform:translateY(0);opacity:1}50%{transform:translateY(16px);opacity:.25}}
@keyframes scanDown{0%{top:0%;opacity:1}50%{top:100%;opacity:.6}100%{top:0%;opacity:1}}
@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-25%)}}
@keyframes pulseGlow{0%,100%{box-shadow:0 0 60px #10b98190,0 0 120px #10b98130}50%{box-shadow:0 0 80px #10b981b0,0 0 160px #10b98150}}
.card-hover{transition:transform .3s ease,box-shadow .3s ease,border-color .3s ease !important;}
.card-hover:hover{transform:translateY(-7px) !important;box-shadow:0 28px 70px rgba(0,0,0,.45),0 0 0 1px rgba(255,255,255,.08) !important;}
.blog-card:hover{transform:translateY(-9px) scale(1.025) !important;}
@media(max-width:768px){
  .nav-links{display:none !important;}
  .hamburger{display:block !important;}
  .demo-grid{grid-template-columns:1fr !important;}
  .result-grid{grid-template-columns:1fr !important;}
  .bc-grid{grid-template-columns:1fr !important;}
  .stats-grid{grid-template-columns:repeat(2,1fr) !important;}
}
\`;
