import React from 'react'

const ContentCard = ({ content }) => {
  return (
    <div className='mx-auto my-24 px-4 py-12 sm:max-w-xl md:px-24 md:max-w-full lg:px-8 lg:py-16 lg:max-w-screen-xl'>
      <div className='flex flex-col max-w-screen-lg bg-gray-900 rounded-lg shadow-2xl overflow-hidden sm:mx-auto lg:flex-row'>
        <div className='relative lg:w-1/2'>
          <img
            src={`https://cms.mainrz.de${content?.Picture.url}`}
            alt='Datacenter workers on computer.'
            className='w-full h-80 object-cover object-right grayscale-0 lg:absolute lg:h-full'
          />
          <svg
            className='absolute right-0 top-0 hidden h-full text-gray-900 lg:inline-block'
            viewBox='0 0 20 104'
            fill='currentColor'
          >
            <polygon points='17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104'></polygon>
          </svg>
        </div>
        <div className='flex flex-col justify-center p-8 bg-gray-900 lg:p-16 lg:pl-10 lg:w-1/2'>
          <div>
            <p className='bg-newtelco-200 inline-block mb-4 px-3 py-1 text-newtelco-600 text-xs font-medium tracking-wider rounded-full uppercase'>
              {content?.BadgeText}
            </p>
          </div>
          <h5 className='mb-3 text-white font-mono text-3xl font-bold tracking-tighter leading-none sm:text-4xl'>
            {content?.Title}
          </h5>
          <p className='mb-5 py-5 text-gray-400'>{content?.BodyText}</p>
          {/* <div className='flex items-center'>
            <button
              type='submit'
              className='focus:shadow-outline inline-flex items-center justify-center mr-6 px-6 h-12 text-white font-medium tracking-wide bg-newtelco-500 hover:bg-newtelco-600 rounded focus:outline-none transition duration-500'
            >
              Get started
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ContentCard
