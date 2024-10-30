import React, { useEffect, useState } from 'react'
import nursingImg from "../assets/jpg/nursing.jpeg"
import { FaLongArrowAltRight } from 'react-icons/fa'
import { BsStack } from 'react-icons/bs'
import { FaArrowRight, FaCertificate, FaCheck, FaClock } from 'react-icons/fa6'
import { Link, useLocation, useParams } from 'react-router-dom'
import GroupEnquirySection from '../components/general/GroupEnquirySection'
import CourseTable from '../components/physical-course/CourseTable'
import { BASE_URL } from '../components/utils/base'

const PhysicalCourseDetails = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const [data, setData] = useState();
    const { course } = state;
    useEffect(() => {
        // setActiveNav("Career")
        window.scrollTo(0, 0);
    }, []);

    const deleteFunc = async () => {

        // setGetAllJobs((prev) => {
        //     return {
        //         ...prev, isDataNeeded: false
        //     }
        // })
        // setIsDeleting(true)
        const params = {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                // 'Authorization': `Bearer ${userCredentials.token}`
            },
        }
        try {
            const response = await fetch(`${BASE_URL}/schedule/${id}`, params);
            if (response.ok) {
                const data = await response.json();

                setData(data)
                // setGetAllJobs((prev) => {
                //     return {
                //         ...prev, isDataNeeded: true
                //     }
                // })
                // onSuccess({
                //     message: "Message",
                //     success: data.message
                // })
                // setIsDeleting(false)
            }
        } catch (error) {
            if (error.response) {
                // onSuccess({
                //     message: "Message",
                //     success: error.response.message
                // })
            } else {
                // onSuccess({
                //     message: "Message",
                //     success: error.message
                // })
            }
            // setIsDeleting(false)
        }
    }
    useEffect(() => {
        deleteFunc();
    }, [])

    return (
        <div>
            <div className='secondary_bg py-12'>
                <div className="container md:px-16">
                    <div className="row text-white mb-5">
                        <div className="col-md-7">
                            <div className="flex mb-5">
                                <div className="bg-white/[0.1] flex items-center mr-2 p-1 px-3 rounded-full">
                                    <BsStack />
                                    <span className='ml-1'>Level 2</span>
                                </div>
                                <div className="bg-white/[0.1] flex items-center mr-2 p-1 px-3 rounded-full">
                                    <FaClock />
                                    <span className='ml-1'>3 Hours Duration</span>
                                </div>
                                <div className="bg-white/[0.1] flex items-center mr-2 p-1 px-3 rounded-full">
                                    <FaCertificate />
                                    <span className='ml-1'>1 Year Certificate</span>
                                </div>
                            </div>
                            <h1 className="h2 mb-4">{course.courseTitle}  </h1>
                            <p className='md:w-[80%] '>{course.summary}</p>
                            <button className='btn font-semibold px-6 py-3 custom_btn bg-purple-600 hover:bg-purple-500 mt-5 text-white flex items-center'>Make a Group Enquiry <FaLongArrowAltRight className='ml-2 hidden md:block' /> </button>
                        </div>
                        <div className="col-md-5 flex justify-center md:justify-end md:pr-16 ">
                            <div style={{ backgroundImage: `url(${course.file})`, backgroundSize: "cover" }} className="my-5 size-[200px] md:size-[300px] rounded-full">
                                {/* <img src={nursingImg} alt="" className="size-[200px] md:size-[300px] rounded-full" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-14">
                <div className="container md:px-12">
                    <div className="my-24">
                        <CourseTable data={data} />
                    </div>
                    <div className="md:flex">
                        <div className="md:w-[40%]">
                            <div className="mr-5 mb-5">
                                <h3 className="h3 font-bold">
                                    Gain the required skills
                                </h3>
                                <p>Our autism training course is designed to enhance the communication skills of staff who work or live with individuals with Autism.
                                </p>
                                <p>
                                    Through the course, participants will learn about the positive and negative effects of communication, and how it can impact others.
                                </p>
                                <p>
                                    <Link className='font-semibold flex items-center text-lg my-4 primary_color hover:underline'>
                                        <span>Make a Group Enquiry</span>
                                        <span className='ml-1'><FaArrowRight /></span>
                                    </Link>
                                </p>
                                <p>
                                    <Link className='font-semibold flex items-center text-lg my-4 primary_color hover:underline'>
                                        <span>Make an Individual Booking</span>
                                        <span className='ml-1'><FaArrowRight /></span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="md:w-[60%]">
                            <div className="mr-5 mb-5">
                                <div className="flex justify-between mb-5">
                                    <h3 className="h3 font-bold">
                                        Course Summary
                                    </h3>
                                    <button className="btn custom_btn font-semibold hover:bg-purple-600 text-white primary_bg">Download Course Summary</button>
                                </div>
                                <div className="my-6 grid md:grid-cols-2 gap-x-4">
                                    <p className='flex items-center mb-3'>
                                        <FaCheck className='mr-3 primary_color' />
                                        <span className='ml-1'>Discuss what is Autism</span>
                                    </p>
                                    <p className='flex items-center mb-3'>
                                        <FaCheck className='mr-3 primary_color' />
                                        <span className='ml-1'>Examine the Causes of Autism</span>
                                    </p>
                                    <p className='flex items-center mb-3'>
                                        <FaCheck className='mr-3 primary_color' />
                                        <span className='ml-1'>Examine the Implications on Behaviour</span>
                                    </p>
                                    <p className='flex items-center mb-3'>
                                        <FaCheck className='mr-3 primary_color' />
                                        <span className='ml-1'>Consider Independence & Quality of Life</span>
                                    </p>
                                    <p className='flex items-center mb-3'>
                                        <FaCheck className='mr-3 primary_color' />
                                        <span className='ml-1'>Examine the Causes of Autism</span>
                                    </p>
                                    <p className='flex items-center mb-3'>
                                        <FaCheck className='mr-3 primary_color' />
                                        <span className='ml-1'>Consider Sensory Perception</span>
                                    </p>
                                    <p className='flex items-center mb-3'>
                                        <FaCheck className='mr-3 primary_color' />
                                        <span className='ml-1'>Review widely used approaches</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GroupEnquirySection />
        </div>
    )
}

export default PhysicalCourseDetails