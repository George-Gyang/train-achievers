import React, { useContext, useEffect } from 'react'
import PopularCourseCard from './PopularCourseCard'
import { ResourceContext } from '../context/ResourceContext'

const MostPopularCourses = () => {
    const { getAllCourse, setGetAllCourse } = useContext(ResourceContext)
    useEffect(() => {
        setGetAllCourse((prev) => {
            return {
                ...prev, isDataNeeded: true
            }
        })
    }, [])

    console.log(getAllCourse)
    return (
        <div>
            {/* <h2 className="text-center h2 font-semibold my-10">Most Popular Course</h2> */}
            <div className="grid md:grid-cols-3  gap-4">
                {getAllCourse.data?.map((course)=>(
                <PopularCourseCard key={course.id} course={course} />
                ))}
                {/* <PopularCourseCard />
                <PopularCourseCard /> */}
            </div>
        </div>
    )
}

export default MostPopularCourses