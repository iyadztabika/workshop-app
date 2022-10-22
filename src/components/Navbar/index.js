import React from 'react'
import { useTheme } from '../../context/theme'

import Button from '../Button'
import Logo from './components/Logo'

const Navbar = () => {
  const {darkMode}  = useTheme()

  return (
    <nav 
      className={`sb-topnav navbar navbar-expand ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}
    >
      <Logo darkMode={darkMode} />
      <Button />
    </nav>
  )
}

export default Navbar
