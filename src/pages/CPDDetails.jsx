import React from 'react'
import { LiaCertificateSolid } from 'react-icons/lia'
import AllDetails from '../components/course-details/AllDetails'

const CPDDetails = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="md:flex ">
                    <div className=" mb-4 md:w-1/2">
                        <div className="pe-md-5">
                            <p className="h3 text-dark mb-4">First Aid</p>
                            <p>
                                This comprehensive First Aid course covers essential skills for responding to medical emergencies effectively. Topics include scene safety, managing bleeding, recognizing heart attacks and allergic reactions, and treating injuries like burns and fractures. By the end of the course, participants will be equipped to provide immediate assistance in various emergency situations, promoting safety and well-being. Please Note : This course does not cover basic life support or CPR.
                            </p>
                            <div className="flex items-center mt-3">
                                <button className='btn px-3 primary_bg custom_btn fs-5 text-white hover:bg-light-blue-300'>Start Learning</button>
                                <div className="ml-4 flex">
                                    <span className="mr-3 secondary_color"><LiaCertificateSolid size={25} /></span>
                                    <div className="flex fs-5">
                                        Course Fee <span className='primary_color font-medium ml-2'>£0.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" mb-4 md:w-1/2">
                        <div className='md:h-[300px] ps-md-5'>
                            <img
                                className='rounded-4 w-100 h-100'
                                src="https://www.care-learning.com/images/course/imaged57fcb0d7b5af9a3e4af48d072973d2cbd8685ac.jpg"
                                alt="" />
                        </div>
                    </div>
                </div>
                <div className="">
                    <AllDetails />
                </div>
            </div>
        </div>
    )
}

export default CPDDetails