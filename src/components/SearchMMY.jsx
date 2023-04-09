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
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  useEffect(() => {
    const makes = _.sortBy([...new Set(carsData.map((car) => car.make))]);
    setMakes(makes);
  }, [carsData]);

  useEffect(() => {
    const models = _.sortBy(
      [...new Set(carsData.filter((car) => car.make === selectedMake).map((car) => car.model))]
    );
    setModels(models);
  }, [selectedMake, carsData]);

  useEffect(() => {
    const years = _.sortBy(
      [...new Set(carsData.filter((car) => car.make === selectedMake && car.model === selectedModel).map((car) => car.year))]
    );
    setYears(years);
  }, [selectedMake, selectedModel, carsData]);

  const handleFilter = () => {
    // Use selectedMake, selectedModel, and selectedYear for filtering logic
    console.log('Selected Make:', selectedMake);
    console.log('Selected Model:', selectedModel);
    console.log('Selected Year:', selectedYear);

    // Add your filtering logic here using the selected values
  }

  return (
    <>
      {
        makes && models && years &&

        <div className='flex flex-col gap-5'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            <SearchDropdown type={'Make'} data={makes} setSelectedValue={setSelectedMake} />
            <SearchDropdown type={'Model'} data={models} setSelectedValue={setSelectedModel} />
            <SearchDropdown type={'Year'} data={years} setSelectedValue={setSelectedYear} />

          </div>
          <div className='flex'>
            <button type="button" className="text-white right-2.5 bottom-2.5 bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-sm px-4 py-2" onClick={handleFilter}>Filter</button>
          </div>
        </div>
      }

    </>
  )
}

export default SearchMMY