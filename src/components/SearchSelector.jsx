import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import SearchBar from './SearchBar'
import SearchMMY from './SearchMMY'

const SearchSelector = () => {
  const [searchType, setSearchType] = useState(0);
  
  useEffect(() => {
  }, []);

  return (
    <>
      <div>
        <div className='flex items-center pb-2'>
          <div className='mb-2 text-sm flex gap-2 text-black border p-1 rounded'>
            <button className={`rounded py-2 px-3 cursor-pointer ${searchType === 0 ? "find_active" : "find_not_active"
              }`} onClick={() => setSearchType(0)}>Find by MMY</button>
            <button className={`rounded py-2 px-3 cursor-pointer ${searchType === 1 ? "find_active" : "find_not_active"
              }`} onClick={() => setSearchType(1)}>Find by VIN</button>
          </div>
        </div>
        {
          searchType === 0 ?
            <SearchMMY />
            :
            <SearchBar />
        }
      </div>
    </>
  )
}

export default SearchSelector