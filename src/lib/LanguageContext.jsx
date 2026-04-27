import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const [voiceEnabled, setVoiceEnabled] = useState(false);

  const t = translations[lang] || translations['en'];

  // Mock Bhashini TTS
  const speakText = useCallback((text) => {
    if (!voiceEnabled) return;
    
    // Stop any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Attempt to set a matching language voice
    const voiceMap = {
      'en': 'en-IN',
      'hi': 'hi-IN',
      'bn': 'bn-IN',
      'mr': 'mr-IN',
      'ta': 'ta-IN',
      'te': 'te-IN',
      'kn': 'kn-IN'
    };
    utterance.lang = voiceMap[lang] || 'en-IN';
    
    window.speechSynthesis.speak(utterance);
  }, [voiceEnabled, lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, voiceEnabled, setVoiceEnabled, t, speakText }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
