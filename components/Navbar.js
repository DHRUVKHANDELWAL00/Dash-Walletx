import React from 'react'
import { BiSolidDashboard } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="navbar">
  <div className="navbar-start">
    <BiSolidDashboard size={50} />
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl text-3xl">Dash</a>
  </div>
  <div className="navbar-end">
    
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a href='/explore'>Explore</a></li>
        <li><a>Send</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navbar
