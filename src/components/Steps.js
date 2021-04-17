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
    <section className='mx-auto px-4 py-24 max-w-7xl'>
      <div className='grid gap-x-10 gap-y-10 grid-cols-1 items-center mb-24 md:gap-x-24 md:gap-y-32 md:grid-cols-2'>
        <div>
          <h2 className='mb-4 text-center text-newtelco-500 text-2xl font-extrabold tracking-tight sm:text-left md:text-4xl md:leading-tight'>
            Clear overview for efficient tracking
          </h2>
          <p className='mb-5 text-center text-gray-500 text-base font-light sm:text-left md:text-lg'>
            Handle your subscriptions and transactions efficiently with the
            clear overview in Dashboard. Features like the smart search option
            allow you to quickly find any data you’re looking for.
          </p>
          <a
            href='#'
            className='btn btn-dark btn-lg w-full text-newtelco-500 sm:w-auto'
          >
            Learn More
          </a>
        </div>
        <img
          className={`w-full h-full object-cover object-center rounded-lg pr-8 md:pr-0 md:mt-0 mt-48 office-img ${
            intersection && intersection.intersectionRatio
              ? 'office-img-active'
              : ''
          }`}
          src='/img/server1.jpg'
          alt='Newtelco Office'
          ref={intersectionRef}
        />
      </div>
      <div className='grid flex-col-reverse gap-x-10 gap-y-10 grid-cols-1 items-center md:gap-x-24 md:gap-y-32 md:grid-cols-2'>
        <div className='order-none md:order-2'>
          <h2 className='mb-4 text-center text-newtelco-500 text-2xl font-extrabold tracking-tight sm:text-left md:text-4xl md:leading-tight'>
            Decide how you integrate Payments
          </h2>
          <p className='mb-5 text-center text-gray-500 text-base font-light sm:text-left md:text-lg'>
            Love to code? Next to our ready-made and free plugins you can use
            our expansive yet simple API; decide how you integrate Payments and
            build advanced and reliable products yourself from scratch.
          </p>
          <a
            href='#'
            className='btn btn-dark btn-lg w-full text-newtelco-500 sm:w-auto'
          >
            Learn More
          </a>
        </div>
        <img
          className={`object-cover rounded-lg office-img-left ${
            intersection2 && intersection2.intersectionRatio
              ? 'office-img-left-active'
              : ''
          }`}
          src='/img/fibre1.jpg'
          alt='Newtelco Office'
          ref={intersectionRef2}
        />
      </div>
    </section>
  )
}

export default Steps
