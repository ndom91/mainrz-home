import React from 'react'

const Banner = ({ hide }) => {
  return (
    <div className='absolute z-10 top-0 w-full bg-newtelco-500'>
      <div className='mx-auto px-3 py-3 max-w-7xl sm:px-6 lg:px-8'>
        <div className='flex flex-wrap items-center justify-between'>
          <div className='flex flex-1 items-center w-0'>
            <span className='flex p-2 bg-newtelco-600 rounded-lg'>
              <svg
                className='w-6 h-6 text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
                />
              </svg>
            </span>
            <p className='ml-3 text-white font-medium'>
              <span className='md:hidden'>
                We use cookies for marketing purposes, is that okay with you?
              </span>
              <span className='hidden md:inline'>
                We use cookies expressly for internal analytics purposes only.
                Is that alright with you?
              </span>
            </p>
          </div>
          <div className='flex justify-start order-5 w-full sm:justify-end sm:order-3 sm:w-1/3'>
            <div className='flex-shrink-0 order-3 mr-2 mt-2 sm:order-2 sm:mt-0 sm:w-auto'>
              <button
                className='flex items-center justify-center px-4 py-2 text-gray-700 text-sm font-medium hover:bg-indigo-50 bg-white border border-transparent rounded-md focus:outline-none shadow-sm transition-shadow duration-500 focus:ring-newtelco-700 focus:ring-4'
                onClick={() => hide('accept')}
              >
                Agree
              </button>
            </div>
            <div className='flex-shrink-0 order-4 mt-2 sm:order-3 sm:mt-0 sm:w-auto'>
              <button
                className='flex items-center justify-center px-4 py-2 text-gray-100 text-sm font-medium bg-newtelco-600 hover:bg-newtelco-700 border border-transparent rounded-md focus:outline-none shadow-sm transition-shadow duration-500 focus:ring-white focus:ring-opacity-50 focus:ring-4'
                onClick={() => hide('decline')}
              >
                Disagree
              </button>
            </div>
          </div>
          <div className='flex-shrink-0 order-4 sm:order-3 sm:ml-3'>
            <button
              type='button'
              className='flex -mr-1 p-2 hover:bg-newtelco-600 rounded-md focus:outline-none outline-none transition-all duration-500 ease-in-out focus:ring-white focus:ring-opacity-50 focus:ring-2 sm:-mr-2'
              onClick={() => hide()}
            >
              <span className='sr-only'>Dismiss</span>
              <svg
                className='w-6 h-6 text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
