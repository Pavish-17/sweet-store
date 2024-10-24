import React from 'react'
import Muffin from '../assets/red-velvet-muffin.webp';
import Cake from "../assets/ras-cheese-cakke.webp";
import Caramel from "../assets/caramel.webp";
import Yogurt from "../assets/vanilla-frozen-yogurt.webp";
import Frozen from "../assets/frozen-yogurt.webp";
import Jelabi from "../assets/jelabi.png";
import Laddu from "../assets/laddu.png";
import Jamun from "../assets/Gulab-jamun.png";
import {motion} from "framer-motion"
import { FadeLeft } from '../animation/Animation';

const MenusData = [
    {
      id: 1,
      title: "Red Velvet Muffin",
      link: "/",
      price: "₹10.00",
      img: Muffin,
      delay: 0.3,
    },
    {
      id: 2,
      title: "Raspberry Cheese Cake",
      link: "/",
      price: "₹15.00",
      img: Cake,
      delay: 0.6,
    },
    {
      id: 3,
      title: "Caramel Chocolate",
      link: "/",
      price: "₹10.00",
      img: Caramel,
      delay: 0.9,
    },
    {
      id: 4,
      title: "Vanilla Yogurt",
      link: "/",
      price: "₹20.00",
      img: Yogurt,
      delay: 1.2,
    },
    {
      id: 5,
      title: "Frozen Yogurt",
      link: "/",
      price: "₹20.00",
      img: Frozen,
      delay: 1.2,
    },
    {
      id: 6,
      title: "Jelabi",
      link: "/",
      price: "₹5.00",
      img: Jelabi,
      delay: 1.2,
    },
    {
      id: 7,
      title: "Laddu",
      link: "/",
      price: "₹5.00",
      img: Laddu,
      delay: 1.2,
    },
    {
      id: 8,
      title: "Gulab Jamun",
      link: "/",
      price: "₹5.00",
      img: Jamun,
      delay: 1.2,
    },
]

const Menus = () => {
  return (
    <section>
      <div className='container pt-12 pb-20'>
        <motion.h1
        initial={{opacity: 0, x: -200}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1, delay: 0.3}}
        h1 className='text-2xl font-bold text-left pb-10 uppercase'>
          Our Menu
        </motion.h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          {MenusData.map((menu) => (
            <motion.div 
            variants={FadeLeft(menu.delay)}
            initial="hidden"
            whileInView={"visible"}
            whileHover={{scale: 1}}
            className='bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3'>
              <img src={menu.img} alt="" className='w-[60px] mb-4 scale-110 transform -translate-y-6' />
              <div>
                <h1 className='text-lg font-semibold'>{menu.title}</h1>
                <p className='text-lg font-semibold text-secondary'>{menu.price}</p>
              </div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menus