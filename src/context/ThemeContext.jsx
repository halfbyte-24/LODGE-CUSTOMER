import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Determine if it is currently Day (06:00 to 17:59) or Night (18:00 to 05:59)
  const calculateAutoTheme = () => {
    const hours = new Date().getHours();
    return hours >= 6 && hours < 18 ? 'day' : 'night';
  };

  const [isAuto, setIsAuto] = useState(true);
  const [theme, setTheme] = useState(calculateAutoTheme);

  // Auto theme synchronization with local time
  useEffect(() => {
    if (isAuto) {
      const current = calculateAutoTheme();
      setTheme(current);

      // Check every 5 minutes in case visitor crosses the 6 AM / 6 PM boundary
      const interval = setInterval(() => {
        if (isAuto) {
          setTheme(calculateAutoTheme());
        }
      }, 5 * 60 * 1000);

      return () => clearInterval(interval);
    }
  }, [isAuto]);

  // Apply data-theme attribute on root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Manual toggle handler: toggles between day and night, but keeps user in control
  const toggleTheme = () => {
    setIsAuto(false);
    setTheme(prev => (prev === 'day' ? 'night' : 'day'));
  };

  const resetToAuto = () => {
    setIsAuto(true);
    setTheme(calculateAutoTheme());
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDay: theme === 'day',
        isNight: theme === 'night',
        isAuto,
        toggleTheme,
        resetToAuto
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
