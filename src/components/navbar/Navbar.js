import React,{useState} from 'react';
import "./navbar.css";
import {BiSearch} from "react-icons/bi";
import {FiShoppingBag} from "react-icons/fi";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdClear} from "react-icons/md"
const Navbar = () => {
  const[toggle,setToggle]= useState(false);
  return (
    <nav>
    <div className='navbar__container'>
    <div className='navbar__menu__container'>
      <div className='navar__logo'>
        Homejam
      </div>
      <div className='navbar__menu'>
      <div className='search__container'>
      <a href="#search"><BiSearch /></a>
        <a href="#search">search</a>
        </div>
        <a href="#help">help</a>
        <a href="#Account">Account</a>
        <a href="#bag"><FiShoppingBag/></a>
      </div>
     <div className='mobile__nav__container'>
     <a href="#search"><BiSearch /></a>
     <a href="#bag"><FiShoppingBag/></a>
     {toggle ? <MdClear className='toggleIcon' onClick={()=>setToggle(false)}/>:
     <GiHamburgerMenu className='toggleIcon' onClick={()=>setToggle(true)}/>}
    {toggle && (
      <div className='mobile__nav__menu'>
        <a href="#search">search</a>
        <a href="#help">help</a>
        <a href="#Account">Account</a>
        </div>
    )}
    </div>
    </div>
    </div>
    </nav>
  )
}

export default Navbar;