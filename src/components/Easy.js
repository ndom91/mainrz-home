import React, { useEffect, useRef } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useIntersection } from 'react-use'

const Easy = () => {
  const stepsRef = useRef()
  const controls = useAnimation()
  const intersection = useIntersection(stepsRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })

  useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0.1) {
      controls.start('visible')
    }
  }, [controls, intersection])

  const list = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  }

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -20 },
  }

  const header = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  return (
    <section className='body-font relative my-32 text-gray-600'>
      <div className='container relative z-10 mx-auto px-5 py-24'>
        <motion.h1
          initial='hidden'
          animate={controls}
          transition={{ duration: 1 }}
          variants={header}
          className='mb-8 text-center text-newtelco-500 font-mono text-2xl font-bold sm:text-4xl'
        >
          {`Its as easy as 1, 2, 3`}
        </motion.h1>
        <motion.p
          initial='hidden'
          animate={controls}
          transition={{ duration: 1 }}
          variants={header}
          className='mb-32 text-center text-xl font-thin sm:text-2xl'
        >{`MainRZ can help your business get connected, here's how`}</motion.p>
        <motion.div
          initial='hidden'
          animate={controls}
          ref={stepsRef}
          variants={list}
          className='flex flex-wrap -mb-10 -mt-4 -mx-4 space-y-24 sm:-m-4 md:space-y-0'
        >
          <motion.div variants={item} className='flex p-4 md:w-1/3'>
            <div className='relative inline-flex flex-shrink-0 items-center justify-center mb-4 w-12 h-12 text-gray-300 rounded-full pointer-events-none'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute z-0 left-0 w-40 h-40 opacity-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                />
              </svg>
            </div>
            <div className='flex-grow pl-6'>
              <h2 className='title-font mb-2 text-gray-300 font-mono text-lg font-thin sm:text-xl'>
                Call Us or Leave a Message
              </h2>
              <p className='text-lg leading-loose'>
                We will have a short discussion about your wants, needs, and
                goals in getting your organisation better prepared for 21st
                century challenges.
              </p>
              <p className='inline-flex items-center mt-3 text-newtelco-500 font-mono text-xl font-thin'>
                5-10 Minutes
              </p>
            </div>
          </motion.div>
          <motion.div variants={item} className='flex p-4 md:w-1/3'>
            <div className='relative inline-flex flex-shrink-0 items-center justify-center mb-4 w-12 h-12 text-gray-300 rounded-full pointer-events-none'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute z-0 left-0 w-40 h-40 opacity-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
            </div>
            <div className='flex-grow pl-6'>
              <h2 className='title-font mb-2 text-gray-300 font-mono text-lg font-thin sm:text-xl'>
                Our Experts get to work
              </h2>
              <p className='text-lg leading-loose'>
                After discussing initial project goals, our expert engineers and
                sales managers will get to work crafting you and your company a
                tailor made plan to fit your budget and goals.
              </p>
              <p className='inline-flex items-center mt-3 text-newtelco-500 font-mono text-xl font-thin'>
                24-48 Hours
              </p>
            </div>
          </motion.div>
          <motion.div variants={item} className='flex p-4 md:w-1/3'>
            <div className='relative inline-flex flex-shrink-0 items-center justify-center mb-4 w-12 h-12 text-gray-300 rounded-full pointer-events-none'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute z-0 left-0 w-40 h-40 opacity-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0'
                />
              </svg>
            </div>
            <div className='flex-grow pl-6'>
              <h2 className='title-font mb-2 text-gray-300 font-mono text-lg font-thin sm:text-xl'>
                Implementation
              </h2>
              <p className='text-lg leading-loose'>
                Once we have agreed upon a project, we will not rest until you
                are satisfied. Setup with great connectivity, redundant power,
                and 24/7 access to our best-in-class smart hards services.
              </p>
              <p className='inline-flex items-center mt-3 text-newtelco-500 font-mono text-xl font-thin'>
                ETA
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className='h-120 md:w-120 absolute z-0 -left-10 top-8 w-0 bg-gray-900 transform -rotate-3' />
    </section>
  )
}

export default Easy
