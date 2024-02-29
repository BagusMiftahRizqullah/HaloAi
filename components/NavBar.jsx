import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import {RxSketchLogo, RxHamburgerMenu, RxPerson} from 'react-icons/rx'

const navLinks =[
  {name:"Feature", links:"/dashboard"},
  {name:"Pricing", links:"/halo"},
  {name:"Enterprise", links:"/dashboard"},
  {name:"About", links:"/dashboard"}
]

function NavBar({children}) {
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
          <p className='hidden lg:block font-medium text=[#36485C] pr-[56px]'>Open an Account</p>
          <div className='flex items-center gap-x-2'>
             <RxPerson alt="user Profile" size={24}/>
             <span className='hidden font-medium text-[#36485C] lg:block'>Sign In</span>
          </div>
        <RxHamburgerMenu className='lg:hidden' alt="Menu Button" size={32}/>
       </div>
    </nav>
    <main className='w-full'>{children}</main>
    </div>
  )
}

export default NavBar