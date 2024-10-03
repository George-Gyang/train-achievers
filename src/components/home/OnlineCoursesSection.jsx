import React from 'react'
import CourseSlider from '../flexible-courses/CourseSlider'
import CourseCard from '../flexible-courses/CourseCard'

const OnlineCoursesSection = () => {
    return (
        <section  data-aos="fade-up" >
            <div className="container py-5 mb-5">
                <h3 className="h4">Online Course for home care services</h3>
                <p className="text-lg font-medium">Expand your training options with our diverse range of flexible RQF/NVQ courses. </p>
                <CourseSlider>
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </CourseSlider>
                {/* </div> */}
                {/* </div> */}
            </div>
        </section>
    )
}

export default OnlineCoursesSection