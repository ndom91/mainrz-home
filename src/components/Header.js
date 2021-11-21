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
      </div>
    </header>
  )
}

export default Header
