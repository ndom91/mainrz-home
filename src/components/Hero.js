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
      <div className='container relative z-10 flex flex-col items-center mx-auto px-5 py-24 md:flex-row'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={item}
          transition={{ duration: 1 }}
          className='flex flex-col items-start mb-16 text-center md:items-start md:mb-0 md:pr-16 md:w-1/2 md:text-left lg:flex-grow lg:pr-6'
        >
          <p className='text-newtelco-900 flex self-start justify-center align-middle mb-8 px-3 py-2 text-xs font-medium tracking-wider bg-newtelco-500 rounded-full uppercase'>
            {content.HeroBadge} Newtelco
            {/* <img
              src='/img/nt-grey.png'
              width='100'
              className='inline ml-2 mt-0.5 h-3'
            /> */}
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
            className='hero-markers space-y flex flex-col items-start justify-center mt-8 w-full text-left text-gray-400 font-mono text-sm font-light tracking-tight list-inside list-disc md:text-base'
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
          className='w-5/6 md:w-2/3 lg:w-full lg:max-w-xl'
        >
          <img
            className='hidden rounded object-cover object-center md:inline-block'
            alt='hero'
            src='/img/hero.svg'
          />
        </motion.div>
      </div>
      <div className='relative z-10 flex justify-center mt-12'>
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
      <svg
        viewBox='0 0 200 200'
        xmlns='http://www.w3.org/2000/svg'
        className='h-140 absolute z-0 -right-36 -top-28 opacity-20'
      >
        <path
          fill='#CCCCCC'
          d='M30.9,-52.3C37.3,-49.8,37.9,-36,44.7,-25.4C51.5,-14.8,64.5,-7.4,68.9,2.5C73.4,12.5,69.2,25,63.7,37.9C58.2,50.7,51.3,63.8,40.5,71.9C29.6,79.9,14.8,82.9,3.9,76.1C-6.9,69.3,-13.9,52.6,-18.7,41.1C-23.5,29.6,-26.3,23.2,-37.9,17.2C-49.5,11.2,-70,5.6,-74.1,-2.3C-78.1,-10.2,-65.6,-20.5,-54.2,-26.8C-42.7,-33.1,-32.3,-35.4,-23.4,-36.5C-14.6,-37.5,-7.3,-37.1,2.5,-41.4C12.2,-45.7,24.5,-54.7,30.9,-52.3Z'
          transform='translate(100 100)'
        />
      </svg>
    </main>
  )
}

export default Hero
