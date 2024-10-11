import React, { useState } from 'react'
import MaterialCard from '../components/general/Card'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import { IoMdTime } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const CPDOnlineCourse = () => {
    const [hoverAction, setHoverAction] = useState(false);
    const navigate = useNavigate();
    return (
        <MaterialCard>
            <div onMouseOver={() => setHoverAction(true)}
                onMouseLeave={() => setHoverAction(false)}
                className="p-2">
                <div className="overflow-hidden">
                    <img
                        src="https://www.care-learning.com/images/course/imaged57fcb0d7b5af9a3e4af48d072973d2cbd8685ac.jpg"
                        alt=""
                        className={`w-full rounded transition-all duration-300 ${hoverAction ? "scale-105" : ""} `} />
                </div>
                <div className="py-3">
                    <p>Self-Care and Personal Wellbeing</p>
                    <div className="flex justify-betwee mt-3">
                        <button className='btn border mr-2 flex items-center text-sm'> <MdOutlineLibraryBooks className='mr-1 text-purple-600/30' /> 11 chapters</button>
                        <button className='btn border flex items-center text-sm'> <IoMdTime className='mr-1 text-purple-600/30' /> 30 mins</button>
                    </div>
                    <button onClick={() => navigate("/cpd_course/id")} className='btn w-full bg-purple-600/30 mt-3 custom_btn hover:bg-purple-500 hover:text-white text-purple-600'>Start Training</button>
                </div>
            </div>
        </MaterialCard >
    )
}

export default CPDOnlineCourse