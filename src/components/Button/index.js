import React from 'react'
import { useTheme } from '../../context/theme'

const Button = () => {
  const {darkMode, handleSetDarkMode} = useTheme()

  return (
    <button
      className={`d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0 btn ${darkMode ? 'btn-light' : 'btn-dark'}`}
      onClick={handleSetDarkMode}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

export default Button
