import React from 'react';
import { GiWrappedSweet } from "react-icons/gi";
import { MdMenu, MdOutlineShoppingCart } from 'react-icons/md';
import ResponsiveMenu from './ResponsiveMenu';
import { motion } from "framer-motion"


const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/home",
  },
  {
    id: 2,
    title: "Products",
    link: "#products",
  },
  {
    id: 3,
    title: "About",
    link: "#about",
  },
  {
    id: 4,
    title: "Shop",
    link: "#shop",
  },
  {
    id: 5,
    title: "Contacts",
    link: "#contacts",
  },
]

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container flex justify-between items-center py-4 md:pt-4">

          {/* Logo Section */}

          <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
            <p className='text-primary'>Sweets</p>
            <p className='text-secondary'>Store</p>
            <GiWrappedSweet  className='text-amber-800' />
          </div>

          {/* Menu Section */}

          <div className='hidden md:block'>
            <ul className='flex items-center gap-6 text-gray-600'>
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a href={menu.link}
                    className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'>{menu.title}</a>
                </li>
              ))}
              <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>

          {/*Mobile Hamburger Menu Section */}

          <div className='md:hidden' onClick={() => setOpen(!open)}>
            <MdMenu className='text-4xl' />
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu Section */}

      <ResponsiveMenu open={open} />

    </>
  );
};


export default Navbar