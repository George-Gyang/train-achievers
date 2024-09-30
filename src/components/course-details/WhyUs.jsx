import React from 'react'
import AssessmentTypes from '../flexible-courses/AssessmentTypes'
import WhyUsCard from './WhyUsCard'

const WhyUs = () => {
    return (
        <div className=' container my-5'>
            <h4 className=" primary_color text-center font-semibold text-3xl">Why Choose CTC?</h4>
            <div className="my-3 flex justify-center">
                <div className="md:w-[80%]">
                    <p className="text-center text-gray-500">
                        Our Level 4 Certificate in Education and Training offers a unique blend of online learning and in-person teaching experience. Gain first-hand experience teaching real students in actual classrooms while enhancing your teaching skills and career prospects. Plus, with comprehensive grading, feedback and support from a dedicated tutor, you'll have the guidance you need every step of the way.
                    </p>
                </div>
            </div>
            <WhyUsCard />
            <div className=' text-center'>
                <button className="custom_btn p-3 bg-sky-300 hover:bg-sky-400 text-lg font-medium text-white btn uppercase">why chose ctc</button>
            </div>
        </div>
    )
}

export default WhyUs