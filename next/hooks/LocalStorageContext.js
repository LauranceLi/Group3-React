import { createContext, useState, useContext, useEffect } from 'react';

const LocalStorageContext = createContext(null);

export function LocalStorageProvider({ children }) {
  const [localStorageData, setLocalStorageData] = useState({});

  useEffect(() => {
    // 从 localStorage 恢復數據
    const storedData = localStorage.getItem('appData');
    if (storedData) {
      setLocalStorageData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    // 將數據保存到 localStorage
    localStorage.setItem('appData', JSON.stringify(localStorageData));
  }, [localStorageData]);

  return (
    <LocalStorageContext.Provider value={{ localStorageData, setLocalStorageData }}>
      {children}
    </LocalStorageContext.Provider>
  );
}

export const useLocalStorage = () => useContext(LocalStorageContext);
