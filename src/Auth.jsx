import React, { useState } from 'react';
import { supabase } from './lib/supabase';

export default function Auth({ onAuthSuccess, onBack }) {
  const [mode, setMode] = useState('login'); // 'login' or 'signup'
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    state: '',
    city: '',
    pincode: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === 'signup') {
        // 1. Sign up the user
        const { data: authData, error: authError } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.name,
              phone: formData.phone
            }
          }
        });

        if (authError) throw authError;

        // 2. Save additional info to profiles table
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: authData.user.id,
              name: formData.name,
              dob: formData.dob,
              state: formData.state,
              city: formData.city,
              pincode: formData.pincode,
              phone: formData.phone,
              email: formData.email
            }
          ]);

        if (profileError) throw profileError;
        onAuthSuccess(authData.user);
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        if (error) throw error;
        onAuthSuccess(data.user);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(160deg,#071a14 0%,#0a1520 40%,#130a22 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ width: '100%', maxWidth: '480px', background: 'rgba(10, 20, 16, 0.7)', backdropFilter: 'blur(32px)', border: '1px solid rgba(0, 255, 135, 0.1)', borderRadius: '24px', padding: '40px', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #10b981, #059669)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', margin: '0 auto 16px', boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)' }}>🌾</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', color: '#fff', marginBottom: '8px' }}>{mode === 'login' ? 'Welcome Back' : 'Join AgriVerify'}</h2>
          <p style={{ color: '#7fbfa8', fontSize: '14px' }}>{mode === 'login' ? 'Access the live auction marketplace' : 'Create your account to start bidding'}</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
          {mode === 'signup' && (
            <>
              <Input label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <Input label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} required />
                <Input label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <Input label="State" name="state" value={formData.state} onChange={handleChange} required />
                <Input label="City" name="city" value={formData.city} onChange={handleChange} required />
              </div>
              <Input label="Pincode" name="pincode" value={formData.pincode} onChange={handleChange} required />
            </>
          )}
          <Input label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />
          <Input label="Password" name="password" type="password" value={formData.password} onChange={handleChange} required />

          <button type="submit" disabled={loading} style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 800, cursor: 'pointer', marginTop: '10px', boxShadow: '0 8px 24px rgba(16, 185, 129, 0.25)', transition: 'all 0.3s' }}>
            {loading ? 'Processing...' : mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} style={{ background: 'none', border: 'none', color: '#10b981', fontSize: '14px', cursor: 'pointer', fontWeight: 600 }}>
            {mode === 'login' ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
          </button>
          <div style={{ marginTop: '16px' }}>
            <button onClick={onBack} style={{ background: 'none', border: 'none', color: '#5a8a79', fontSize: '13px', cursor: 'pointer' }}>← Back to Marketplace</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: '11px', color: '#4d9e88', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>{label}</label>
      <input {...props} style={{ width: '100%', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '10px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = '#10b981'} onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'} />
    </div>
  );
}
