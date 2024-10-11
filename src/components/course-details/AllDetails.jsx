import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CourseOverview from './CourseOverview'
import WhyUs from './WhyUs'
import CourseContent from './CourseContent'
import UserReviews from './UserReviews'
import { CourseFAQ } from './CourseFAQ'
const AllDetails = () => {
  const [isActive, setIsActive] = useState("overview")
  const toggleOption = (param) => setIsActive(param)
  // const [isSticky, setIsSticky] = useState(false);
  // const [isAtTop, setIsAtTop] = useState(true);
  
  useEffect(() => {
    // setActiveNav("Career")
    window.scrollTo(0, 0);
}, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsSticky(window.scrollY
  //       > 50);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const element = document.getElementById('my_element');
  //     const rect = element.getBoundingClientRect();
  //     setIsAtTop(rect.top <= 0);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className='poppins'>
      <div className="container lg:px-4 xl:px-6">
        {/* {isAtTop && <p id='my_element'>Element is at the top!</p>} */}
        {/* <div className={`sticky_nav ${isSticky ? 'sticky_position' : ''}`}> */}
        <ul className="hidden sticky_element z-50 text-xl lg:flex flex-col items-center lg:flex-row justify-between">
          <li className="inline-flex text-center w-full lg:w-auto ">
            <Link onClick={() => toggleOption("overview")} className={`py-3 inline-block hover_primary_color w-full border-b lg:border-white lg:border-b-0 lg:border-t-4 border-gray-500 ${isActive === "overview" ? "primary_color font-medium" : ""}`} to={""} >Course Overview</Link>
          </li>
          <li className="inline-flex text-center w-full lg:w-auto ">
            <Link onClick={() => toggleOption("why-us")} className={`py-3 inline-block hover_primary_color w-full border-b lg:border-white lg:border-b-0 lg:border-t-4 border-gray-500 ${isActive === "why-us" ? "primary_color font-medium" : ""}`} to={""} >Why Choose CTC?</Link>
          </li>
          <li className="inline-flex text-center w-full lg:w-auto ">
            <Link onClick={() => toggleOption("content")} className={`py-3 inline-block hover_primary_color w-full border-b lg:border-white lg:border-b-0 lg:border-t-4 border-gray-500 ${isActive === "content" ? "primary_color font-medium" : ""}`} to={""} >Course Content</Link>
          </li>
          <li className="inline-flex text-center w-full lg:w-auto ">
            <Link onClick={() => toggleOption("reviews")} className={`py-3 inline-block hover_primary_color w-full border-b lg:border-white lg:border-b-0 lg:border-t-4 border-gray-500 ${isActive === "reviews" ? "primary_color font-medium" : ""}`} to={""} >User Reviews</Link>
          </li>
          <li className="inline-flex text-center w-full lg:w-auto ">
            <Link onClick={() => toggleOption("faq")} className={`py-3 inline-block hover_primary_color w-full border-b lg:border-white lg:border-b-0 lg:border-t-4 border-gray-500 ${isActive === "faq" ? "primary_color font-medium" : ""}`} to={""} >FAQs</Link>
          </li>
          {/* <li className="inline-flex text-center w-full lg:w-auto ">
            <Link onClick={() => toggleOption("overview")} className={`py-3 inline-block hover_primary_color w-full border-b lg:border-white lg:border-b-0 lg:border-t-4 border-gray-500 ${isActive === "why-us" ? "primary_color font-medium" : ""}`} to={""} >Our Process</Link>
          </li> */}
          <li className="inline-flex text-center w-full lg:w-auto ">
            <Link className="btn py-3 inline-block self-center my-3 px-4 mx-auto lg:mx-0 primary_bg text-white hover:bg-blue-900 font-bold custom_btn" to={""} >Book Now</Link>
          </li>
        </ul>
        {/* </div> */}
      </div>
      <hr />
      {isActive === "overview" && <CourseOverview />}
      {isActive === "why-us" && <WhyUs />}
      {isActive === "content" && <CourseContent />}
      {isActive === "reviews" && <UserReviews />}
      {isActive === "faq" && <CourseFAQ />}
      <hr />
    </div>
  )
}

export default AllDetails