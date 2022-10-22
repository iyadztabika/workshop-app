import React, { useContext } from 'react'
import { ThemeContext } from '../../context/theme'

const Button = () => {
  const { handleSetDarkMode } = useContext(ThemeContext)

  return (
    <button
      className='d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0 btn btn-dark'
      onClick={handleSetDarkMode}
    >
      Dark Mode
    </button>
  )
}

export default Button
