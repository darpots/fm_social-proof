import React from 'react'
import './Testimonials.scss'

export default function Testimonials({ testimonialData }) {
  return (
    <div className="testimonialContainer">
      {testimonialData.map((testimonial) => (
        <div className="testimonialBox">
          <div className="flexHeader">
            <img src={testimonial.image} alt={testimonial.name} />
            <div>
              <h2>{testimonial.name}</h2>
              <h3>{testimonial.title}</h3>
            </div>
          </div>
          <p>{testimonial.text}</p>
        </div>
      ))}
    </div>
  )
}
