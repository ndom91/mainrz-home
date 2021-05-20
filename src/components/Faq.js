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
        className='mb-12 text-left text-newtelco-500 font-mono text-xl font-bold md:text-center md:text-3xl'
      >
        Frequently Asked Questions
      </motion.h1>
      <motion.div
        variants={item}
        className='flex items-start justify-start mb-12 px-12'
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
            What is accessibility?
          </p>
          <p className='text-gray-600'>
            This article starts off the module with a good look at what
            accessibility is — this includes what groups of people we need to
            consider and why, what tools different people use to interact with
            the web, and how we can make accessibility part of our web
            development workflow.
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={item}
        className='flex items-start justify-start mb-12 px-12'
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
            CSS and JavaScript accessibility best practices?
          </p>
          <p className='text-gray-600'>
            CSS and JavaScript, when used properly, also have the potential to
            allow for accessible web experiences, but if misused they can
            significantly harm accessibility. This article outlines some CSS and
            JavaScript best practices that should be considered to ensure that
            even complex content is as accessible as possible.
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={item}
        className='flex items-start justify-start mb-12 px-12'
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
            WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics?
          </p>
          <p className='text-gray-600'>
            {`Following on from the previous article, sometimes making complex UI
            controls that involve unsemantic HTML and dynamic JavaScript-updated
            content can be difficult. WAI-ARIA is a technology that can help
            with such problems by adding in further semantics that browsers and
            assistive technologies can recognize and use to let users know what
            is going on. Here we'll show how to use it at a basic level to
            improve accessibility.`}
          </p>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Faq
