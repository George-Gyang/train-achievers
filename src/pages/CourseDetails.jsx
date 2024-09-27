import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import review from "../assets/jpg/reviewsio-badge.jpg"
import { Link } from 'react-router-dom'
import { TfiTimer } from 'react-icons/tfi'
import { FaGlobeAmericas, FaRegCalendarAlt, FaRegEdit, FaRegPlayCircle } from 'react-icons/fa'
import { MdOutlineStar } from 'react-icons/md'
import trainCard from "../assets/jpg/training-img.jpg"
import { FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa6'
const CouseDetails = () => {
  const [isMultiple, setIsMultiple] = useState(false)
  const toggleOption = () => setIsMultiple(!isMultiple)
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
            <Link className="py-3 inline-block hover_primary_color w-full border-b lg:border-white lg:border-b-0 lg:border-t-4 border-gray-500 " to={""} >Course Overview</Link>
          </li>
          <li className="inline-flex text-center w-full lg:w-auto ">
            <Link className="py-3 inline-block hover_primary_color w-full border-b lg:border-white lg:border-b-0 lg:border-t-4 border-gray-500 " to={""} >Why Choose CTC?</Link>
          </li>
          <li className="inline-flex text-center w-full lg:w-auto ">
            <Link className="py-3 inline-block hover_primary_color w-full border-b lg:border-white lg:border-b-0 lg:border-t-4 border-gray-500 " to={""} >Course Content</Link>
          </li>
          <li className="inline-flex text-center w-full lg:w-auto ">
            <Link className="py-3 inline-block hover_primary_color w-full border-b lg:border-white lg:border-b-0 lg:border-t-4 border-gray-500 " to={""} >User Reviews</Link>
          </li>
          <li className="inline-flex text-center w-full lg:w-auto ">
            <Link className="py-3 inline-block hover_primary_color w-full border-b lg:border-white lg:border-b-0 lg:border-t-4 border-gray-500 " to={""} >FAQs</Link>
          </li>
          <li className="inline-flex text-center w-full lg:w-auto ">
            <Link className="py-3 inline-block hover_primary_color w-full border-b lg:border-white lg:border-b-0 lg:border-t-4 border-gray-500 " to={""} >Our Process</Link>
          </li>
          <li className="inline-flex text-center w-full lg:w-auto ">
            <Link className="btn py-3 inline-block self-center my-3 px-4 mx-auto lg:mx-0 primary_bg text-white hover:bg-blue-900 font-bold custom_btn" to={""} >Book Now</Link>
          </li>
        </ul>
      </div>
      <hr />
      <div className="container my-5">
        <div className="md:flex px-2">
          <div className="md:w-1/4 md:pr-5 mb-4">
            <div className='mb-4'>
              <div className='flex items-center mb-2 font-bold'>
                <span className="mr-3">
                  <TfiTimer />
                </span>
                <span> STUDY HOURS</span>
              </div>
              <p className="text-gray-500">Approx. 360 hours. These can be divided however you’d like over a 12-month period.</p>
            </div>
            <div className='mb-4'>
              <div className='flex items-center mb-2 font-bold'>
                <span className="mr-3">
                  <FaRegCalendarAlt />
                </span>
                <span> COURSE DURATION</span>
              </div>
              <p className="text-gray-500">Your hours can be divided over a 12-month period. The course can be completed in a matter of months or over the course of a year. Most learners will complete this course in 5-9 months.</p>
            </div>
            <div className='mb-4'>
              <div className='flex items-center mb-2 font-bold'>
                <span className="mr-3">
                  <FaRegEdit />
                </span>
                <span> ASSESSMENT</span>
              </div>
              <p className="text-gray-500">Assignments and observation in practice.</p>
            </div>
            <div className='mb-4'>
              <div className='flex items-center mb-2 font-bold'>
                <span className="mr-3">
                  <FaGlobeAmericas />
                </span>
                <span> COURSE TYPE</span>
              </div>
              <p className="text-gray-500">This is an online course.</p>
            </div>
            <div className="">
              <button className='btn custom_btn flex items-center secondary_bg py-2 hover:bg-gray-800 wfull font-semibold text-white mr-3'> <span className="me-2"><FaRegPlayCircle /> </span> Watch Course Video</button>
            </div>
          </div>
          <div className="md:w-2/4 md:px-5">
            <div className="mb-4 bg-slate-100	 text-gray-500 rounded p-3">
              <div className="flex mb-3">
                <span className="mr-2 primary_color"> <MdOutlineStar size={20} /> </span>
                <span>Earn a Level 4 Certificate that demonstrates your expertise and commitment to excellence.</span>
              </div>
              <div className="flex mb-3">
                <span className="mr-2 primary_color"> <MdOutlineStar size={20} /> </span>
                <span>Trust in our proven track record, with thousands of learners successfully completing this regulated course.</span>
              </div>
            </div>
            <div className="mb-4 navy_bg p-3 text-white rounded">
              <p>Designed to help prepare trainee teachers to teach in a wide range of contexts.
              </p>
            </div>
            <div className="text-gray-500 my-4">
              <p className='mb-2'>
                If you’re already involved in teaching or are set to start a teaching position, the Level 4 Certificate in Education and Training (CET) will help you to evaluate, hone and improve upon your existing skills.
              </p>
              <p className='mb-3'>
                At <Link className='primary_color font-semibold underline hover:text-blue-950'>CTC Training</Link> , we provide a flexible Level 4 Certificate in Education and Training online course, complete with quality course content and a tutor to support you. The level 4 course is instant enrolment, meaning you can enrol today and start learning immediately.
              </p>
              <p className='mb-2'>
                We also provide online training for the
                <Link className='primary_color font-semibold underline hover:text-blue-950'> Level 3 Award </Link> and the
                <Link className='primary_color font-semibold underline hover:text-blue-950'> Level 5 Diploma </Link>  in Education and Training.
              </p>
              <p className='mb-2'>
                Did you know we have courses for
                <Link className='primary_color font-semibold underline hover:text-blue-950'> Assessment Training  </Link> and
                <Link className='primary_color font-semibold underline hover:text-blue-950'> IQA Training</Link>?  See everything we have to offer on our
                <Link className='primary_color font-semibold underline hover:text-blue-950'> course page. </Link>
              </p>
            </div>
            <div className="mb-4 bg-slate-100	 text-gray-500 rounded p-3">
              <p className="text-blue-950 mb-3">Not sure if this is the right course for you?
              </p>
              <button className='btn custom_btn primary_bg py-2 hover:bg-sky-400 wfull font-semibold text-white'> Try our suitability checker</button>
            </div>
            <div className="mb-5 text-gray-500">
              <h3 className="secondary_color mb-4 font-medium text-3xl">Is the Level 4 CET right for me?</h3>
              <p className="mb-3">This course is ideal for anyone who has completed the level 3 course and is looking to expand on their knowledge and skills. The level 4 course will prepare trainee teachers to teach in a wide range of contexts.</p>
              <p className="mb-3">You do not need to be currently teaching or in education training to complete this qualification, but you will be required to log at least 30 hours of teaching practice in a real classroom by the end of the qualification. Most candidates opt to wait until they are in a placement before starting the course. A full list of the minimum requirements is detailed below in the FAQ section.</p>
              <p className="mb-3">If you have any questions about the CET course and would like to speak to one of our tutors prior to booking your place, we’re happy to offer a free, no-obligation video consultation today.</p>
              <button className='btn custom_btn primary_bg py-2 my-3 hover:bg-sky-400 wfull font-semibold text-white'> Book Video Consultation</button>
            </div>
            <div className="mb-5 text-gray-500">
              <h3 className="secondary_color mb-4 font-medium text-3xl">CTLLS Online Training Course</h3>
              <p className="mb-3">This particular level was previously known as a CTLLS online training course (Certificate in Teaching in the Lifelong Learning Sector). If you have completed this level before, you will also be able to take our Level 5 course to further your knowledge.</p>
              <p className="mb-3">This course is ideal for those looking to go beyond a foundation level, perhaps already in a private training company role or an educational facility. You can learn more about this course in our brochure or by browsing the content below.</p>
              <div className="flex">
                <button className='btn custom_btn secondary_bg py-2  my-3 hover:bg-sky-400 wfull font-semibold text-white mr-3'>Download Brochure </button>
                <button className='btn custom_btn flex items-center  primary_bg py-2 my-3 hover:bg-sky-400 wfull font-semibold text-white'> <span className="me-2"><FaRegPlayCircle /> </span> Watch Course Video</button>
              </div>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="rounded bg-slate-100 p-3 md:ml-8">
              <div>
                <img src={trainCard} className='' alt="" />
              </div>
              <div className="text-gray-500 my-4">
                <h6 className='mb-3 font-semibold'>Awarding Body: Training Qualifications UK (TQUK)</h6>
                <h6 className='mb-3 font-semibold'>Qualification Number: 601/2136/1</h6>
                <p className="">TQUK are an Ofqual regulated Awarding Organisation. This guarantees that all of their qualifications conform to a high standard.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-2">
        <div className="flex justify-center">
          <div className="md:w-[80%]">
            <div className="md:flex items-center">
              <div className="rounded text-white md:w-[60%]">
                <div className="bg-slate-800 rounded-t-2xl p-3">
                  <h1 className="text-center font-semibold text-xl"> ONE TIME PURCHASE</h1>
                </div>
                <div className="navy_bg p-4">
                  <div className="mb-4">
                    <p className="text-center mb-3">A simple one-off payment and you're <br /> ready to start learning.</p>
                    <p className="display-5 secondary_color text-center fw-bolder">£495</p>
                    <p className="text-center text-gray-500">inc. VAT</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="md:w-[70%] text-gray-400">
                      <div className="flex mb-3">
                        <span className="mr-3 mt-2"> <FaCheck /> </span>
                        <span>First-hand experience of in classroom teaching
                        </span>
                      </div>
                      <div className="flex mb-3">
                        <span className="mr-3 mt-2"> <FaCheck /> </span>
                        <span>Enhances teaching skills and career prospects
                        </span>
                      </div>
                      <div className="flex mb-3">
                        <span className="mr-3 mt-2"> <FaCheck /> </span>
                        <span>Mixture of online and in-person training
                        </span>
                      </div>
                      <div className="flex mb-3">
                        <span className="mr-3 mt-2"> <FaCheck /> </span>
                        <span>Comprehensive grading, feedback and support from a real tutor
                        </span>
                      </div>
                      <div className="text-center mb-5">
                        <div onClick={toggleOption} className='text-white cursor-pointer justify-center flex items-center underline text-center'>Looking to purchase multiple?  <span className='ml-2'>{isMultiple ? <FaChevronUp /> : <FaChevronDown />}</span></div>
                          <div className={`my-4 transition ${isMultiple ? "block" : "none"}`}>
                            <p className='mb-4'>After you have completed your purchase you will be emailed a link to a page where you can manage who is enrolled on the courses.</p>
                            <div>
                              <input type="number" min={1} className='text-3xl inline-block pr-1 rounded w-[50px]' />
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded navy_bg md:w-[40%]">
                <div className="bg-slate-800 p-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </main>
  )
}

export default CouseDetails