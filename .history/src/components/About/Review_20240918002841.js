import React from 'react'
import Reviews from './reviews.json'

const Review = () => {
  return (
    <div className="clients-reviews">
    {Reviews.map((item , index) => {
      return (
        <div className="review-img" key={index} >
        <img src={ require(`./../../images/reviews/${item.reviewImg}`)} alt="" className="" /> 
                            
        </div >
          )
        })}
  </div>
  )
}

export default Review
