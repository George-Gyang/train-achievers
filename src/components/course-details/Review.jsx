import React from 'react'
import { FaStar } from 'react-icons/fa'
import image from "../../assets/svg/reviewsio-new.svg"
import { MdVerified } from 'react-icons/md'

const Review = () => {
    return (
        <div className='p-4 shadow rounded-lg'>
            <div className="flex mb-3">
                <div className='flex items-center'>
                    <div className="flex text-amber-400 my-3 mr-3">
                        <span className="mr-1">
                            <FaStar size={20} />
                        </span>
                        <span className="mr-1">
                            <FaStar size={20} />
                        </span>
                        <span className="mr-1">
                            <FaStar size={20} />
                        </span>
                        <span className="mr-1">
                            <FaStar size={20} />
                        </span>
                        <span className="mr-1">
                            <FaStar size={20} />
                        </span>
                    </div>
                    <div className="w-[50%]">
                        <img src={image} alt="" width={"100px"} className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="text-sm text-slate-500">
                <p>I recently studied and passed the Level 3 Award in Education and Training with CTC and I cannot fault them. The online resources were excellent and my...</p>
                <div className="flex">
                    <span> <MdVerified /> </span>
                    <span>Julie -</span>
                </div>
            </div>
        </div>
    )
}

export default Review