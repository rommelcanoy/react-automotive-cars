import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import Gallery from '../components/Gallery';
import { dateFormatter } from '../utils/dateFormatter';
import { moneyFormatter } from '../utils/moneyFormatter';

const CarDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [imageCollection, setImageCollection] = useState([]);
  const carsData = useSelector(state => state.car.carsData);

  useEffect(() => {
    // console.log('carsData', carsData);

    const result = carsData.find(car => car.id === parseInt(id));

    const combinedImages = [result.image, ...result.gallery];
    setImageCollection(combinedImages);

    setData(result);

    console.log('result', result);

  }, []);

  return (
    data && <div className='flex flex-col md:p-5 md:pb-5'>
      {/* <div className='w-full h-[465px] relative'>
      <div className='absolute md:left-[10%] md:top-[30%] text-white text-2xl z-30 w-72'>
        <div className='w-16 h-1 bg-[#FEA500] mb-4'>
        </div>
        <h1 className='font-semibold text-3xl uppercase'>Dodge Grand Caravan (2018)</h1>
      </div>
      <div className="absolute inset-0 w-full h-full bg-gray-900 bg-opacity-50"></div>
      <img src="https://images.hgmsites.net/lrg/2014-dodge-grand-caravan_100438371_l.jpg" className='w-full h-full object-cover' />
    </div> */}
      <div className='details bg-white rounded z-50 max-w-screen-lg w-full p-5 md:p-10 mx-auto flex flex-col gap-5'>

        <div className='flex md:flex-row flex-col justify-between'>
          <div className=''>
            <div className='flex md:flex-row flex-col gap-4 md:items-center mb-2'>
              <Link to="/" type="button" className="text-gray-500 bg-gray-200 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none font-medium rounded text-sm md:px-5 md:py-2.5 px-3 py-2 text-center inline-flex items-center mr-auto">
                <svg className='w-4 h-4' fill="none" stroke="currentColor" strokeWidth={2.0} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </Link>
              <h1 className='font-semibold md:text-2xl uppercase'>{data.make} {data.model} ({data.year})</h1>
            </div>
            {/* <span className='text-gray-400 bg-gray-200 py-1 px-2 rounded'>VIN: 1FTEX1E81AFD91205</span> */}
          </div>
          <h1 className='font-semibold md:text-2xl uppercase'>{moneyFormatter(data.price)}</h1>
        </div>

        <Gallery data={data} imageCollection={imageCollection} />

        <div className='grid grid-cols-1 md:grid-cols-2 md:p-5 md:gap-3'>
          <div className='text-justify md:mr-10 md:mb-0 mb-5'>
            <div className='my-2 text-sm font-semibold'>Description</div>

            <p className='text-sm text-gray-600'>{data.description}</p>
          </div>
          <div>
            <div className='grid grid-cols-2 gap-2'>
              <div className=''>
                <div className='my-2 text-sm font-semibold'>Ownership</div>
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                  {
                    data.ownership.slice().reverse().map((ownership) => (
                      <li className="mb-6 ml-4" key={ownership.owner}>
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-xs leading-none text-gray-400 dark:text-gray-500">{dateFormatter(ownership.start_date)} - {dateFormatter(ownership.end_date)}</time>
                        <h3 className="font-medium text-gray-900 dark:text-white text-xs">{ownership.owner}</h3>
                      </li>
                    ))
                  }

                  {/* <li className="mb-6 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-xs leading-none text-gray-400 dark:text-gray-500">February 2022 - March 2022</time>
                  <h3 className="font-medium text-gray-900 dark:text-white text-xs">David Kim</h3>
                </li>
                <li className="mb-6 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-xs leading-none text-gray-400 dark:text-gray-500">February 2022 - March 2022</time>
                  <h3 className="font-medium text-gray-900 dark:text-white text-xs">David Kim</h3>
                </li> */}
                </ol>
              </div>

              <div className=''>
                <div className='my-2 text-sm font-semibold'>Accidents</div>
                {
                  data.accidents.length > 0 ? <ol className="relative border-l border-gray-200 dark:border-gray-700">
                    {

                      data.accidents.slice().reverse().map((accident) => (
                        <li className="mb-6 ml-4" key={accident.date}>
                          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                          <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">{dateFormatter(accident.date)}</time>
                          {/* <h3 className="font-semibold text-gray-900 dark:text-white">David Kim</h3> */}
                          <p className="mb-4 text-gray-900 dark:text-gray-400 text-xs font-medium">{accident.description}</p>
                        </li>
                      ))
                    }
                  </ol> : <div className='text-xs text-gray-500'>No accident</div>
                }
              </div>
            </div>

            <div className='text-justify md:mr-10 md:mb-0 mb-5'>
              <div className='my-2 text-sm font-semibold'>Vehicle Identification Number (VIN)</div>

              <span className='text-sm text-gray-600 bg-gray-100 rounded px-2 py-1'>{data.vin}</span>
            </div>
          </div>

          {/* <div>
          <div className='my-2 text-sm font-semibold'>Ownership</div>
        </div> */}

        </div>
      </div>

    </div>
  )
}

export default CarDetails