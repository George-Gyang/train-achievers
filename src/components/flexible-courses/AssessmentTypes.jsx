import React from 'react'
import eduImg from "../../assets/svg/icon-coaching.svg"
import { SiHtmlacademy } from 'react-icons/si'
import { IoChevronForwardCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { GiTeacher } from 'react-icons/gi'
import { FaFirstAid } from 'react-icons/fa'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { LiaClipboardListSolid } from 'react-icons/lia'
import iconOne from "../../assets/svg/icon-7.svg"
import iconTwo from "../../assets/svg/icon-8.svg"
import iconThree from "../../assets/svg/icon-9.svg"
import iconFour from "../../assets/svg/icon-10.svg"
const AssessmentTypes = () => {
    return (
        <div>
            <div className="">
                <div className="container">
                    <p className='fs-3 text-center primary_color fw-bold'>Our Courses
                    </p>
                    <div className="d-flex justify-content-center">
                        <p className='text-center col-md-8 fs-5 text-secondary'>To make things easy, we've categorised our courses so that you can jump to the ones most relevant to your profession or your career goals.</p>
                    </div>
                    <div className="my-4">
                        <div className="row py-5 row-gap-3">
                            <div className="col-md col-12">
                                <div className="h-100 custom_btn navy_bg text-white p-3">
                                    <div className="d-flex flex-md-column justify-content-between align-items-md-start align-items-center">
                                        <div className='primary_color'>
                                            <SiHtmlacademy size={60} />
                                        </div>
                                        <Link to={""} className="d-flex mt-0 mt-md-5 align-items-center justify-content-between col-10 col-md-12 hover_primary_color fw-bold fs-5 nav-link">
                                            <p cl>Assessment Training</p>
                                            <p className='primary_color ms-3'>
                                                <IoChevronForwardCircleOutline size={25} />
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md col-12">
                                <div className="h-100 custom_btn navy_bg text-white p-3">
                                    <div className="d-flex flex-md-column justify-content-between align-items-md-start align-items-center">
                                        <div className='primary_color'>
                                            <GiTeacher size={60} />
                                        </div>
                                        <Link to={""} className="d-flex mt-0 mt-md-5 align-items-center justify-content-between col-10 col-md-12 hover_primary_color fw-bold fs-5 nav-link">
                                            <p cl>Coaching & Mentoring Training</p>
                                            <p className='primary_color ms-3'>
                                                <IoChevronForwardCircleOutline size={25} />
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md col-12">
                                <div className="h-100 custom_btn navy_bg text-white p-3">
                                    <div className="d-flex flex-md-column justify-content-between align-items-md-start align-items-center">
                                        <div className='primary_color'>
                                            <FaFirstAid size={60} />
                                        </div>
                                        <Link to={""} className="d-flex mt-0 mt-md-5 align-items-center justify-content-between col-10 col-md-12 hover_primary_color fw-bold fs-5 nav-link">
                                            <p cl>First Aid Training</p>
                                            <p className='primary_color ms-3'>
                                                <IoChevronForwardCircleOutline size={25} />
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md col-12">
                                <div className="h-100 custom_btn navy_bg text-white p-3">
                                    <div className="d-flex flex-md-column justify-content-between align-items-md-start align-items-center">
                                        <div className='primary_color'>
                                            <MdOutlineHealthAndSafety size={60} />
                                        </div>
                                        <Link to={""} className="d-flex mt-0 mt-md-5 align-items-center justify-content-between col-10 col-md-12 hover_primary_color fw-bold fs-5 nav-link">
                                            <p cl>Health & Safety</p>
                                            <p className='primary_color ms-3'>
                                                <IoChevronForwardCircleOutline size={25} />
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md col-12">
                                <div className="h-100 custom_btn navy_bg text-white p-3">
                                    <div className="d-flex flex-md-column justify-content-between align-items-md-start align-items-center">
                                        <div className='primary_color'>
                                            <LiaClipboardListSolid size={60} />
                                        </div>
                                        <Link to={""} className="d-flex mt-0 mt-md-5 align-items-center justify-content-between col-10 col-md-12 hover_primary_color fw-bold fs-5 nav-link">
                                            <p cl>IQA Training</p>
                                            <p className='primary_color ms-3'>
                                                <IoChevronForwardCircleOutline size={25} />
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className='mb-4 ps-3'>
                                <img src={iconOne} width="80" className='img-fluid' alt="" />
                            </div>
                            <div className="">
                                <div className=" ">
                                    <p className='border-start border-4 primary_border ps-3 secondary_color fw-semibold'>FLEXIBLE ONLINE LEARNING</p>
                                    <p style={{ color: "#8c8e93" }} className="ps-3">Learn at your own pace online, giving you the freedom to fit learning around your lifestyle</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='mb-4 ps-3'>
                                <img src={iconTwo} width="80" className='img-fluid' alt="" />
                            </div>
                            <div className="">
                                <div className=" ">
                                    <p className='border-start border-4 primary_border ps-3 secondary_color fw-semibold'>TRAINING SPECIALIST</p>
                                    <p style={{ color: "#8c8e93" }} className="ps-3">We have training specialists on hand to help guide you through your course, so you’re never alone.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='mb-4 ps-3'>
                                <img src={iconThree} width="80" className='img-fluid' alt="" />
                            </div>
                            <div className="">
                                <div className=" ">
                                    <p className='border-start border-4 primary_border ps-3 secondary_color fw-semibold'>PROVEN TRACK RECORD</p>
                                    <p style={{ color: "#8c8e93" }} className="ps-3">We’ve helped countless people achieve their goals with our range of courses since 2002.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='mb-4 ps-3'>
                                <img src={iconFour} width="80" className='img-fluid' alt="" />
                            </div>
                            <div className="">
                                <div className=" ">
                                    <p className='border-start border-4 primary_border ps-3 secondary_color fw-semibold'>EXPERT ADVICE</p>
                                    <p style={{ color: "#8c8e93" }} className="ps-3">Not sure which course is right for you? Our expert team are always on hand to offer advice.
</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssessmentTypes