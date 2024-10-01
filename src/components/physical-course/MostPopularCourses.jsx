import React from 'react'
import PopularCourseCard from './PopularCourseCard'

const MostPopularCourses = () => {
    return (
        <div>
            <h2 className="text-center h2 font-semibold my-10">Most Popular Course</h2>
            <div className="grid md:grid-cols-3  gap-">
                <PopularCourseCard />
                <PopularCourseCard />
                <PopularCourseCard />
            </div>
        </div>
    )
}

export default MostPopularCourses