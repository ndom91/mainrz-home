import React from 'react'

const Header = () => {
  return (
    <header className='body-font text-gray-500'>
      <div className='container flex flex-col flex-wrap items-center mx-auto p-4 md:flex-row'>
        <a
          href='#'
          className='title-font flex items-center mb-4 p-2 text-white font-medium rounded focus:outline-none outline-none transition-shadow duration-500 focus:ring-newtelco-500 focus:ring-opacity-20 focus:ring md:mb-0'
        >
          <div className='flex items-center justify-center w-10 h-10 bg-newtelco-500 rounded-full'></div>
          <span className='ml-3 text-xl font-thin'>MainRZ</span>
        </a>
        <nav className='flex flex-wrap items-center justify-center text-base md:ml-auto'></nav>
        <button className='text-light inline-flex items-center mt-4 px-3 py-1 text-white font-medium hover:bg-newtelco-500 border hover:border-newtelco-500 border-white rounded focus:outline-none outline-none transition-all duration-500 ease-in-out focus:ring-newtelco-500 focus:ring-opacity-30 focus:ring-4 md:inline-flex md:mt-0'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='mr-2 w-4 h-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
            />
          </svg>
          Home
        </button>
      </div>
    </header>
  )
}

export default Header
