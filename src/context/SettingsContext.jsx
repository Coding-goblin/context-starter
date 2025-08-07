import {useState, createContext} from "react"

export const SettingsContext = createContext(null)

export function SettingsProvider({children}) {

  const [count, setCount] = useState(0);
  const [language, setLanguage] = useState('cz');
  const [theme, setTheme] = useState('light');

  return (
    <SettingsContext.Provider value={{
      language,
      setLanguage,
      theme,
      setTheme,
      count,
      setCount,
      }}>
       
      {children}

    </SettingsContext.Provider>
      )
}