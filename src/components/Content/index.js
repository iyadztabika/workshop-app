import React from 'react'
import Footer from '../Footer'
import Card from './components/Card'
import Header from './components/Header'

const Content = () => {
  return (
    <div id="layoutSidenav_content">
      <main>
        <div className="container-fluid px-4 bg-white">
          <Header />
          <div className="row">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Content
