import React from 'react'
import NavbarItem from './NavbarItem'
import logo from '../images/logo.svg'

const Navbar = () => {
    const NavbarItemsArray = [
        'Главная','Услуги', 'Портфолио', 'Контакты'
    ]

  return (
    <div className='navbar container flex container px-5'>
        <div className='navbar-logo'>
            <img src={logo}/>
        </div>

        <div className='navbar-items flex'>
            {NavbarItemsArray.map((item, index)=>{
                return <div key={index}><NavbarItem name={item} /></div>
            })}
        </div>
    </div>
  )
}

export default Navbar