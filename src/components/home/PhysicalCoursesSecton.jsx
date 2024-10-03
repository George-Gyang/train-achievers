import React from 'react'
import PopularCourseCard from '../physical-course/PopularCourseCard'

const PhysicalCoursesSecton = () => {
    return (
        <section  data-aos="fade-up" >
            <div className='container mb-5 pb-5'>
                <h2 className="h4 font-semibold ">Phyiscal Training Courses</h2>
               <p className="text-lg font-medium">Most Popular Courses</p>
                <div className="grid md:grid-cols-3  gap-4">
                    <PopularCourseCard />
                    <PopularCourseCard />
                    <PopularCourseCard />
                </div>
            </div>
        </section>
    )
}

export default PhysicalCoursesSecton