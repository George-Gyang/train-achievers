import React from 'react'
import image from "../assets/jpg/home-img.jpg"
import stepsBg from "../assets/jpg/how-bg.jpg"
import FeaturedProgram from '../components/home/FeturedProgram'
import { FaStethoscope, FaVideo } from 'react-icons/fa6'
import { GiTeacher } from 'react-icons/gi'
import { LiaUserCheckSolid } from 'react-icons/lia'
import PhysicalCoursesSecton from '../components/home/PhysicalCoursesSecton'
import OnlineCoursesSection from '../components/home/OnlineCoursesSection'
import PrepTrainingSection from '../components/home/PrepTrainingSection'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import ContactSection from '../components/general/ContactSection'
import homeVid from "../assets/video/home_vid2.mp4";

const Home = () => {
    const features = [
        {
            title: "RQF/NVQ Courses ",
            icon: <FaVideo size={30} />,
            summary: "Our online healthcare courses offer customized content to suit your needs, offering relevant and engaging learning experiences catered specifically to you.",
            route: "rqfnvq_courses"
        },
        {
            title: "Practical Training ",
            icon: <GiTeacher size={30} />,
            summary: "Enroll on our onsite courses where care managers and health care assistants are trained by our expert team of tutors",
            route: "practical_course"
        },
        {
            title: "CPD Courses ",
            icon: <FaStethoscope size={30} />,
            summary: "Explore our courses, where specialized learning meets your career needs. From nursing essentials to healthcare management, our curated courses ensure targeted development for professionals like you",
            route: "cpd_course"
        },
        {
            title: "Prep Training ",
            icon: <LiaUserCheckSolid size={30} />,
            summary: "Our customized training exercises are designed to help you develop and refine the essential skills needed to excel in consulting, medical, and home care interviews.",
            route: "prep_training"
        },
    ]
    return (
        <div className=''>
            <div className='secondary_bg'>
                <div style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }} className='h-[100vh] relative' >
                    <div className='h-full'>
                        <video
                            autoPlay
                            loop
                            muted
                            preload={"auto"}
                            className='w-full h-full object-cover'
                            src={homeVid}></video>
                    </div>
                    <div className="absolute flex items-center w-full h-full top-0 bg-black/50 h-screen">
                        <div className='container text-white'>
                            <div className="md:w-[70%] pt-12  pt-md-0">
                                <div data-aos="fade-down" className="">
                                    <span className=" px-3 border-b-8 border-purple-700"></span>
                                    <p className="mt-2 mb-2 uppercase">Total Home Care solution</p>
                                </div>
                                <h1 data-aos="fade-right" data-aos-delay="600" className="h1 text-6xl font-bold">Get Trained <br /> by the Experts</h1>
                                {/* <p className="mt-5 text-2xl">Together we are making Health care Better</p> */}
                                <p data-aos="fade-up" className="mt-5 text-2xl">Leading the way in Care Excellence</p>
                            </div>
                            {/* <img src={image} alt="" className="img-flui w-screen" /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-14 bg-white">
                <div className="container">
                    <div data-aos="fade-up" className="mb-5">
                        <h3 className="h3 mb-5 text-center">Our Featured Programs</h3>
                        <div className="grid md:grid-cols-4 gap-4">
                            {features.map((each) => (
                                <FeaturedProgram key={each.title} each={each} />
                            ))}
                        </div>
                    </div>
                </div>
                <section>
                    <div data-aos="fade-up" style={{ backgroundImage: `url(${stepsBg})`, backgroundSize: "cover" }} className='home_b' >
                        <div className="navy_bg py-5 opacity-90">
                            <div className="container">
                                <div className="text-center text-white">
                                    <p className="h3 ">How it Works</p>
                                    <p className='text-gray-400'>Complete your course in three easy steps</p>
                                </div>
                                <div className="grid md:grid-cols-3 gap-4 mb-5 py-5">
                                    <div className="md:flex items-center justify-between">
                                        <div className="md:pr-5">
                                            <span className="text-4xl primary_color">1</span>
                                            <p className="text-2xl font-bold text-white mt-3 mb-5">Select and pay for your course online.</p>
                                            <span className="px-4 border-b-[5px] border-purple-600 mb-3"></span>
                                            <p className="mt-3 text-gray-400">You can pay for your course in full or in easy monthly installments, whichever suits you.</p>
                                        </div>
                                        <div className="text-white text-center my-4 md:ml-0 ml-5">
                                            <FaRegArrowAltCircleRight className=' rotate-90 md:rotate-0' size={30} />
                                        </div>
                                    </div>
                                    <div className="md:flex items-center justify-between">
                                        <div className="md:pr-5">
                                            <span className="text-4xl primary_color">2</span>
                                            <p className="text-2xl font-bold text-white mt-3 mb-5">Speak to your dedicated tutor and submit assignments.</p>
                                            <span className="px-4 border-b-[5px] border-purple-600 mb-3"></span>
                                            <p className="mt-3 text-gray-400">With a dedicated tutor you’ll have someone to guide you and give you feedback on your work.</p>
                                        </div>
                                        <div className="text-white text-center my-4 md:ml-0 ml-5">
                                            <FaRegArrowAltCircleRight className=' rotate-90 md:rotate-0' size={30} />
                                        </div>
                                    </div>
                                    <div className="md:flex items-center justify-between">
                                        <div className="md:pr-5">
                                            <span className="text-4xl primary_color">3</span>
                                            <p className="text-2xl font-bold text-white mt-3 mb-5">Complete the units and get your regulated certificate.</p>
                                            <span className="px-4 border-b-[5px] border-purple-600 mb-3"></span>
                                            <p className="mt-3 text-gray-400">Once you’ve successfully completed the required course components, you’ll get your OFQUAL-regulated qualification.</p>
                                        </div>
                                        <div className="text-white text-center my-4 md:ml-0 ml-5">
                                            <FaRegArrowAltCircleRight className=' rotate-90 md:rotate-0' size={30} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <OnlineCoursesSection />
                {/* <PhysicalCoursesSecton /> */}
                <PrepTrainingSection />
                <ContactSection />
            </div>
        </div>
    )
}

export default Home