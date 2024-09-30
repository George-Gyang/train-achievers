import React from 'react'
import { FaStar } from 'react-icons/fa'
import image from "../../assets/svg/reviewsio-new.svg"
import ReviewsComponent from './ReviewsComponent'

const UserReviews = () => {
    return (
        <div>
            <div className="container pt-16">
                <div className="md:flex mb-5">
                    <div className="md:w-[20%] p-4">
                        <div className="md:block flex justify-center">
                            <div className="md:w-full">
                                <div>
                                    <div className="flex text-amber-400 my-3">
                                        <span className="mr-2 ">
                                            <FaStar size={25} />
                                        </span>
                                        <span className="mr-2 ">
                                            <FaStar size={25} />
                                        </span>
                                        <span className="mr-2 ">
                                            <FaStar size={25} />
                                        </span>
                                        <span className="mr-2 ">
                                            <FaStar size={25} />
                                        </span>
                                        <span className="mr-2 ">
                                            <FaStar size={25} />
                                        </span>
                                    </div>
                                    <div className="flex justify-between mb-4">
                                        <div className="text-slate-500">
                                            <p className="text-sm">Rated</p>
                                            <p className="text-3xl text-black font-bold">4.8</p>
                                            <p className="text-sm">out of 5</p>
                                        </div>
                                        <div className="text-slate-500">
                                            <p className="text-sm">Based on</p>
                                            <p className="text-3xl text-black font-bold">308</p>
                                            <p className="text-sm">Reviews</p>
                                        </div>
                                    </div>
                                    <div className="pr-5">
                                        <img src={image} alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[80%] my-4">
                        <ReviewsComponent />
                    </div>
                </div>
            </div>
            <div className="bg-slate-50 py-20 px-4">
                <div className="container flex justify-center">
                    <div className="w-[90%]">
                        <div className="md:flex">
                            <div className="md:w-[60%] text-slate-500 mb-5">
                                <h3 className='primary_color font-semibold h3'>Who is the Level 4 Certificate in Education and Training course for?</h3>
                                <p className='mb-4'>
                                    This qualification is designed to sharpen your skills as a teacher or trainer. It builds upon much of the knowledge provided in the Level 3 Award in Education and Training. However, unlike the AET, the Level 4 Certificate requires learners to commit to at least 30 hours of teaching time in a classroom. The qualification is suitable for those who are in or are about to go into a teaching placement.
                                </p>
                                <div className=' text-center'>
                                    <button className="custom_btn p-3 bg-purple-400 hover:bg-purple-500 text-lg font-medium text-white btn uppercase">Book Now</button>
                                </div>
                            </div>
                            <div className="md:w-[40%] p-2">
                                <div className="bg-slate-200 rounded-lg p-4 mb-3">
                                    <p className="font-semibold mb-3">Not sure if this is the right course for you?</p>
                                    <div className="">Through a series of simple questions, our checker will help you find out whether this is the course you will suitable for</div>
                                    <div className=' text-center mt-4'>
                                        <button className="custom_btn p-3 bg-sky-400 hover:bg-sky-500 font-medium text-white btn">Try our suitability checker</button>
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

export default UserReviews