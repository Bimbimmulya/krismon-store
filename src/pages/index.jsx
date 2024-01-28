import React from 'react'
import Porducts from './product'

const HomePage = () => {
  return (
    <div>
        <div className="card text-bg-dark border-0">
        <img src="/assets/images/bg-hero.jpeg" className="card-img" alt="Background Hero" height="650px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
            </div>
        </div>
        </div>
        <Porducts/>
    </div>
  )
}

export default HomePage
