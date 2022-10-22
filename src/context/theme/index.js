import React, { useState, useContext, createContext } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(false)

  const handleSetDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        handleSetDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)