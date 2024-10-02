import React, { useEffect } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import PopularCourseCard from '../components/physical-course/PopularCourseCard'

const PhysicalCourseList = () => {
    useEffect(() => {
        // setActiveNav("Career")
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className="py-5 bg-slate-100">
                <div className="container md:px-16">
                    <div className="relative">
                        <input type="text" className='w-100 shadow rounded-full pr-[30%] text-medium text-slate-900 bg-white p-4' placeholder='What do you need to train in?' />
                        <button className='btn custom_btn bg-purple-600 hover:bg-purple-500 text-white absolute flex items-center top-50 end-0 translate-middle-y mr-4'>Find Course <FaLongArrowAltRight className='ml-2 hidden md:block' /> </button>
                    </div>
                </div>
            </div>
            <div className="container md:px-16">
                <div className='mb-16 my-10'>
                    {/* <h2 className="text-center h2 font-semibold my-10">Most Popular Course</h2> */}
                    <div className="grid md:grid-cols-4  gap-4">
                        <PopularCourseCard />
                        <PopularCourseCard />
                        <PopularCourseCard />
                        <PopularCourseCard />
                        <PopularCourseCard />
                        <PopularCourseCard />
                        <PopularCourseCard />
                        <PopularCourseCard />
                    </div>
                </div>
                <div className="mb-12">
                    <h2 className="h2 text-black font-bold mb-3">Safeguarding Courses for Care Homes and School</h2>
                    <div className="grid gap-y-5 text-lg">
                        <p>Our safeguarding courses teach the skills and knowledge needed to spot, prevent, and respond to different kinds of abuse and neglect.</p>
                        <p>Our complete courses cover various safeguarding areas, including protecting adults, protecting children, the Mental Capacity Act and Deprivation of Liberty Safeguards training, and domestic abuse awareness.</p>
                        <p>We have expert teachers who make our courses interactive and engaging.</p>
                        <p>Learners gain an in-depth understanding of safeguarding laws, guidance, and policies.</p>
                        <p>They also learn how to identify different abuse types, how to report worries, and how to give effective support to victims.</p>
                        <p>Our courses are ideal for a wide range of professionals who work in healthcare, social services, education, and other industries.</p>
                        <p>By finishing our safeguarding courses, learners not only meet their professional duties but also help create a safer and more supportive environment for vulnerable people.</p>
                        <p>Book now for our training courses and help a difference. You can reach out to our team for help.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhysicalCourseList