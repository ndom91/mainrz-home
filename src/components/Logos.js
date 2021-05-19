import React from 'react'

const Logos = () => {
  return (
    <section className='relative mx-auto px-4 py-48'>
      <div className='mx-auto max-w-6xl'>
        <h1 className='text-md relative z-10 mb-12 text-center text-gray-400 font-mono font-thin tracking-wide uppercase'>
          We’re proud to have played a part in these amazing journeys.
        </h1>
        <div className='relative z-10 grid gap-10 grid-cols-2 text-center lg:grid-cols-7'>
          <div className='flex items-center justify-center'>
            <img
              src='/img/logos/cisco.svg'
              alt='Cisco Logo'
              className='block h-12 object-contain'
            />
          </div>
          <div className='flex items-center justify-center'>
            <img
              src='/img/logos/vodafone.svg'
              alt='Vodafone Logo'
              className='block h-12 object-contain'
            />
          </div>
          <div className='flex items-center justify-center'>
            <img
              src='/img/logos/equinix.svg'
              alt='Equinix Logo'
              className='block h-12 object-contain'
            />
          </div>
          <div className='flex items-center justify-center'>
            <img
              src='/img/logos/juniper.svg'
              alt='Juniper Logo'
              className='block h-12 object-contain'
            />
          </div>
          <div className='flex items-center justify-center'>
            <img
              src='/img/logos/megafon.svg'
              alt='MegaFon Logo'
              className='block h-12 object-contain'
            />
          </div>
          <div className='flex items-center justify-center'>
            <img
              src='/img/logos/ntt.svg'
              alt='NTT Logo'
              className='block h-12 object-contain'
            />
          </div>
          <div className='flex items-center justify-center'>
            <img
              src='/img/logos/rostelecom.svg'
              alt='Rostelecom Logo'
              className='block h-12 object-contain'
            />
          </div>
        </div>
      </div>
      <div className='md:w-120 absolute z-0 -left-10 top-28 w-0 h-72 bg-gray-900 transform -rotate-3' />
    </section>
  )
}

export default Logos
