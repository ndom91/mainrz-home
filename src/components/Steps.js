import React from 'react'
import { useIntersection } from 'react-use'

const Steps = () => {
  const intersectionRef = React.useRef(null)
  const intersectionRef2 = React.useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  })
  const intersection2 = useIntersection(intersectionRef2, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  })

  return (
    <section className='lg:my-37 mx-auto px-4 py-24 max-w-7xl'>
      <div className='grid gap-x-10 gap-y-10 grid-cols-1 items-center mb-24 md:gap-x-24 md:gap-y-32 md:grid-cols-2'>
        <div>
          <h2 className='mb-4 text-center text-newtelco-500 text-2xl font-extrabold tracking-tight sm:text-left md:text-4xl md:leading-tight'>
            Focus on Customers
          </h2>
          <p className='mb-5 text-center text-gray-500 text-base font-light sm:text-left md:text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a
            href='#'
            className='group focus:ring-opacity30 inline-flex items-center mt-3 text-newtelco-500 rounded outline-none focus:outline-none transition-shadow duration-500 focus:ring-newtelco-500 focus:ring-opacity-30 focus:ring-4'
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
        <img
          className={`px-4 lg:mx-0 object-cover rounded-lg pr-8 md:mt-0 mt-24 office-img ${
            intersection && intersection.intersectionRatio
              ? 'office-img-active'
              : ''
          }`}
          src='/img/server1.webp'
          alt='Newtelco Office'
          ref={intersectionRef}
        />
      </div>
      <div className='grid flex-col-reverse gap-x-10 gap-y-10 grid-cols-1 items-center md:gap-x-24 md:gap-y-32 md:grid-cols-2'>
        <div className='order-none md:order-2'>
          <h2 className='mb-4 text-center text-newtelco-500 text-2xl font-extrabold tracking-tight sm:text-left md:text-4xl md:leading-tight'>
            While protecting the environment
          </h2>
          <p className='mb-5 text-center text-gray-500 text-base font-light sm:text-left md:text-lg'>
            Porta nibh venenatis cras sed felis eget. Diam ut venenatis tellus
            in metus vulputate. Eu facilisis sed odio morbi quis commodo odio
            aenean sed. Diam maecenas ultricies mi eget mauris pharetra.
            Faucibus vitae aliquet nec ullamcorper. Cursus turpis massa
            tincidunt dui ut. Luctus venenatis lectus magna fringilla urna. Dui
            faucibus in ornare quam viverra. Malesuada proin libero nunc
            consequat interdum varius sit amet mattis. Faucibus vitae aliquet
            nec ullamcorper sit amet.
          </p>
          <a
            href='#'
            className='group focus:ring-opacity30 inline-flex items-center mt-3 text-newtelco-500 rounded outline-none focus:outline-none transition-shadow duration-500 focus:ring-newtelco-500 focus:ring-opacity-30 focus:ring-4'
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
        <img
          className={`px-4 lg:mx-0 object-cover rounded-lg pl-8 md:mt-0 mt-24 office-img-left ${
            intersection2 && intersection2.intersectionRatio
              ? 'office-img-left-active'
              : ''
          }`}
          src='/img/fibre1.webp'
          alt='Newtelco Office'
          ref={intersectionRef2}
        />
      </div>
    </section>
  )
}

export default Steps
