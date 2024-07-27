import React from 'react'

const Navbar = () => {
  return (


    <div className='navbar'>
      <hr />
      <div className="flex gap-5 bg-custom-green text-lg text-teal-200 ">
        <span className='logo'>CHAT APP-LOGO</span>
        <div className='m-4 flex gap-2'>
          <img src="" alt="" />
          <span>MANIKA<button className='text-custom-green'>Log out</button></span>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Navbar
