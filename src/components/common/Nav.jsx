import React from 'react'
import { NavLink, Link } from 'react-router-dom'

// Refer to index.css for styling

const Nav = () => {
  return (
    <section className="container fixed flex justify-between items-center  py-4 z-[999] bg-[#E6E6FA]">

      {/* LOGO */}
      <div className="">
        <h3>P.A</h3>
        <img src="" alt="" />
      </div>

      {/* NAV LINKS */}
      <div className="hidden lg:flex gap-8">
        <NavLink to=''>Home</NavLink>
        <NavLink to=''>Our Services</NavLink>
        <NavLink to=''>About Us</NavLink>
        <NavLink to=''>Explore</NavLink>
      </div>

      {/* NAV BUTTONS */}
      <div className='hidden lg:flex gap-4'>
        <Link to='login' className='border border-solid rounded-[8px] px-4 py-2'>Sign In</Link>
        <Link to='signup' className='border border-solid rounded-[8px] px-4 py-2 bg-[#36454F] text-white text-[600] text-[16px]'>Get Started</Link>
      </div>
    </section>
  )
}

export default Nav
