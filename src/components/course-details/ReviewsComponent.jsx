import React from 'react'
import CourseSlider from '../flexible-courses/CourseSlider'
import Review from './Review'

const ReviewsComponent = () => {
  return (
    <div>
      <CourseSlider>
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </CourseSlider>
    </div>
  )
}

export default ReviewsComponent