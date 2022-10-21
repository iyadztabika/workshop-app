import React from 'react'
import Button from '../Button'
import Logo from './components/Logo'

const Navbar = () => {
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-light bg-light">
      <Logo />
      <Button />
    </nav>
  )
}

export default Navbar
