import React from 'react'
import BannerPng from "../assets/plate-1.png"
import { Fadeup } from '../animation/Animation'
import { motion } from "framer-motion"

const Banner2 = () => {
    return (
        <section className=''>
            <div className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24'>

                {/* Banner Info */}

                <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                        <motion.h1
                            variants={Fadeup(0.5)}
                            initial="hidden"
                            animate="visible"
                            viewport={{ once: true }}
                            className='text-3xl lg:text-5xl font-bold uppercase'>
                            {""}
                            Online Sweet Store</motion.h1>
                        <motion.p
                            variants={Fadeup(1)}
                            initial="hidden"
                            animate="visible"
                            viewport={{ once: true }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt</motion.p>
                        <motion.p
                            variants={Fadeup(1.5)}
                            initial="hidden"
                            animate="visible"
                            viewport={{ once: true }}
                        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus deleniti voluptatem iusto sed.</motion.p>

                        {/* Button Section */}

                        <motion.div variants={Fadeup(2)}
                            initial="hidden"
                            animate="visible"
                            className='flex justify-center md:justify-start'>
                            <button className='primary-btn'>Download the App</button>
                        </motion.div>

                    </div>


                </div>
                {/* Banner Image */}

                <div className='flex justify-center items-center'>
                    <motion.img
                        initial={{ opacity: 0, x: 200, rotate: 75 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        src={BannerPng} alt="" className='w-[350px] md:max-w-[500px] h-full object-cover drop-shadow' />
                </div>
            </div>
        </section>
    )
}

export default Banner2