import React from 'react'

const NavbarItem = ({name, isFirst}) => {
    if (isFirst){
        return (
            <div className='navbar-item mx-3 text-black cursor-pointer text-[#FCA311] px-5 py-1 rounded-[1rem] font-[500]'>
                {name}
            </div>
          )
    }else{
        return (
          <div className='navbar-item mx-3 text-black cursor-pointer transition duration-200  hover:bg-gray-200 px-5 py-1 rounded-[1rem] font-[500]'>
              {name}
          </div>
        )
    }
}

export default NavbarItem