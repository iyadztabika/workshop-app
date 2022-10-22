import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setUser(json))
  }, [])

  const handleSetDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  return (
    <ThemeContext.Provider value={{
      user,
      darkMode,
      handleSetDarkMode,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider