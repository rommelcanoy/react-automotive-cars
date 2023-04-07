import React from 'react'
import { useState } from 'react'
import SearchBar from './SearchBar'
import SearchMMY from './SearchMMY'

const SearchSelector = () => {

  const [searchType, setSearchType] = useState(0);

  return (
    <>
      <div>
        <div className='flex justify-center items-center pb-2'>
          <div className='mb-2 text-sm flex gap-2 text-black border p-1 rounded'>
            <div className={`rounded py-1 px-2 cursor-pointer ${searchType === 0 ? "find_active" : "find_not_active"
              }`} onClick={() => setSearchType(0)}>Find by MMY</div>
            <div className={`rounded py-1 px-2 cursor-pointer ${searchType === 1 ? "find_active" : "find_not_active"
              }`} onClick={() => setSearchType(1)}>Find by VIN</div>
          </div>
        </div>
        {
          searchType === 0 ?
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
              <SearchMMY type={'Make'} />
              <SearchMMY type={'Model'} />
              <SearchMMY type={'Year'} />
            </div>
            :
            <SearchBar />
        }
      </div>
    </>
  )
}

export default SearchSelector