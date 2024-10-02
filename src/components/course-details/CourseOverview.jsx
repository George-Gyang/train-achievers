import React from 'react'
import trainCard from "../../assets/jpg/training-img.jpg"
import { FaGlobeAmericas, FaRegCalendarAlt, FaRegEdit, FaRegPlayCircle } from 'react-icons/fa'
import { MdOutlineStar } from 'react-icons/md'
import { FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
// import { ViewCourseDetails } from './viewCourseDetails'
import { TfiTimer } from 'react-icons/tfi'
import DetailsOption from './DetailsOption'
import ViewCourseDetails from "./ViewCourseDetails"

const CourseOverview = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="md:flex px-2">
                    <div className="md:w-1/4 md:pr-5 mb-4">
                        <div className='mb-4'>
                            <div className='flex items-center mb-2 font-bold'>
                                <span className="mr-3">
                                    <TfiTimer />
                                </span>
                                <span> STUDY HOURS</span>
                            </div>
                            <p className="text-gray-500">Approx. 360 hours. These can be divided however you’d like over a 12-month period.</p>
                        </div>
                        <div className='mb-4'>
                            <div className='flex items-center mb-2 font-bold'>
                                <span className="mr-3">
                                    <FaRegCalendarAlt />
                                </span>
                                <span> COURSE DURATION</span>
                            </div>
                            <p className="text-gray-500">Your hours can be divided over a 12-month period. The course can be completed in a matter of months or over the course of a year. Most learners will complete this course in 5-9 months.</p>
                        </div>
                        <div className='mb-4'>
                            <div className='flex items-center mb-2 font-bold'>
                                <span className="mr-3">
                                    <FaRegEdit />
                                </span>
                                <span> ASSESSMENT</span>
                            </div>
                            <p className="text-gray-500">Assignments and observation in practice.</p>
                        </div>
                        <div className='mb-4'>
                            <div className='flex items-center mb-2 font-bold'>
                                <span className="mr-3">
                                    <FaGlobeAmericas />
                                </span>
                                <span> COURSE TYPE</span>
                            </div>
                            <p className="text-gray-500">This is an online course.</p>
                        </div>
                        <div className="">
                            <button className='btn custom_btn flex items-center secondary_bg py-2 hover:bg-gray-800 wfull font-semibold text-white mr-3'> <span className="me-2"><FaRegPlayCircle /> </span> Watch Course Video</button>
                        </div>
                    </div>
                    <div className="md:w-2/4 md:px-5">
                        <div className="mb-4 bg-slate-100	 text-gray-500 rounded p-3">
                            <div className="flex mb-3">
                                <span className="mr-2 primary_color"> <MdOutlineStar size={20} /> </span>
                                <span>Earn a Level 4 Certificate that demonstrates your expertise and commitment to excellence.</span>
                            </div>
                            <div className="flex mb-3">
                                <span className="mr-2 primary_color"> <MdOutlineStar size={20} /> </span>
                                <span>Trust in our proven track record, with thousands of learners successfully completing this regulated course.</span>
                            </div>
                        </div>
                        <div className="mb-4 navy_bg p-3 text-white rounded">
                            <p>Designed to help prepare trainee teachers to teach in a wide range of contexts.
                            </p>
                        </div>
                        <div className="text-gray-500 my-4">
                            <p className='mb-2'>
                                If you’re already involved in teaching or are set to start a teaching position, the Level 4 Certificate in Education and Training (CET) will help you to evaluate, hone and improve upon your existing skills.
                            </p>
                            <p className='mb-3'>
                                At <Link className='primary_color font-semibold underline hover:text-blue-950'>CTC Training</Link> , we provide a flexible Level 4 Certificate in Education and Training online course, complete with quality course content and a tutor to support you. The level 4 course is instant enrolment, meaning you can enrol today and start learning immediately.
                            </p>
                            <p className='mb-2'>
                                We also provide online training for the
                                <Link className='primary_color font-semibold underline hover:text-blue-950'> Level 3 Award </Link> and the
                                <Link className='primary_color font-semibold underline hover:text-blue-950'> Level 5 Diploma </Link>  in Education and Training.
                            </p>
                            <p className='mb-2'>
                                Did you know we have courses for
                                <Link className='primary_color font-semibold underline hover:text-blue-950'> Assessment Training  </Link> and
                                <Link className='primary_color font-semibold underline hover:text-blue-950'> IQA Training</Link>?  See everything we have to offer on our
                                <Link className='primary_color font-semibold underline hover:text-blue-950'> course page. </Link>
                            </p>
                        </div>
                        <div className="mb-4 bg-slate-100	 text-gray-500 rounded p-3">
                            <p className="text-blue-950 mb-3">Not sure if this is the right course for you?
                            </p>
                            <button className='btn custom_btn primary_bg py-2 hover:bg-sky-400 wfull font-semibold text-white'> Try our suitability checker</button>
                        </div>
                        <div className="mb-5 text-gray-500">
                            <h3 className="secondary_color mb-4 font-medium text-3xl">Is the Level 4 CET right for me?</h3>
                            <p className="mb-3">This course is ideal for anyone who has completed the level 3 course and is looking to expand on their knowledge and skills. The level 4 course will prepare trainee teachers to teach in a wide range of contexts.</p>
                            <p className="mb-3">You do not need to be currently teaching or in education training to complete this qualification, but you will be required to log at least 30 hours of teaching practice in a real classroom by the end of the qualification. Most candidates opt to wait until they are in a placement before starting the course. A full list of the minimum requirements is detailed below in the FAQ section.</p>
                            <p className="mb-3">If you have any questions about the CET course and would like to speak to one of our tutors prior to booking your place, we’re happy to offer a free, no-obligation video consultation today.</p>
                            <button className='btn custom_btn primary_bg py-2 my-3 hover:bg-sky-400 wfull font-semibold text-white'> Book Video Consultation</button>
                        </div>
                        <div className="mb-5 text-gray-500">
                            <h3 className="secondary_color mb-4 font-medium text-3xl">CTLLS Online Training Course</h3>
                            <p className="mb-3">This particular level was previously known as a CTLLS online training course (Certificate in Teaching in the Lifelong Learning Sector). If you have completed this level before, you will also be able to take our Level 5 course to further your knowledge.</p>
                            <p className="mb-3">This course is ideal for those looking to go beyond a foundation level, perhaps already in a private training company role or an educational facility. You can learn more about this course in our brochure or by browsing the content below.</p>
                            <div className="flex">
                                <button className='btn custom_btn secondary_bg py-2  my-3 hover:bg-sky-400 wfull font-semibold text-white mr-3'>Download Brochure </button>
                                <button className='btn custom_btn flex items-center  primary_bg py-2 my-3 hover:bg-sky-400 wfull font-semibold text-white'> <span className="me-2"><FaRegPlayCircle /> </span> Watch Course Video</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/4">
                        <div className="rounded bg-gray-100 p-3 md:ml-8">
                            <div>
                                <img src={trainCard} className='' alt="" />
                            </div>
                            <div className="text-gray-500 my-4">
                                <h6 className='mb-3 font-semibold'>Awarding Body: Training Qualifications UK (TQUK)</h6>
                                <h6 className='mb-3 font-semibold'>Qualification Number: 601/2136/1</h6>
                                <p className="">TQUK are an Ofqual regulated Awarding Organisation. This guarantees that all of their qualifications conform to a high standard.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-2">
                <div className="flex justify-center">
                    <div className="md:w-[80%]">
                        <div className="md:flex items-center">
                            <div className="rounded mb-5 text-white md:w-[60%]">
                                <div className="bg-gray-900		rounded-t-2xl p-3">
                                    <h1 className="text-center my-2 font-semibold text-xl"> ONE TIME PURCHASE</h1>
                                </div>
                                <div className="navy_bg p-4">
                                    <div className="mb-4">
                                        <p className="text-center mb-3">A simple one-off payment and you're <br /> ready to start learning.</p>
                                        <p className="display-5 secondary_color text-center fw-bolder">£495</p>
                                        <p className="text-center text-gray-500">inc. VAT</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="md:w-[70%] text-gray-400">
                                            <div className="flex mb-3">
                                                <span className="mr-3 mt-2"> <FaCheck /> </span>
                                                <span>First-hand experience of in classroom teaching
                                                </span>
                                            </div>
                                            <div className="flex mb-3">
                                                <span className="mr-3 mt-2"> <FaCheck /> </span>
                                                <span>Enhances teaching skills and career prospects
                                                </span>
                                            </div>
                                            <div className="flex mb-3">
                                                <span className="mr-3 mt-2"> <FaCheck /> </span>
                                                <span>Mixture of online and in-person training
                                                </span>
                                            </div>
                                            <div className="flex mb-3">
                                                <span className="mr-3 mt-2"> <FaCheck /> </span>
                                                <span>Comprehensive grading, feedback and support from a real tutor
                                                </span>
                                            </div>
                                            <DetailsOption />
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-b-2xl transition duration-15 ease-in-out bg-blue-300 hover:bg-purple-400 flex justify-center p-3">
                                    <Link to={""} className=''>
                                        <p className="text-center my-2 text-lg font-semibold flex items-center justify-center"> START YOUR COURSE <BiChevronRight className='text-2xl ml-2' /> </p>
                                    </Link>
                                </div>
                            </div>
                            <div className="rounded md:w-[40%]">
                                <div className="border rounded-r-2xl">
                                    <h1 className="text-center border-bottom rounded-tr-2xl bg-gray-50 font-semibold text-xl p-3"> Monthly subscription</h1>
                                    <div className="p-3">
                                        <p className="text-center">Recurring monthly <br /> payments to split the cost.</p>
                                        <p className="text-center fs-3 fw-bold primary_color mb-3">£99.00</p>
                                        <p className="text-center text-sm text-slate-600 mb-3">per month for 5 months <br />inc. VAT</p>
                                    </div>
                                    <div className="rounded-b-2xl transition duration-15  bg-blue-300/100  p-1 ease-in-out hover:bg-purple-400 hover:text-white flex justify-center p-3">
                                        <Link to={""} className=''>
                                            <p className="text-center my-2 text-lg font-semibold flex items-center justify-center"> START YOUR COURSE <BiChevronRight className='text-2xl ml-2' /> </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center my-5 text-2xl">For help and assistance get in touch with us today on <b>0800 031 8503</b></p>
                    </div>
                </div>
                <div className="my-5 bg-slate-50 py-5 ">
                    <p className="text-center mb-5 primary_color font-semibold text-2xl">COURSE DETAILS</p>
                    <div className="md:flex gap">
                        <div className="md:w-[70%] ">
                            <ViewCourseDetails />
                            <div className="my-5">
                                <p className="text-lg font-medium text-center">Still have more questions about this course?                </p>
                                <p className=" text-center">Give our team a call on <span className="font-bold primary_color">0800 031 8503</span> and we'd be happy to help!</p>
                            </div>
                        </div>
                        <div className="md:w-[30%]">
                            <div className="">
                                <div className="rounded bg-gray-100 p-3 md:ml-8">
                                    <div>
                                        <img src={trainCard} className='' alt="" />
                                    </div>
                                    <div className="text-gray-500 my-4">
                                        <h6 className='mb-3 font-semibold'>Awarding Body: Training Qualifications UK (TQUK)</h6>
                                        <h6 className='mb-3 font-semibold'>Qualification Number: 601/2136/1</h6>
                                        <p className="">TQUK are an Ofqual regulated Awarding Organisation. This guarantees that all of their qualifications conform to a high standard.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseOverview