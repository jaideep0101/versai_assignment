import React from 'react';
import "./cards.css";
import {Image1,Image2,Image3,Image4} from "../../assets/index";
import {BsArrowRight} from "react-icons/bs";
import {CgMoreVerticalR} from "react-icons/cg";

const shows=[{
  image:Image1,
  artistName:"Benny Dayal",
  artType:"Folk"
},{
  image:Image2,
  artistName:"Vijay Yesudas",
  artType:"Bollywood"
},{
  image:Image3,
  artistName:"Andrea jermiah",
  artType:"Folk"
},{
  image:Image4,
  artistName:"Shilpa Rao",
  artType:"Folk"
}]


const Cards = () => {
  return (
    <div className='card__container'>
   {
     shows.map(show => (
       <div className='card__background'>
      <div className='card'>
      <img className='card__image' src={show.image} alt="image1"/>
     <div className='card__text__container'>
<div className='artist__type__container'>
<p>{show.artType}</p>
</div>
<h3>{show.artistName}</h3>
<div className='more__info__conatiner'>
<p>More Info <BsArrowRight/></p>
<div className='vertical__line'/>
<CgMoreVerticalR className='more__info__icon'/>
</div>
      </div>
    </div>
    </div>
     ))
   }
</div>
  )
}

export default Cards