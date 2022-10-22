import React, { useContext } from 'react'
import Button from '../Button'
import Logo from './components/Logo'
import { ThemeContext } from '../../context/theme'

const Navbar = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <nav className={`sb-topnav navbar navbar-expand ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <Logo />
      <Button />
    </nav>
  )
}

export default Navbar
