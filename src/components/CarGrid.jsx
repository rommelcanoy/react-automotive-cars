import React from 'react'
import CarCard from './CarCard'

const CarGrid = ({ cars }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  )
}

export default CarGrid