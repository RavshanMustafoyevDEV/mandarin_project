import React from 'react'

const NavbarItem = ({name}) => {
  return (
    <div className='navbar-item mx-3 cursor-pointer transition duration-200 hover:text-yellow-500'>
        {name}
    </div>
  )
}

export default NavbarItem