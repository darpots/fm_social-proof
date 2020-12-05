import React from 'react'
import Star from '../images/icon-star.svg'
import './Reviews.scss'

export default function Reviews({ reviewData }) {
  return (
    <section className="reviewContainer">
      {reviewData.map((review, id) => (
        <div key={id} className="reviewBox">
          {Array(review.stars)
            .fill(null)
            .map((star, idx) => (
              <img className="star" key={idx} src={Star} alt="star" />
            ))}
          <p className="reviewText">{review.text}</p>
        </div>
      ))}
    </section>
  )
}
