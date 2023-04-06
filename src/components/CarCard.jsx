import React from 'react'
import { Link } from 'react-router-dom';
import placeHolderImage from '../assets/placeholder_image.jpg'
import { moneyFormatter } from '../utils/moneyFormatter';

const CarCard = ({ car }) => {

  const onError = (event) => {
    event.target.src = placeHolderImage;
  };

  return (
    <div className="rounded bg-white overflow-hidden p-5 flex flex-col gap-3">
      <div>
        <h2 className="font-semibold truncate">{car.make} {car.model} ({car.year})</h2>
        <div className='text-xs mt-1'>
          <span className='font-normal text-gray-500'>VIN: {car.vin}</span>
        </div>
      </div>
      <div className="w-full h-48 bg-cover bg-center">
        <img src={car.image} className="rounded object-cover h-full w-full" onError={onError} />
      </div>

      <div className="flex justify-between items-center">
        <div className="">
          {/* <p className="text-sm">{car.year}</p> */}
          <p className="text-lg font-semibold text-gray-700">{moneyFormatter(car.price)}</p>
        </div>
        <div>
          <Link to={`/car_details/${car.id}`} type="button" className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-2 focus:ring-gray-400 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center">
            More details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CarCard