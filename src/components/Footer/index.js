import React from 'react'
import Copyright from './components/Copyright'
import PrivacyPolicy from './components/PrivacyPolicy'

const Footer = () => {
  return (
    <footer className="py-4 bg-light mt-auto">
      <div className="container-fluid px-4">
        <div className="d-flex align-items-center justify-content-between small">
            <Copyright />
            <PrivacyPolicy />
        </div>
      </div>
    </footer>
  )
}

export default Footer
