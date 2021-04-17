import React from 'react'
// import Image from 'next/image'

const Header = () => {
  return (
    <header className='body-font text-gray-500'>
      <div className='container flex flex-col flex-wrap items-center mx-auto p-5 md:flex-row'>
        <a
          href='#'
          className='title-font flex items-center mb-4 text-white font-medium rounded focus:outline-none focus:ring-white focus:ring-opacity-70 focus:ring md:mb-0'
        >
          <div className='flex items-center justify-center w-10 h-10 bg-newtelco-500 rounded-full'>
            {/* <Image
              src="/img/nt-white.webp"
              height="32"
              width="32"
              layout="fixed"
              alt="Newtelco Logo"
            /> */}
          </div>
          <span className='ml-3 text-xl font-thin'>MainRZ</span>
        </a>
        <nav className='flex flex-wrap items-center justify-center text-base md:ml-auto'></nav>
        <a
          href='#'
          className='hidden rounded focus:outline-none focus:ring-white focus:ring-opacity-70 focus:ring md:inline-flex'
        >
          <button
            className='inline-flex items-center mt-4 px-3 py-1 text-white text-base font-medium hover:bg-gray-700 bg-newtelco-500 border-0 rounded focus:outline-none transition-colors duration-500 ease-in-out md:inline-flex md:mt-0'
            tabIndex='-1'
          >
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
        </a>
      </div>
    </header>
  )
}

export default Header
