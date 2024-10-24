import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'
import HeroPng from "../assets/sweet-plate-1.png"
import CandyPng from "../assets/candy1.webp"
import { motion } from "framer-motion"
import { FadeRight } from '../animation/Animation'

const Hero = () => {
  return (
    <section>
      <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>

        {/* Brand Info */}

        <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
          <div className='text-center md:text-left space-y-5 lg:max-w-[400px]'>
            <motion.h1
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal font-averia'>Healthy
              <br />
              Guilt-Free <span className='text-secondary'> Sweets!</span></motion.h1>
            <motion.p
              variants={FadeRight(0.9)}
              initial="hidden"
              animate="visible"
              className='text-2xl tracking-wide'
            >Delicious and Irresistible Sweets for Every Occasion! </motion.p>
            <motion.p
              variants={FadeRight(1.2)}
              initial="hidden"
              animate="visible"
              className='text-gray-400 '>

Indulge in our handcrafted treats, perfect for satisfying your sweet cravings. Made with love and the finest ingredients.

Order now and get 15% off on your first purchase!
Make your moments sweeter today!






            </motion.p>


            {/* Button Section */}

            <motion.div variants={FadeRight(1.5)}
              initial="hidden"
              animate="visible"
              className='flex justify-center md:justify-start'>
              <button className='primary-btn flex items-center gap-2'>
                <span>
                  <IoBagHandleOutline />
                </span>
                Order Now</button>
            </motion.div>

          </div>
        </div>

        {/* Hero Images */}

        <div className='flex justify-center items-center'>
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            src={HeroPng}
            alt=""
            className='w-[350px] md:w-[550px] drop-shadow' />
        </div>

        {/* Leaf Image */}

        <div className='absolute top-auto -bottom-10 md:top-0 right-3/4 blur-sm opacity-75 rotate-[40deg]'>
          <motion.img
            initial={{ opacity: 0, y: -200, rotate: 75 }}
            animate={{ opacity: 1, y: 0, rotate: 0, x: 50 }}
            transition={{ duration: 1, delay: 1.5 }}
            src={CandyPng} alt="" className='w-6/12 md:max-w-[3000px]' />
        </div>

      </div>
    </section>
  )
}

export default Hero