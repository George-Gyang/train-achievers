import React from 'react'
import iconOne from "../../assets/svg/icon-7.svg"
import iconTwo from "../../assets/svg/icon-8.svg"
import iconThree from "../../assets/svg/icon-9.svg"
import iconFour from "../../assets/svg/icon-10.svg"

const WhyUsCard = () => {
    return (
        <div>
            <div className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className='mb-4 ps-3'>
                                <img src={iconOne} width="80" className='img-fluid' alt="" />
                            </div>
                            <div className="">
                                <div className=" ">
                                    <p className=' border-l-4 primary_border ps-3 secondary_color uppercase fw-semibold'>First-hand experience of in classroom teaching</p>
                                    <p style={{ color: "#8c8e93" }} className="ps-3">Teach real students in a real classrooms</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='mb-4 ps-3'>
                                <img src={iconTwo} width="80" className='img-fluid' alt="" />
                            </div>
                            <div className="">
                                <div className=" ">
                                    <p className='border-l-4  primary_border ps-3 secondary_color uppercase fw-semibold'>Enhances teaching skills and career prospects</p>
                                    <p style={{ color: "#8c8e93" }} className="ps-3">Accelerate your career by learning crucial teaching skills</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='mb-4 ps-3'>
                                <img src={iconThree} width="80" className='img-fluid' alt="" />
                            </div>
                            <div className="">
                                <div className=" ">
                                    <p className='border-l-4  primary_border ps-3 secondary_color uppercase fw-semibold'>Mixture of online and in-person training</p>
                                    <p style={{ color: "#8c8e93" }} className="ps-3">Enjoy the best of both worlds with online learning and in-person teaching</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='mb-4 ps-3'>
                                <img src={iconFour} width="80" className='img-fluid' alt="" />
                            </div>
                            <div className="">
                                <div className=" ">
                                    <p className='border-l-4  primary_border ps-3 secondary_color upprcase fw-semibold'>Comprehensive grading, feedback and support from a real tutor</p>
                                    <p style={{ color: "#8c8e93" }} className="ps-3">Get support every step of the way
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

export default WhyUsCard