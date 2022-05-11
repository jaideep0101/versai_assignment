import React from 'react';
import "./reviewcards.css";
import {Flag1,Flag2,Image6} from "../../assets/index";

const reviews=[{
        image:Image6,
        name:"Hellen Jummy",
        flags:Flag2,
        paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
},
{
        image:Image6,
        name:"Isaac Oluwatemilorun ",
        flags:Flag1,
        paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
},
{
        image:Image6,
        name:"Hellen Jummy",
        flags:Flag2,
        paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
}]

const ReviewCards = () => {
  return (
    <div className='reviews__card__container'>
    <div className='reviews__cards'>
    {
            reviews.map(review =>(
                <div className='reviews__card__background'>
        <div className='reviews__card'>
<div className='review__card__image'>
<img src={review.image} alt="review-img"/>
<div className='reviewer__container'>
<h5>{review.name}</h5>
<h6><span><img src={review.flags} alt="flag-icon"/></span>PALO ALTO, CA</h6>
</div>
</div>
<div className='review__card__text'>
<p>{review.paragraph}.</p>
</div>
        </div>
        </div>

            ))
    }
    </div>
    </div>
  )
}

export default ReviewCards;