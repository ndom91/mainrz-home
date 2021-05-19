import React, { useRef } from 'react'
import Image from 'next/image'
import { useKey, useClickAway, useLockBodyScroll } from 'react-use'

const WelcomeLetter = ({ content, open, close }) => {
  const Letter = content.replace(/\n/g, '<br />')
  const ref = useRef(null)
  useLockBodyScroll(open)
  // Click outside to close
  useClickAway(ref, () => {
    close()
  })
  // Esc to close
  useKey('esc', () => close())

  return (
    <div
      style={{ width: '100vw' }}
      className='hidden-scroller fixed z-50 left-0 top-0 w-full h-full bg-gray-900 bg-opacity-70 overflow-y-scroll'
    >
      <article
        className='relative mx-auto my-12 px-8 py-24 w-5/6 max-w-5xl bg-gray-800 rounded-lg sm:my-24 sm:w-2/3'
        itemID='#'
        ref={ref}
        itemScope
        itemType='http://schema.org/BlogPosting'
      >
        <button
          className='absolute right-6 top-6 flex items-center justify-center w-8 h-8 bg-transparent rounded-full outline-none focus:outline-none transition-all duration-500 focus:ring-newtelco-500 hover:ring-newtelco-500 focus:ring-opacity-25 hover:ring-opacity-25 focus:ring hover:ring-2'
          onClick={() => close()}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-8 h-8'
            fill='none'
            height='24'
            width='24'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </button>
        <div className='mb-10 mx-auto w-full max-w-2xl text-left md:w-3/4 lg:w-2/3'>
          <div className='mb-6 pb-6 border-b border-gray-200'>
            <h1
              className='mb-3 text-newtelco-500 text-3xl font-bold md:text-4xl md:leading-tight'
              itemProp='headline'
              title='Rise of Tailwind - A Utility First CSS Framework'
            >
              MainRZ - Powered by NewTelco
            </h1>
            <p className='text-gray-500 text-base font-thin'>
              May 19, 2021 — Written by Jens Leuchters
            </p>
          </div>
          <div className='flex items-center mb-6 space-x-2'>
            <p className='text-gray-300 font-thin'>Share this</p>
            <a
              href='#'
              className='text-newtelco-500 hover:text-newtelco-600 transition-colors duration-300 ease-in-out'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='flex-none w-5 h-5'
                fill='currentColor'
              >
                <path d='M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127	C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z' />
              </svg>
            </a>
            <a
              href='#'
              className='text-newtelco-500 hover:text-newtelco-600 transition-colors duration-300 ease-in-out'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='flex-none w-5 h-5'
                fill='currentColor'
              >
                <path d='M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z' />
              </svg>
            </a>
            <a
              href='#'
              className='text-newtelco-500 hover:text-newtelco-600 transition-colors duration-300 ease-in-out'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='flex-none w-5 h-5'
                fill='currentColor'
              >
                <circle cx='4.983' cy='5.009' r='2.188' />
                <path d='M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zM3.095 8.855H6.87V20.994H3.095z' />
              </svg>
            </a>
          </div>
          <div>
            <Image
              src='/img/social_1.png'
              width='600'
              height='313'
              layout='responsive'
              className='w-full h-64 bg-center rounded object-cover'
              alt='Newtelco Expands'
            />
          </div>
        </div>

        <div className='prose mx-auto w-full max-w-2xl md:w-3/4 lg:w-2/3'>
          <p
            className='mx-auto font-sans font-light'
            dangerouslySetInnerHTML={{ __html: Letter }}
          />
        </div>
      </article>
    </div>
  )
}

export default WelcomeLetter
