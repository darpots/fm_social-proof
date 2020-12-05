import React from 'react'
import Wrapper from './Wrapper'
import { title, text, reviewData, testimonialData } from './data'

import Header from './Header'
import Reviews from './Reviews'
import Testimonials from './Testimonials'

export default function App() {
  return (
    <Wrapper>
      <div className="flexContainer">
        <Header title={title} text={text} />
        <Reviews reviewData={reviewData} />
      </div>
      <Testimonials testimonialData={testimonialData} />
    </Wrapper>
  )
}
