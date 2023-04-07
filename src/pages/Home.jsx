import React from 'react'
import CarList from '../components/CarList'
import SearchBar from '../components/SearchBar'
import SearchSelector from '../components/SearchSelector'
import carsData from '../data/cars-dataset.json'

const Home = () => {
  return (
    <div className='max-w-screen-lg mx-auto pt-5'>
      {/* <div className='bg-neutral py-2 md:py-5 top-0'> */}
      <div className='max-w-screen-md mx-auto px-5 border rounded-md bg-white py-5'>
        <SearchSelector />
      </div>
      {/* </div> */}
      <div className=''>
        <CarList cars={carsData} />
      </div>
    </div>
  )
}

export default Home