import React from 'react'

const SearchMMY = ({ type }) => {
  return (
    <>
      <div className=''>
        <label htmlFor="small" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">{type}</label>
        <select id="small" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {/* <option selected>Select</option> */}
          <option defaultValue="">Select</option>
        </select>
      </div>
    </>
  )
}

export default SearchMMY