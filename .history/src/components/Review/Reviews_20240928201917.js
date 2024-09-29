import React from 'react'
import ReviewsData from './reviews.json'
import './Reviews.css'

const Reviews = () => {
  return (
    <div className="clients-reviews">
    <h1 class="services-header special-color capitalize"> clients re </h1>
    {ReviewsData.map((item , index) => {
      return (
        <div className="review-img" key={index} >
          <img src={ require(`./../../images/reviews/${item.reviewImg}`)} alt="" className="" />                            
        </div>
          )
        })}
  </div>
  )
}

export default Reviews
