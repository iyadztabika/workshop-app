import React, { useContext } from 'react'
import { ThemeContext } from '../../../../context/theme'

const Logo = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <a className={`navbar-brand ps-3 ${darkMode ? 'text-light' : 'text-dark'}`} href="#!">
      Workshop App
    </a>
  )
}

export default Logo
