import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Button from './Button';
import {RxSketchLogo, RxHamburgerMenu, RxPerson} from 'react-icons/rx'
import { motion } from "framer-motion";

const navLinks =[
  {name:"Feature", links:"/dashboard"},
  {name:"Pricing", links:"/halo"},
  {name:"Enterprise", links:"/dashboard"},
  {name:"About", links:"/dashboard"}
]



function NavBar({children}) {
   const [isOpen, setIsOpen] = useState(false);
   const genericHamburgerLine = `h-[3px] w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
   const listItemVariants = {
      closed: {
        x: -10,
        opacity: 0,
      },
      opened: {
        x: 0,
        opacity: 1,
      },
    };

    const listVariants = {
      closed: {
        x: "100vw",
      },
      opened: {
        x: 0,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.2,
        },
      },
    };

   return (
    <div>
    <nav className='flex w-full items-center justify-between px[20px] py-[16px] px-[16px] lg:mx-auto '>
       <div className='flex '>
          <RxSketchLogo alt="logo" size={32}/>

          <div className='hidden lg:flex pl-[74px] gap-x-[56px]'>
             {navLinks.map((items, index) => (
              <Link href={items.links} key={index}>
               <p className='text=[#36485C] font-medium'>
                  {items.name}
               </p>
              </Link>
             ))}
          </div>
       </div>
       <div className='flex gap-x-5'>
         <button  onClick={() => console.log("Open an Account")} >
            <p className='hidden lg:block font-medium text=[#36485C] pr-[56px]'>Open an Account</p>
         </button>

         <button  onClick={() => console.log("Go Sign In")} >
          <div className='flex items-center gap-x-2'>
             <RxPerson alt="user Profile" size={24}/>
             <span className='hidden font-medium text-[#36485C] lg:block'>Sign In</span>
          </div>
          </button>

          <button
            className="z-50 flex flex-col lg:hidden h-8 justify-center items-center group"
            onClick={() => setIsOpen(!isOpen)}
            >
                  <div
                        className={`${genericHamburgerLine} ${
                           isOpen
                              ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100  bg-white"
                              : "opacity-50 group-hover:opacity-100"
                        }`}
                  />
                  <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0 " : "opacity-50 group-hover:opacity-100"}`} />
                  <div
                     className={`${genericHamburgerLine} ${
                        isOpen
                           ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100 bg-white"
                           : "opacity-50 group-hover:opacity-100"
                     }`}
                     />
          </button>
       </div>
    </nav>
    {
      isOpen &&(
         <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="lg:hidden opacity-90 absolute top-0 left-0 w-screen h-screen  bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {navLinks.map((item, index) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={index}
              >
                <Link href={item.links}>{item.name}</Link>
              </motion.div>
            ))}
          </motion.div>
            
      )
    }
   
    <main className='w-full'>{children}</main>
    </div>
  )
}

export default NavBar