import React from 'react'

const Hero = ({ content }) => {
  const { Title, Subtitle, ctaButtonLabel } = content
  return (
    <main className='font-montserrat'>
      <div className='container relative flex flex-col mx-auto px-6 sm:flex-row sm:px-12 lg:py-6 xl:py-16'>
        <div className='relative z-30 pb-8 sm:pb-16 sm:pt-8 sm:w-1/2 lg:pb-32 lg:pt-16'>
          <h2 className='text-white text-2xl font-bold tracking-wider uppercase'>
            GRAND OPENING
          </h2>
          <h1 className='mb-6 mt-4 text-newtelco-500 text-5xl font-black tracking-wider leading-none uppercase lg:text-6xl xl:text-8xl'>
            {Title}
          </h1>
          <p className='font-roboto text-gray-500 text-lg font-thin sm:w-2/3 lg:w-1/2'>
            {Subtitle}
          </p>
          <div className='flex self-start mt-4'>
            <button className='inline-flex px-6 py-2 text-white text-lg bg-newtelco-500 hover:bg-newtelco-700 border-0 rounded focus:outline-none outline-none transition-all duration-500 focus:ring-newtelco-500 focus:ring-opacity-30 focus:ring-4'>
              {ctaButtonLabel}
            </button>
          </div>
        </div>
        <div className='relative right-0 top-10 sm:absolute sm:w-1/2 lg:w-2/3'>
          <img
            className='absolute z-10 left-0 right-0 p-0 w-full h-full object-cover lg:p-6'
            src='/img/racks1.webp'
          />
          <div className='absolute inset-0 -ml-8 mt-20 bg-gray-400 lg:inset-6'></div>
          <svg
            className='relative z-20 -ml-16 pt-8'
            xmlns='http://www.w3.org/2000/svg'
            data-name='Capa 1'
            viewBox='0 0 428.29 298.11'
          >
            <defs />
            <path
              fill='#fff'
              d='M364.79 23.93v199h-271v-199h271m2.06-2.06H91.73V225h275.12V21.87z'
            />
            <circle cx='1.75' cy='296.36' r='1.75' fill='#666' />
            <circle cx='1.75' cy='286.99' r='1.75' fill='#666' />
            <circle cx='1.75' cy='277.62' r='1.75' fill='#666' />
            <circle cx='1.75' cy='268.26' r='1.75' fill='#666' />
            <circle cx='1.75' cy='258.89' r='1.75' fill='#666' />
            <circle cx='1.75' cy='249.53' r='1.75' fill='#666' />
            <circle cx='1.75' cy='240.16' r='1.75' fill='#666' />
            <circle cx='1.75' cy='230.8' r='1.75' fill='#666' />
            <circle cx='1.75' cy='221.43' r='1.75' fill='#666' />
            <circle cx='1.75' cy='212.06' r='1.75' fill='#666' />
            <circle cx='1.75' cy='202.7' r='1.75' fill='#666' />
            <circle cx='1.75' cy='193.33' r='1.75' fill='#666' />
            <circle cx='1.75' cy='183.97' r='1.75' fill='#666' />
            <circle cx='1.75' cy='174.6' r='1.75' fill='#666' />
            <circle cx='1.75' cy='165.23' r='1.75' fill='#666' />
            <circle cx='1.75' cy='155.87' r='1.75' fill='#666' />
            <circle cx='1.75' cy='146.5' r='1.75' fill='#666' />
            <circle cx='1.75' cy='137.14' r='1.75' fill='#666' />
            <path
              fill='#666'
              d='M1.75 126A1.75 1.75 0 110 127.77 1.75 1.75 0 011.75 126zM1.75 116.65A1.76 1.76 0 110 118.41a1.75 1.75 0 011.75-1.76zM10.78 294.6A1.76 1.76 0 119 296.36a1.76 1.76 0 011.78-1.76zM10.78 285.24A1.75 1.75 0 119 287a1.75 1.75 0 011.78-1.76zM10.78 275.87A1.76 1.76 0 119 277.62a1.76 1.76 0 011.78-1.75zM10.78 266.51A1.75 1.75 0 119 268.26a1.75 1.75 0 011.78-1.75zM10.78 257.14A1.75 1.75 0 119 258.89a1.75 1.75 0 011.78-1.75zM10.78 247.77A1.76 1.76 0 119 249.53a1.76 1.76 0 011.78-1.76zM10.78 238.41A1.75 1.75 0 119 240.16a1.75 1.75 0 011.78-1.75zM10.78 229A1.76 1.76 0 119 230.8a1.76 1.76 0 011.78-1.8zM10.78 219.68A1.75 1.75 0 119 221.43a1.75 1.75 0 011.78-1.75zM10.78 210.31A1.76 1.76 0 119 212.06a1.76 1.76 0 011.78-1.75zM10.78 201A1.75 1.75 0 119 202.7a1.75 1.75 0 011.78-1.7zM10.78 191.58A1.75 1.75 0 119 193.33a1.75 1.75 0 011.78-1.75zM10.78 182.21A1.76 1.76 0 119 184a1.76 1.76 0 011.78-1.79zM10.78 172.85A1.75 1.75 0 119 174.6a1.75 1.75 0 011.78-1.75zM10.78 163.48A1.76 1.76 0 119 165.23a1.76 1.76 0 011.78-1.75zM10.78 154.12A1.75 1.75 0 119 155.87a1.75 1.75 0 011.78-1.75zM10.78 144.75A1.75 1.75 0 119 146.5a1.76 1.76 0 011.78-1.75zM10.78 135.39A1.75 1.75 0 119 137.14a1.75 1.75 0 011.78-1.75zM10.78 126A1.75 1.75 0 119 127.77a1.75 1.75 0 011.78-1.77zM10.78 116.65A1.76 1.76 0 119 118.41a1.76 1.76 0 011.78-1.76z'
            />
            <circle cx='19.82' cy='296.36' r='1.75' fill='#666' />
            <circle cx='19.82' cy='286.99' r='1.75' fill='#666' />
            <circle cx='19.82' cy='277.62' r='1.75' fill='#666' />
            <circle cx='19.82' cy='268.26' r='1.75' fill='#666' />
            <circle cx='19.82' cy='258.89' r='1.75' fill='#666' />
            <circle cx='19.82' cy='249.53' r='1.75' fill='#666' />
            <circle cx='19.82' cy='240.16' r='1.75' fill='#666' />
            <circle cx='19.82' cy='230.8' r='1.75' fill='#666' />
            <circle cx='19.82' cy='221.43' r='1.75' fill='#666' />
            <circle cx='19.82' cy='212.06' r='1.75' fill='#666' />
            <circle cx='19.82' cy='202.7' r='1.75' fill='#666' />
            <circle cx='19.82' cy='193.33' r='1.75' fill='#666' />
            <circle cx='19.82' cy='183.97' r='1.75' fill='#666' />
            <circle cx='19.82' cy='174.6' r='1.75' fill='#666' />
            <circle cx='19.82' cy='165.23' r='1.75' fill='#666' />
            <circle cx='19.82' cy='155.87' r='1.75' fill='#666' />
            <circle cx='19.82' cy='146.5' r='1.75' fill='#666' />
            <circle cx='19.82' cy='137.14' r='1.75' fill='#666' />
            <path
              fill='#666'
              d='M19.82 126a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM19.82 116.65a1.76 1.76 0 11-1.75 1.76 1.75 1.75 0 011.75-1.76z'
            />
            <circle cx='28.85' cy='296.36' r='1.75' fill='#666' />
            <circle cx='28.85' cy='286.99' r='1.75' fill='#666' />
            <circle cx='28.85' cy='277.62' r='1.75' fill='#666' />
            <circle cx='28.85' cy='268.26' r='1.75' fill='#666' />
            <circle cx='28.85' cy='258.89' r='1.75' fill='#666' />
            <circle cx='28.85' cy='249.53' r='1.75' fill='#666' />
            <circle cx='28.85' cy='240.16' r='1.75' fill='#666' />
            <circle cx='28.85' cy='230.8' r='1.75' fill='#666' />
            <circle cx='28.85' cy='221.43' r='1.75' fill='#666' />
            <circle cx='28.85' cy='212.06' r='1.75' fill='#666' />
            <circle cx='28.85' cy='202.7' r='1.75' fill='#666' />
            <circle cx='28.85' cy='193.33' r='1.75' fill='#666' />
            <circle cx='28.85' cy='183.97' r='1.75' fill='#666' />
            <circle cx='28.85' cy='174.6' r='1.75' fill='#666' />
            <circle cx='28.85' cy='165.23' r='1.75' fill='#666' />
            <circle cx='28.85' cy='155.87' r='1.75' fill='#666' />
            <circle cx='28.85' cy='146.5' r='1.75' fill='#666' />
            <circle cx='28.85' cy='137.14' r='1.75' fill='#666' />
            <path
              fill='#666'
              d='M28.85 126a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM28.85 116.65a1.76 1.76 0 11-1.75 1.76 1.75 1.75 0 011.75-1.76zM37.88 294.6a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76zM37.88 285.24a1.75 1.75 0 11-1.75 1.76 1.75 1.75 0 011.75-1.76zM37.88 275.87a1.76 1.76 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 266.51a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 257.14a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 247.77a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76zM37.88 238.41a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 229a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76zM37.88 219.68a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 210.31a1.76 1.76 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 201a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 191.58a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 182.21a1.76 1.76 0 11-1.75 1.79 1.76 1.76 0 011.75-1.79zM37.88 172.85a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 163.48a1.76 1.76 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 154.12a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 144.75a1.75 1.75 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 135.39a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 126a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 116.65a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76z'
            />
            <path
              fill='#fff'
              stroke='#fff'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.219'
              d='M387.79 245.93l5.49 5.49-5.49 5.49v-10.98z'
            />
            <path
              fill='none'
              stroke='#fff'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.219'
              d='M62.79 256.91l-5.49-5.49 5.49-5.49v10.98z'
            />
          </svg>
        </div>
      </div>
    </main>
  )
}

export default Hero
