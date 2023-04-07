import React from 'react'
import CarItem from './CarItem'

const CarList = ({ cars }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
      {cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </div>
  )
}

export default CarList