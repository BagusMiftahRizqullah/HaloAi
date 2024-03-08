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
    <nav className=' border-b-4 border-gray-200 shadow-md  flex w-full items-center justify-between  py-[15px] px-[53px] lg:mx-auto '>
      <div className="self-stretch my-auto text-2xl font-black text-zinc-900">
        Vieo
      </div>
      <div className="flex gap-5 justify-between self-stretch my-auto font-bold text-zinc-900">
        <div>Pricing</div>
        <div>Use Cases</div>
        <div>Docs</div>
      </div>
      <div className="flex gap-5 justify-between self-stretch pl-5 whitespace-nowrap">
        <button
            className="z-50 flex flex-col   h-8 justify-center items-center group"
            onClick={()=>  console.log("GET LOGIN")}
            >
        <div className="my-auto font-medium text-zinc-900">Login</div>
        </button>

        <button
            className="z-50 flex flex-col  h-8 justify-center items-center group"
            onClick={()=>  console.log("GET STARTED")}
            >
        <div className="justify-center px-5 py-2 font-bold text-white rounded-md bg-zinc-900">
          Get Started
        </div>
        </button>
      </div>
    </nav>
   
   
    <main className='w-full'>{children}</main>
    </div>
  )
}

export default NavBar