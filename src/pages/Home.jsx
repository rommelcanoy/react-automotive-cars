import React from 'react'
import CarGrid from '../components/CarGrid'
import carsData from '../data/cars-dataset.json'

const Home = () => {
  return (
    <div className='max-w-screen-lg mx-auto'>
      {/* <div className='navbar p-5'>
        <div>
          <span>Logo Area</span>
        </div>
        <div>
          <div><input type="search" /></div>
        </div>
      </div> */}

      <CarGrid cars={carsData} />

    </div>
  )
}

export default Home