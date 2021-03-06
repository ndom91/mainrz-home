import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import WelcomeLetter from './WelcomeLetter'

const Intro = () => {
  const [open, setOpen] = useState(false)


  return (
    <section id='letter' className='body-font mt-36 text-gray-400 lg:mb-36'>
      <div className='container mx-auto px-16 py-24 lg:px-5'>
        <div className='flex flex-col mx-auto lg:w-3/4 xl:w-2/3'>
          <div className='flex justify-start'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              className='mb-8 mr-4 w-8 h-8 text-gray-500'
              viewBox='0 0 975.036 975.036'
            >
              <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
            </svg>
            <span className='text-newtelco-500 font-mono text-2xl font-bold sm:text-4xl'>
              Announcement Letter
            </span>
          </div>
          <p className='text-left text-lg font-thin leading-relaxed' >
          NewTelco is pleased to announce their plans for a pioneering new data center set to open in the second half of 2022. Located in Karlstein am Main, close to the international telecom hub of Frankfurt am Main, the new data center will serve global players needing an additional presence in the heart of the EU, as well as businesses in Germany.

NewTelco’s Managing Director Jens Leuchters explains the reasoning behind the choice for Karlstein: “As our colocation business continues to grow, it only makes sense to invest in a larger, more advanced data center to add to our current capacity in Frankfurt. Karlstein is the ideal location, close enough to Frankfurt to ensure top quality connectivity, but also allowing us to expand our services to reach new target groups.”
          </p>
          <div className='flex justify-center'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => setOpen(true)}
              className='flex mt-14 px-14 py-3 text-white text-lg tracking-wide bg-newtelco-500 hover:bg-newtelco-600 border-0 rounded focus:outline-none outline-none transition-all duration-500 focus:ring-newtelco-500 focus:ring-opacity-30 focus:ring-4'
            >
              Read More
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <WelcomeLetter
            open={open}
            close={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Intro
