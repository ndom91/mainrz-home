import React from 'react'
// import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='body-font text-gray-500 bg-gray-900'>
      <div className='container flex flex-col items-center mx-auto px-5 py-5 sm:flex-row'>
        <a
          href='#'
          className='title-font flex items-center justify-center p-2 text-white font-medium rounded focus:outline-none outline-none transition-shadow duration-500 focus:ring-newtelco-500 focus:ring-opacity-20 focus:ring-4 md:justify-start'
        >
          <div className='flex items-center justify-center w-10 h-10 bg-newtelco-500 rounded-full'>
            {/* <Image
              src='/img/nt-white.webp'
              height='32'
              width='32'
              layout='fixed'
              alt='MainRZ Logo'
            /> */}
          </div>
          <span className='ml-3 text-xl font-thin'>MainRZ</span>
        </a>
        <p className='mt-4 text-gray-600 text-sm sm:ml-4 sm:mt-0 sm:pl-4 sm:py-2 sm:border-l-2 sm:border-gray-800'>
          © 2021
          <a
            href='https://github.com/newtelco/mainrz-home'
            className='ml-1 text-gray-800 rounded focus:outline-none focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring-2'
            target='_blank'
            rel='noopener noreferrer'
          >
            ndomino
          </a>
        </p>
        <span className='inline-flex justify-center mt-4 sm:justify-start sm:ml-auto sm:mt-0'>
          <a
            className='text-gray-600 hover:text-white rounded focus:outline-none outline-none transition-all duration-500 ease-in-out focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring-2'
            href='https://www.facebook.com/mainrz/'
            aria-label='MainRZ Facebook'
          >
            <svg
              fill='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-5 h-5'
              viewBox='0 0 24 24'
            >
              <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
            </svg>
          </a>
          <a
            className='ml-3 text-gray-600 hover:text-white rounded focus:outline-none outline-none transition-all duration-500 ease-in-out focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring-2'
            href='https://twitter.com/mainrz'
            aria-label='MainRZ Twitter'
          >
            <svg
              fill='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-5 h-5'
              viewBox='0 0 24 24'
            >
              <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
            </svg>
          </a>
          <a
            className='ml-3 text-gray-600 hover:text-white rounded focus:outline-none outline-none transition-all duration-500 ease-in-out focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring-2'
            href='https://www.instagram.com/mainrz/'
            aria-label='MainRZ Instagram'
          >
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-5 h-5'
              viewBox='0 0 24 24'
            >
              <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
              <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
            </svg>
          </a>
          <a
            className='ml-3 text-gray-600 hover:text-white rounded focus:outline-none outline-none transition-all duration-500 ease-in-out focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring-2'
            href='https://www.linkedin.com/company/mainrz'
            aria-label='MainRZ LinkedIn'
          >
            <svg
              fill='currentColor'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='0'
              className='w-5 h-5'
              viewBox='0 0 24 24'
            >
              <path
                stroke='none'
                d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
              ></path>
              <circle cx='4' cy='4' r='2' stroke='none'></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
