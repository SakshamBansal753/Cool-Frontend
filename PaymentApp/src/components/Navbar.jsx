import React from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar '>
<img src="src/assets/logo.svg" className='w-[144px] h-[52px]'/>
<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
{navLinks.map((nav,index)=>(
    <li key={nav.id}  className='font-semibold cursor-pointer text-[26px] text-white/50 mr-10 hover:text-white hover:text-4xl'>
        <a href={`#${nav.id}`}>
            {nav.title}
        </a>
    </li>
))}
</ul>

    </nav>

  )
}

export default Navbar