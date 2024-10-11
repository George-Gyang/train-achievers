import React, { useContext, useEffect } from 'react'
import Card from '../components/general/Card'
import MaterialCard from '../components/general/Card'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa6'
import MyProfile from '../CPD/MyProfile'
import CPDCourseSlider from '../CPD/CPDCourseSlider'
import { ResourceContext } from '../components/context/ResourceContext'
import { RiGraduationCapLine } from 'react-icons/ri'
import CPDCategorySlider from '../CPD/CPDCategorySlider'
import CPDOnlineCourse from '../CPD/CPDOnlineCourse'
import { CiFilter } from 'react-icons/ci'
import FilterDropdown from '../components/general/FilterDropdown'
import { BiChevronDown } from 'react-icons/bi'

const CPDCourses = () => {
    const { setActiveNav } = useContext(ResourceContext);
    useEffect(() => {
        setActiveNav("CPD Courses")
        window.scrollTo(0, 0);
    }, []);

    const courseTag = [
        {
            id: 1,
            tag: "Course Tags"
        },
        {
            id: 2,
            tag: "Nurses"
        },
        {
            id: 3,
            tag: "Haalth Care Assistance"
        },
        {
            id: 4,
            tag: "ICU Nurse"
        },
    ]
    const courseDuration = [
        {
            id: 1,
            tag: "Course Duration"
        },
        {
            id: 2,
            tag: "1 hour"
        },
        {
            id: 3,
            tag: "30 mins"
        },
        {
            id: 4,
            tag: "20 - 25 mins"
        },
        {
            id: 5,
            tag: "10 mins"
        },
    ]

    return (
        <div className='bg-gray-50 py-5'>
            <div className="pb-5 bg-white">
                <div className="container">
                    <div className="md:flex fs-5">
                        <div className="md:w-[30%]">
                            <div className="md:pe-4">
                                <h3 className="mb-4 display-6 font-normal">Online Healthcare Courses</h3>
                                <p>Explore our courses, where specialized learning meets your career needs. From nursing essentials to healthcare management, our curated courses ensure targeted development for professionals like you</p>
                                <div className="flex mt-5">
                                    <span className='mr-3 text-light-blue-400'> <RiGraduationCapLine size={30} /> </span>
                                    <span><b>50+ </b> Certified Courses</span>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[70%]">
                            <CPDCategorySlider />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="rounded p-4 pb-5">
                    <div className="md:flex items-start justify-between mb-3">
                        <div className="">
                            <div className="md:flex p-4 bg-white rounded-3 shadow">
                                <div className="flex text-xl items-center border-r md:pr-4">
                                    <CiFilter className='primary_color' size={30} />
                                    <span className="ml-2 font-medium">Filter</span>
                                </div>
                                <div className="flex md:w-[250px] text-xl items-center justify-between border-r md:px-4 md:mx-4">
                                    <FilterDropdown filter={courseTag} />
                                    <BiChevronDown className='primary_color' size={30} />
                                </div>
                                <div className="flex md:w-[250px] text-xl items-center justify-between border-r md:px-4 md:mx-4">
                                    <FilterDropdown filter={courseDuration} />
                                    <BiChevronDown className='primary_color' size={30} />
                                </div>
                            </div>
                        </div>
                        {/* <button className="btn px-3  hover:bg-purple-500/50 border rounded-full">view All</button> */}
                    </div>
                    {/* <CPDCourseSlider /> */}
                    <div className="grid md:grid-cols-4 gap-4">
                        <CPDOnlineCourse />
                        <CPDOnlineCourse />
                        <CPDOnlineCourse />
                        <CPDOnlineCourse />
                        <CPDOnlineCourse />
                        <CPDOnlineCourse />
                        <CPDOnlineCourse />
                        <CPDOnlineCourse />
                        <CPDOnlineCourse />
                        <CPDOnlineCourse />
                        <CPDOnlineCourse />
                        <CPDOnlineCourse />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CPDCourses