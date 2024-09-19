import React from 'react'
import ReviewsData from './reviews.json'
import './Reviews.css'

const Reviews = () => {
  return (
    <div className="clients-reviews">
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
