import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero = ({ content }) => {
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
    <main className='font-montserrat'>
      <div className='container flex flex-col items-center mx-auto px-5 py-24 md:flex-row'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={item}
          transition={{ duration: 1 }}
          className='flex flex-col items-center mb-16 text-center md:items-start md:mb-0 md:pr-16 md:w-1/2 md:text-left lg:flex-grow lg:pr-20'
        >
          <p className='text-newtelco-900 inline-block mb-8 px-3 py-1 text-xs font-medium tracking-wider bg-newtelco-500 rounded-full uppercase'>
            {content.HeroBadge}
          </p>
          <Image
            src='/img/mainrz-logo.png'
            width='500'
            height='94'
            alt={content.Title}
          />
          <motion.ul
            variants={list}
            initial='hidden'
            animate='visible'
            className='hero-markers space-y text-md flex flex-col items-start justify-center mt-8 w-full text-gray-400 font-mono font-light tracking-tight list-inside list-disc'
          >
            <motion.li variants={item}>{content.Checklist.Item1}</motion.li>
            <motion.li variants={item}>{content.Checklist.Item2}</motion.li>
            <motion.li variants={item}>{content.Checklist.Item3}</motion.li>
            <motion.li variants={item}>{content.Checklist.Item4}</motion.li>
          </motion.ul>
          <p className='font-base text-md mb-2 mt-8 w-full text-gray-500 font-mono tracking-tight'>
            {content.CallToAction}
          </p>
          <div className='flex items-end justify-center mt-4 w-full md:justify-start'>
            <a
              alt='Mail MainRZ Marketing'
              href='mailto:marketing@mainrz.de'
              target='_blank'
              rel='noopener noreferer noreferrer'
              className='rounded focus:outline-none outline-none transition-all duration-500 focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring-4'
            >
              <button
                tabIndex='-1'
                className='inline-flex px-10 py-2 text-white text-lg bg-newtelco-500 hover:bg-newtelco-600 border-0 rounded transition-colors duration-500 ease-in-out'
              >
                {content.CallToActionButton}
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial='hidden'
          animate='visible'
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className='w-5/6 md:w-1/2 lg:w-full lg:max-w-lg'
        >
          <img
            className='rounded object-cover object-center'
            alt='hero'
            src='/img/absurd_2.png'
          />
        </motion.div>
      </div>
      <div className='flex justify-center mt-12'>
        <motion.a whileHover={{ scale: 1.2, y: -10 }} href='#letter'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-8 h-8 text-newtelco-500 cursor-pointer'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </motion.a>
      </div>
    </main>
  )
}

export default Hero
