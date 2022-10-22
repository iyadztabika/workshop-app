import React from 'react'

const Logo = ({darkMode}) => {
  return (
    <a className={`navbar-brand ps-3 ${darkMode ? 'text-white' : 'text-dark'}`} href="#!">
      Workshop App
    </a>
  )
}

export default Logo
