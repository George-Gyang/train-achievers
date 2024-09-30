import React from 'react'
import CourseUnit from './CourseUnit'

const CourseContent = () => {
    return (
        <div className='bg-slate-100 '>
            <div className='container py-5'>
                <div className="md:flex text-lg p-3 justify-center">
                    <div className="md:w-[70%]">
                        <div className="">
                            <h3 className='text-3xl font-semibold mb-4'>Level 4 CET Course Content
                            </h3>
                        </div>
                        <div className="text-slate-600 mb-5">
                            <CourseUnit content={
                                {
                                    unit: "UNIT No 1",
                                    title: "Understand roles, responsibilities and relationships in education and training.",
                                    summary: "This unit explores the various roles within education and training, the responsibilities associated with these roles and the importance of building effective professional relationships.",
                                }
                            } />
                            <CourseUnit content={
                                {
                                    unit: "UNIT No 2",
                                    title: "Planning to meet the needs of learners in education and training.",
                                    summary: "This unit focuses on understanding learners’ needs and how to plan inclusive learning experiences that cater to diverse learning styles, abilities and backgrounds.",
                                }
                            } />
                            <CourseUnit content={
                                {
                                    unit: "UNIT No 3",
                                    title: "Delivering education and training.",
                                    summary: "This unit covers the practical aspects of delivering engaging and effective learning sessions, including communication skills, classroom management techniques and strategies for creating a positive learning environment.",
                                }
                            } />
                            <CourseUnit content={
                                {
                                    unit: "UNIT No 4",
                                    title: "Assessing learners in education and training.",
                                    summary: "This unit addresses the principles and practices of assessment in education and training, including designing and using assessment tools, providing feedback and using assessment data to inform teaching and learning.",
                                }
                            } />
                            <CourseUnit content={
                                {
                                    unit: "UNIT No 5",
                                    title: "Using resources for education and training.",
                                    summary: "This unit focuses on selecting, developing and using appropriate resources to support learning.",
                                }
                            } />
                            <CourseUnit content={
                                {
                                    unit: "UNIT No 6",
                                    title: "Developing, using and organising resources in a specialist area.",
                                    summary: "This unit builds on Unit 5 by focusing on creating and managing resources specific to a particular subject area or specialisation, taking into account the unique requirements of that field.",
                                }
                            } />
                        </div>
                        <div className="text-center">
                            <div className=' text-center'>
                                <button className="custom_btn p-3 bg-purple-400 hover:bg-purple-500 text-lg font-medium text-white btn uppercase">why chose ctc</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseContent