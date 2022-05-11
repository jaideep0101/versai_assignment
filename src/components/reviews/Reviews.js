import React from 'react';
import "./reviews.css";
import {HiOutlineArrowNarrowLeft} from "react-icons/hi";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";
import ReviewCards from "../reviewCards/ReviewCards";
const Reviews = () => {
  return (
    <div className='reviews__container'>
    <div className='reviews__container__heading'>
    <div className='reviews__heading'>
<h2>Reviews</h2>
<div className='underline'/>
</div>
<div className='reviews__heading__navigation'>
<h5>1/12 <span><HiOutlineArrowNarrowLeft className='navigation__arrows'/><HiOutlineArrowNarrowRight className='navigation__arrows'/></span></h5>
</div>
  </div>
  <ReviewCards/>
  </div>
  )
}

export default Reviews;