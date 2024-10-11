import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import review from "../assets/jpg/reviewsio-badge.jpg"
import AllDetails from '../components/course-details/AllDetails'
const CouseDetails = () => {
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
      <AllDetails />
    </main>
  )
}

export default CouseDetails