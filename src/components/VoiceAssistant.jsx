import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, RotateCcw, User, UserCheck } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export default function VoiceAssistant() {
  const { voiceEnabled, setVoiceEnabled, voiceGender, setVoiceGender, isSpeaking, replay, lang } = useLanguage();

  if (!voiceEnabled) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      style={{
        position: 'fixed',
        bottom: 30,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        background: 'rgba(12, 22, 40, 0.85)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(16, 185, 129, 0.3)',
        borderRadius: 24,
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        boxShadow: isSpeaking 
          ? '0 0 30px rgba(16, 185, 129, 0.4), inset 0 0 10px rgba(16, 185, 129, 0.2)' 
          : '0 10px 40px rgba(0, 0, 0, 0.5)',
        transition: 'box-shadow 0.3s ease'
      }}
    >
      {/* Equalizer Animation */}
      <div style={{ display: 'flex', gap: 4, alignItems: 'center', height: 24 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            animate={{
              height: isSpeaking ? [8, Math.random() * 20 + 10, 8] : 8,
              opacity: isSpeaking ? 1 : 0.4
            }}
            transition={{
              duration: 0.5,
              repeat: isSpeaking ? Infinity : 0,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
            style={{
              width: 4,
              background: '#10b981',
              borderRadius: 2,
            }}
          />
        ))}
      </div>

      <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.1)' }} />

      {/* Voice Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        
        {/* Replay Button */}
        <button 
          onClick={replay}
          disabled={!isSpeaking && false} // Let them replay anytime if lastSpokenText exists
          style={{
            background: 'none',
            border: 'none',
            color: '#7fbfa8',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 32,
            height: 32,
            borderRadius: '50%',
            transition: 'all 0.2s',
          }}
          onMouseOver={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#10b981'; }}
          onMouseOut={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#7fbfa8'; }}
          title="Replay"
        >
          <RotateCcw size={16} />
        </button>

        {/* Gender Toggle */}
        <div style={{
          display: 'flex',
          background: 'rgba(0,0,0,0.4)',
          borderRadius: 20,
          padding: 3,
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          <button
            onClick={() => setVoiceGender('female')}
            style={{
              background: voiceGender === 'female' ? 'rgba(16, 185, 129, 0.2)' : 'none',
              border: 'none',
              color: voiceGender === 'female' ? '#10b981' : '#4d9e88',
              padding: '6px 12px',
              borderRadius: 16,
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Female
          </button>
          <button
            onClick={() => setVoiceGender('male')}
            style={{
              background: voiceGender === 'male' ? 'rgba(16, 185, 129, 0.2)' : 'none',
              border: 'none',
              color: voiceGender === 'male' ? '#10b981' : '#4d9e88',
              padding: '6px 12px',
              borderRadius: 16,
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Male
          </button>
        </div>

        {/* Close / Disable Button */}
        <button 
          onClick={() => setVoiceEnabled(false)}
          style={{
            background: 'none',
            border: 'none',
            color: '#f87171',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 32,
            height: 32,
            borderRadius: '50%',
            transition: 'all 0.2s',
            marginLeft: 8
          }}
          onMouseOver={e => e.currentTarget.style.background = 'rgba(248, 113, 113, 0.1)'}
          onMouseOut={e => e.currentTarget.style.background = 'none'}
          title="Disable Voice Assistant"
        >
          <VolumeX size={16} />
        </button>
      </div>
      
      {/* Small badge to show Bhashini mock */}
      <div style={{ position: 'absolute', top: -10, right: 20, background: '#10b981', color: '#000', fontSize: 9, fontWeight: 800, padding: '2px 6px', borderRadius: 6, letterSpacing: '0.05em' }}>
        BHASHINI TTS
      </div>
    </motion.div>
  );
}
