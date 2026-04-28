import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [voiceGender, setVoiceGender] = useState('female');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lastSpokenText, setLastSpokenText] = useState('');

  const t = translations[lang] || translations['en'];

  // Mock Bhashini TTS
  const speakText = useCallback((text) => {
    if (!voiceEnabled) return;
    
    // Stop any ongoing speech
    window.speechSynthesis.cancel();
    setLastSpokenText(text);
    setIsSpeaking(true);
    
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
    
    // Try to simulate male/female by picking different voices
    const voices = window.speechSynthesis.getVoices();
    const langVoices = voices.filter(v => v.lang === utterance.lang || v.lang.startsWith(utterance.lang.split('-')[0]));
    
    if (langVoices.length > 0) {
       if (voiceGender === 'female') {
           utterance.voice = langVoices[0]; // Usually default is female
       } else {
           utterance.voice = langVoices.length > 1 ? langVoices[1] : langVoices[0];
           utterance.pitch = 0.8; // Lower pitch for male simulation if no distinct male voice
       }
    }

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
  }, [voiceEnabled, lang, voiceGender]);

  const replay = useCallback(() => {
    if (lastSpokenText) speakText(lastSpokenText);
  }, [lastSpokenText, speakText]);

  // Handle voice cleanup
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <LanguageContext.Provider value={{ 
      lang, setLang, 
      voiceEnabled, setVoiceEnabled, 
      voiceGender, setVoiceGender,
      isSpeaking, replay,
      t, speakText 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
