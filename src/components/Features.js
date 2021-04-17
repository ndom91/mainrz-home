import React from 'react'

const Features = ({ content }) => {
  console.log(content)
  const features = content.singleFeature

  return (
    <section className='body-font text-gray-400'>
      <div className='container flex flex-wrap mx-auto px-5 py-24'>
        <div className='flex flex-col mb-20 w-full text-center'>
          <h2 className='title-font mb-1 text-newtelco-500 text-xs font-medium tracking-widest'>
            MAINRZ
          </h2>
          <h1 className='title-font text-white text-2xl font-medium sm:text-3xl'>
            Products & Services
          </h1>
        </div>
        <div className='flex flex-wrap -m-4'>
          {features.length &&
            features.map(feat => (
              <div key={feat.id} className='p-4 md:w-1/3'>
                <div className='flex flex-col p-8 h-full bg-gray-800 bg-opacity-60 rounded-lg'>
                  <div className='flex items-center mb-3'>
                    <div className='inline-flex flex-shrink-0 items-center justify-center mr-3 w-10 h-10 text-white bg-newtelco-500 rounded-full'>
                      {feat.icon ? (
                        <svg
                          height='18'
                          width='18'
                          stroke='currentColor'
                          className='w-6 h-6 text-white'
                          dangerouslySetInnerHTML={{ __html: feat.icon }}
                        />
                      ) : (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          className='w-6 h-6 text-newtelco-500'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                          />
                        </svg>
                      )}
                    </div>
                    <h2 className='title-font text-white text-lg font-medium'>
                      {feat.title}
                    </h2>
                  </div>
                  <p className='flex-grow text-base font-thin leading-relaxed'>
                    {feat.description}
                  </p>
                  <a
                    href='#'
                    className='group inline-flex items-center mt-3 text-newtelco-500'
                  >
                    Learn More
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500'
                      viewBox='0 0 24 24'
                    >
                      <path d='M5 12h14M12 5l7 7-7 7'></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Features
