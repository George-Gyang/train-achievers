import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import review from "../assets/jpg/reviewsio-badge.jpg"
import { Link } from 'react-router-dom'
import CourseOverview from '../components/course-details/CourseOverview'
import WhyUs from '../components/course-details/WhyUs'
const CouseDetails = () => {
  const [isActive, setIsActive] = useState("overview")
  const toggleOption = (param) => setIsActive(param)

  return (
    <main className='poppins'>
      <div className="py-4 bg-gray-50 border">
        <Container>
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3">
              <h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold mb-0 primary_color">Level 4 Certificate in Education and Training (CTLLS)
              </h1>
            </div>
            <div className="md:w-1/3 flex items-center bg-gray-100 rounded p-3">
              <div className='mr-5'>
                <img src={review} alt="" width={100} className="" />
              </div>
              <div className="mr-5">
                <span className="text-xl xl:text-2xl text-navy-500 font-semibold block leading-none">4.5</span>
                <span className="block font-light text-xs xl:text-sm text-gray-900 mt-1">out of 5</span>
              </div>
              <div className="mr-5">
                <span className="text-xl xl:text-2xl text-navy-500 font-semibold block leading-none">400</span>
                <span className="block font-light text-xs xl:text-sm text-gray-900 mt-1">reviews</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="container lg:px-4 xl:px-6">
        <ul className="hidden text-xl lg:flex flex-col items-center lg:flex-row justify-between">
          <li className="inline-flex text-center w-full lg:w-auto ">
            <Link onClick={()=> toggleOption("overview")} className={`py-3 inline-block hover_primary_color w-full border-b lg:border-white lg:border-b-0 lg:border-t-4 border-gray-500 ${isActive === "overview"? "primary_color font-medium" : ""}`} to={""} >Course Overview</Link>
          </li>
          <li className="inline-flex text-center w-full lg:w-auto ">
            <Link onClick={()=> toggleOption("why-us")} className={`py-3 inline-block hover_primary_color w-full border-b lg:border-white lg:border-b-0 lg:border-t-4 border-gray-500 ${isActive === "why-us"? "primary_color font-medium" : ""}`} to={""} >Why Choose CTC?</Link>
          </li>
          <li className="inline-flex text-center w-full lg:w-auto ">
            <Link onClick={()=> toggleOption("overview")} className={`py-3 inline-block hover_primary_color w-full border-b lg:border-white lg:border-b-0 lg:border-t-4 border-gray-500 ${isActive === "why-us"? "primary_color font-medium" : ""}`} to={""} >Course Content</Link>
          </li>
          <li className="inline-flex text-center w-full lg:w-auto ">
            <Link onClick={()=> toggleOption("overview")} className={`py-3 inline-block hover_primary_color w-full border-b lg:border-white lg:border-b-0 lg:border-t-4 border-gray-500 ${isActive === "why-us"? "primary_color font-medium" : ""}`} to={""} >User Reviews</Link>
          </li>
          <li className="inline-flex text-center w-full lg:w-auto ">
            <Link onClick={()=> toggleOption("overview")} className={`py-3 inline-block hover_primary_color w-full border-b lg:border-white lg:border-b-0 lg:border-t-4 border-gray-500 ${isActive === "why-us"? "primary_color font-medium" : ""}`} to={""} >FAQs</Link>
          </li>
          <li className="inline-flex text-center w-full lg:w-auto ">
            <Link onClick={()=> toggleOption("overview")} className={`py-3 inline-block hover_primary_color w-full border-b lg:border-white lg:border-b-0 lg:border-t-4 border-gray-500 ${isActive === "why-us"? "primary_color font-medium" : ""}`} to={""} >Our Process</Link>
          </li>
          <li className="inline-flex text-center w-full lg:w-auto ">
            <Link className="btn py-3 inline-block self-center my-3 px-4 mx-auto lg:mx-0 primary_bg text-white hover:bg-blue-900 font-bold custom_btn" to={""} >Book Now</Link>
          </li>
        </ul>
      </div>
      <hr />
      {isActive === "overview" && <CourseOverview />}
      {isActive === "why-us" && <WhyUs />}

      <hr />
    </main>
  )
}

export default CouseDetails