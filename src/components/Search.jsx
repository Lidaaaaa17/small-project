import React, { useState } from 'react';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false); // Fixed the variable name

  const toggleDropdown = () => {
   setIsOpen(!isOpen);
  };

  return (
    <div className='w-full bg-gray-700 mt-10'>
      <h1 className='text-5xl text-white font-bold pt-5'>Search Your Best Cars</h1>
      <p className='text-white font-semibold pt-5'>
        Using 'Content here, content here', making it look like readable
      </p>
<div className='block md:flex px-5 pt-4 pb-5 item-center justify-center gap-6  '>
      {/* Dropdown */}
      <div className="relative inline-block text-left mt-5 ">
        {/* Dropdown Button */}
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-between w-64 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Any Brand
          <svg
            className="ml-2 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <ul
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <li
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
              >
                Any Brand
              </li>
              <li
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
              >
                Option 1
              </li>
              <li
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
              >
                Option 2
              </li>
              <li
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
              >
                Option 3
              </li>
            </ul>
          </div>
        )}
      </div>
        {/* Dropdown */}
        <div className="relative inline-block text-left mt-5 ">
        {/* Dropdown Button */}
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-between w-64 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Any Type
          <svg
            className="ml-2 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <ul
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <li
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
              >
                Any Brand
              </li>
              <li
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
              >
                Option 1
              </li>
              <li
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
              >
                Option 2
              </li>
              <li
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
              >
                Option 3
              </li>
            </ul>
          </div>
        )}
      </div>
        {/* Dropdown */}
        <div className="relative inline-block text-left mt-5 ">
        {/* Dropdown Button */}
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-between w-64 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Price
          <svg
            className="ml-2 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <ul
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <li
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
              >
                Any Brand
              </li>
              <li
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
              >
                Option 1
              </li>
              <li
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
              >
                Option 2
              </li>
              <li
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
              >
                Option 3
              </li>
            </ul>
          </div>
        )}
         
      </div>
      
    </div>
    <button className='bg-orange-600 px-4 py-2 mt-3 mb-3 hover:bg-white text-white hover:text-black duration-200 ease-in rounded-sm font-semibold text'>Search Now</button>
    </div>
  );
};

export default Search;
