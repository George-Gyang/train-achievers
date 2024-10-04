import React, { useContext, useEffect } from 'react'
import Card from '../components/general/Card'
import MaterialCard from '../components/general/Card'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa6'
import MyProfile from '../CPD/MyProfile'
import CPDCourseSlider from '../CPD/CPDCourseSlider'
import { ResourceContext } from '../components/context/ResourceContext'

const CPDCourses = () => {
    const { setActiveNav } = useContext(ResourceContext);
    useEffect(() => {
        setActiveNav("CPD Courses")
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='bg-gray-50 py-5'>
            <div className="pb-5">
                <MyProfile />
            </div>
            <div className="container my-5">
                <div className="bg-white rounded p-4 pb-5">
                    <div className="flex items-start justify-between">
                        <div className="">
                            <h2 className="h2">Courses</h2>
                            <p>Discover the best online learning for healthcare professionals</p>
                        </div>
                        <button className="btn px-3  hover:bg-purple-500/50 border rounded-full">view All</button>
                    </div>
                    <CPDCourseSlider />
                </div>
            </div>
        </div>
    )
}

export default CPDCourses