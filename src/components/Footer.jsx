import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle} from 'react-icons/fa'
import { GiWrappedSweet } from "react-icons/gi";
import { motion } from "framer-motion"
import { FaLinkedinIn } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='bg-primary/10 py-12 mt-12'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className='container flex justify-between items-center'>

        {/* Logo Section */}

        <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
          <p className='text-primary'>Sweets</p>
          <p className='text-secondary'>Store</p>
          <GiWrappedSweet className='text-amber-800'/>
        </div>
        {/* Social icon Section */}
        <div className='text-3xl flex items-center gap-4 mt-6 text-gray-700'>
          <a href="https://www.instagram.com/pavish__?igsh=MWVydm5hYm5jMWtyYg==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <FaTwitter />
          <FaFacebookF />
          <a href="mailto:pavish2004@gmail.com">
            <FaGoogle />
          </a>
          <a href="https://www.linkedin.com/in/pavish-p-3902a726a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>

        </div>

      </motion.div>
    </footer>
  )
}

export default Footer