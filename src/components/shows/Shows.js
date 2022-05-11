import React from 'react';
import "./shows.css";
import Cards from "../cards/Cards"

const Shows = () => {
  return (
    <div className='shows__container'>
      <div className='shows__container__heading'>
      <div className='shows__heading'>
<h2>Upcoming Shows</h2>
<div className='underline'/>
</div>
<h5>View All</h5>
    </div>
    <Cards/>
    </div>
  )
}

export default Shows