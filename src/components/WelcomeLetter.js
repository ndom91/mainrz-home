import React, { useRef } from 'react'
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
      className='hidden-scroller container fixed z-50 left-0 top-0 w-full h-full bg-gray-900 bg-opacity-70 overflow-y-scroll'
    >
      <div
        ref={ref}
        className='relative mx-auto my-16 p-12 w-2/3 bg-gray-800 rounded'
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
        <div className='mx-auto max-w-prose'>
          <img
            className='mb-8'
            width='200px'
            src='/img/mainrz-logo2.png'
            alt='MainRZ Logo'
          />
          <p
            className='mx-auto font-sans font-light'
            dangerouslySetInnerHTML={{ __html: Letter }}
          />
          <img
            className='my-6'
            width='250px'
            src='/img/jleuchters_sig3.png'
            alt='JLeuchters Signature'
          />
          <p className='mx-auto font-sans font-light'>Jens Leuchters</p>
        </div>
      </div>
    </div>
  )
}

export default WelcomeLetter
