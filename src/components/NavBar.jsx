import React, { useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";

import logo from "../assets/siteLogo.png";
import { CiSearch, CiHeart, CiMenuBurger } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="navBorder h-14 lg:h-[94px] flex items-center relative z-50 bg-white">
      <Container className="lg:pt-6">
        <Flex className="justify-between items-center h-full">
          {/* Logo */}
          <div>
            <img src={logo} alt="Site Logo" />
          </div>

          {/* Desktop Nav List */}
          <List className="hidden lg:block">
            <Flex className="gap-12 text-[16px] font-medium">
              <ListItem className="navList">Home</ListItem>
              <ListItem className="navList">Contact</ListItem>
              <ListItem className="navList">About</ListItem>
              <ListItem className="navList">Sign Up</ListItem>
            </Flex>
          </List>

          {/* Icons */}
          <div className="flex items-center gap-2 relative">
            {/* Search icon */}
            <CiSearch
              className={`${
                showSearch ? "absolute right-10" : ""
              } text-2xl lg:absolute lg:right-20 flex items-center justify-center cursor-pointer`}
              onClick={() => setShowSearch(!showSearch)}
            />
            <input
              type="text"
              placeholder="What are you looking for"
              className={`bg-[#F5F5F5] w-[243px] h-[38px] px-4 rounded-[4px] focus:outline-none 
                ${showSearch ? "block" : "hidden"} lg:block`}
            />

            {/* Icons hidden on small screens, moved to dropdown */}
            <CiHeart className="text-2xl hidden lg:block" />
            <IoCartOutline className="text-2xl hidden lg:block" />

            {/* Mobile Menu Icon */}
            <CiMenuBurger
              className="text-2xl lg:hidden cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
        </Flex>

        {/* Mobile Dropdown */}
        {showMenu && (
          <div className="absolute top-full left-0 w-full bg-black shadow-md px-4 py-4 lg:hidden z-40 text-white">
            <ul className="space-y-3 text-base font-medium">
              <li className="navList">Home</li>
              <li className="navList">Contact</li>
              <li className="navList">About</li>
              <li className="navList">Sign Up</li>
            </ul>
            <div className="flex justify-start items-center gap-4 mt-4">
              <CiHeart className="text-2xl" />
              <IoCartOutline className="text-2xl" />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default NavBar;
