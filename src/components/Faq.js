import React, { useEffect, useRef } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useIntersection } from 'react-use'

const Faq = () => {
  const FaqRef = useRef()
  const controls = useAnimation()
  const intersection = useIntersection(FaqRef, {
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
  return (
    <motion.section
      ref={FaqRef}
      variants={list}
      initial='hidden'
      animate={controls}
      className='mt-48 mx-auto px-12 py-20 max-w-7xl md:px-2'
    >
      <motion.h1
        variants={item}
        className='mb-12 text-center text-newtelco-500 font-mono text-xl font-bold md:text-3xl'
      >
        Frequently Asked Questions
      </motion.h1>
      <motion.div
        variants={item}
        className='flex items-start justify-start mb-12 sm:px-12'
      >
        <svg
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='flex-none mr-4 w-6 h-6 text-gray-700'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          ></path>
        </svg>
        <div>
          <p className='mb-3 mt-0 text-newtelco-500 font-mono font-light'>
            Why in Karlstein?
          </p>
          <p className='text-gray-600'>
            Karlstein provides great connectivity to Europes internet hub -
            Frankfurt am Main. Here we can take advantage of both lower
            operating costs and less expensive utilities, all while preserving
            the fast service you have come to know and love at NewTelco.
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={item}
        className='flex items-start justify-start mb-12 sm:px-12'
      >
        <svg
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='flex-none mr-4 w-6 h-6 text-gray-700'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          ></path>
        </svg>
        <div>
          <p className='mb-3 mt-0 text-newtelco-500 font-mono font-light'>
            What is different about MainRZ?
          </p>
          <p className='text-gray-600'>
            MainRZ is joining the ranks of modern datacenters - computing
            environments where we place more value on running in a more
            efficient and climate friendly manner. Become a part of the green
            datacenter network and enjoy benefits like cheaper renewable energy
            costs and peace of mind that we are operating in a way that our
            children and their children will also still have datacenters.
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={item}
        className='flex items-start justify-start mb-12 sm:px-12'
      >
        <svg
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='flex-none mr-4 w-6 h-6 text-gray-700'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          ></path>
        </svg>
        <div>
          <p className='mb-3 mt-0 text-newtelco-500 font-mono font-light'>
            How is the service?
          </p>
          <p className='text-gray-600'>
            We strive to keep the same great level of service we have offered
            our customers through NewTelco for over 15 years now. Karlstein is
            only a short 20 minutes car ride away from our headquarters in
            Frankfurt am Main - so our expert remote hands technicians can be
            on-site to assist you in any way in no time!
          </p>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Faq
