import React from "react";
import NavbarItem from "./NavbarItem";
import logo from "../images/logo.svg";

const Navbar = () => {
  const NavbarItemsArray = ["Главная", "Услуги", "Портфолио", "Контакты"];

  return (
    <div className="navbar items-center justify-between flex container px-5 mt-3">
      <div className="navbar-logo">
        <img src={logo} />
      </div>

      <div className="navbar-items hidden md:flex">
        {NavbarItemsArray.map((item, index) => {
          if (index == 0) {
            return (
              <div key={index}>
                <NavbarItem name={item} isFirst={true} />
              </div>
            );
          } else {
            return (
              <div key={index}>
                <NavbarItem name={item} isFirst={false} />
              </div>
            );
          }
        })}
      </div>

      <div className="responsive-navbar inline md:hidden">
        <svg
          class="h-8 w-8 text-black-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>

      </div>
    </div>
  );
};

export default Navbar;
