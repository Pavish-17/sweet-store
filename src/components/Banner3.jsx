import React from 'react'
import BannerPng from "../assets/banner1.png"
import { FadeLeft } from '../animation/Animation'
import { motion } from "framer-motion"
import { IoBagHandleOutline } from 'react-icons/io5'

const bgStyles = {
    backgroundImage: `url(${BannerPng})`,
    backgroungPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: 'fixed',
}

const Banner3 = () => {
    return (
        <section className='container mb-12'>
            <div style={bgStyles} className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-20 rounded-3xl'>

                {/* Blank div */}

                <div></div>

                {/* Banner Info */}

                <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                        <motion.h1
                            variants={FadeLeft(0.5)}

                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}



                            className='text-3xl lg:text-5xl font-bold uppercase'>
                            {""}
                            Get Delicious Sweets Today</motion.h1>
                        <motion.p
                            variants={FadeLeft(1)}

                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt</motion.p>


                        {/* Button Section */}

                        <motion.div variants={FadeLeft(1.5)}
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.9 }}
                            className='flex justify-center md:justify-start'>
                            <button className='primary-btn flex items-center gap-2'>
                                <span>
                                    <IoBagHandleOutline />
                                </span>
                                Order Now</button>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner3