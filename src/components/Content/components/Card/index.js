import React from 'react'
import CardDetails from './components/CardDetails'
import CardTitle from './components/CardTitle'

const Card = () => {
  return (
    <div className="col-xl-3 col-md-6">
      <div className="card bg-white text-dark mb-4">
        <CardTitle />
        <CardDetails />
      </div>
    </div>
  )
}

export default Card
