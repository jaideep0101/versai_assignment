import React from 'react';
import "./home.css";
import Navbar from "../navbar/Navbar";
import {BsSuitHeart} from "react-icons/bs";
import {AiOutlineCalendar} from "react-icons/ai";

const Home = ()=> {
  return (
    <div className='home__container'>
    <Navbar/>
    <div className='home__container__text'>
      <h1>Cari Cari</h1>
      <p>Live from their sofa to yours. Get closer to your favourite artists, and never miss out. </p>
    </div>
  <div className='home__container__data'>
<div className='circle circle__heart'>
<BsSuitHeart className='heart__icon' />
<p>0</p>
<p>Label</p>
</div>
    <div className='circle'>
<AiOutlineCalendar/>
<p>0</p>
<p>Label</p>
</div>
<div className='circle'>
<AiOutlineCalendar />
<p>0</p>
<p>Label</p>
</div>
<div className='circle'>
<AiOutlineCalendar />
<p>0</p>
<p>Label</p>
</div>
    </div>
    </div>
  )
}

export default Home;