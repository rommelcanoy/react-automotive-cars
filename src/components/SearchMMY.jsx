import React from 'react'
import _ from 'lodash';
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import SearchDropdown from './SearchDropdown'

const SearchMMY = () => {
  const carsData = useSelector((state) => state.car.carsData);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    const makes = _.sortBy([...new Set(carsData.map((car) => car.make))]);
    const models = _.sortBy([...new Set(carsData.map((car) => car.model))]);
    const years = _.sortBy([...new Set(carsData.map((car) => car.year))]);
    setMakes(makes);
    setModels(models);
    setYears(years);
  }, []);

  return (
    <>
      {
        makes && models && years &&

        <div className='flex flex-col gap-5'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            <SearchDropdown type={'Make'} data={makes} />
            <SearchDropdown type={'Model'} data={models} />
            <SearchDropdown type={'Year'} data={years} />

          </div>
          <div className='flex'>
            <button type="button" className="text-white right-2.5 bottom-2.5 bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-sm px-4 py-2">Filter</button>
          </div>
        </div>
      }

    </>
  )
}

export default SearchMMY