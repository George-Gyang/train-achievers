import React, { useContext, useEffect } from 'react'
import { FaArrowsAlt, FaHeart, FaLongArrowAltRight, FaMicrophoneAlt, FaShieldAlt, FaStethoscope, FaUserAlt, FaWheelchair } from 'react-icons/fa'
import nursingImg from "../assets/jpg/nursing.jpeg"
import MostPopularCourses from '../components/physical-course/MostPopularCourses'
import { useNavigate } from 'react-router-dom'
import ContactSection from '../components/general/ContactSection'
import { ResourceContext } from '../components/context/ResourceContext'

const PhysicalCourses = () => {
    const navigate = useNavigate();
    const { setActiveNav } = useContext(ResourceContext);

    useEffect(() => {
        setActiveNav("Practical Training")
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <div className="secondary_bg rounded-br-[120px] py-16">
                <div className="container md:px-5">
                    <div className="row text-white mb-5">
                        <div className="col-md-7">
                            <h1 className="h2 mb-4">We’re The Right Healthcare <br /> <b>Training Provider</b> For You.
                            </h1>
                            <p>Caring for Care can provide all the care training courses you <br /> require to help you meet CQC standards.</p>
                            <div className="relative my-5">
                                <input type="text" className='w-100 rounded-full pr-[30%] text-medium text-slate-900 bg-white p-4' placeholder='What do you need to train in?' />
                                <button className='btn custom_btn bg-purple-600 hover:bg-purple-500 text-white absolute flex items-center top-50 end-0 translate-middle-y mr-4'>Find Course <FaLongArrowAltRight className='ml-2 hidden md:block' /> </button>
                            </div>
                        </div>
                        <div className="col-md-5 flex justify-center md:justify-end md:pr-16 ">
                            <div style={{ backgroundImage: `url(${nursingImg})`, backgroundSize: "cover" }} className="my-5 size-[250px] md:size-[350px] rounded-full">
                                {/* <img src={nursingImg} alt="" className="size-[200px] md:size-[300px] rounded-full" /> */}
                            </div>
                        </div>
                        {/* <div className="col-md-5 flex justify-center md:justify-end md:pr-16 ">
                            <div className="my-5 size-[200px">
                                <img src={nursingImg} alt="" className="size-[200px] md:size-[300px] rounded-full" />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <div className="container my-16">
                <div className="flex justify-center">
                    <div className="md:w-[80%] flex gap-4 items-center">
                        <div className="col-md-2">
                            <img src="https://caringforcare.co.uk/wp-content/themes/caring-for-care/assets/img/logos/endorsed-provider.png.webp" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-2">
                            <img src="https://caringforcare.co.uk/wp-content/themes/caring-for-care/assets/img/logos/qualsafe.png.webp" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-2">
                            <img src="https://caringforcare.co.uk/wp-content/themes/caring-for-care/assets/img/logos/tquk-logo.png.webp" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-2">
                            <img src="https://caringforcare.co.uk/wp-content/themes/caring-for-care/assets/img/logos/ukrlp.png.webp" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="bg-slate-100 py-16">
                <div className="container md:px-10">
                    <h2 className="h2 font-semibold mb-5 text-center">We Have Courses Available In</h2>
                    <div className="grid md:grid-cols-4 text-white gap-4">
                        <div onClick={() => navigate("/practical_course/course")} className="relative cursor-pointer">
                            <div className="p-3 bg-slate-100 opacity-100 h-full hover:opacity-0 shadow-lg rounded">
                                <div className="flex justify-center my-4">
                                    <div className="size-[70px] transition-all flex justify-center hover:text-4xl text-3xl items-center rounded-full bg-light-blue-500 ">
                                        <FaHeart />
                                    </div>
                                </div>
                                <p className="text-center text-black text-2xl font-semibold">Care</p>
                            </div>
                            <div className="absolute  transition-all z-10 opacity-0 opacity_1 bg-purple-500 top-0 w-full h-full rounded shadow-lg">
                                <div className="flex justify-center my-3">
                                    <div className="size-[70px] transition-all flex justify-center hover:text-4xl text-3xl text-purple-700 items-center rounded-full bg-white ">
                                        <FaHeart />
                                    </div>
                                </div>
                                <p className="text-center">Range of mandatory and specialize subject for all care staff</p>
                            </div>
                        </div>
                        <div onClick={() => navigate("/practical_course/course")} className="relative cursor-pointer">
                            <div className="p-3 bg-slate-100 opacity-100 h-full hover:opacity-0 shadow-lg rounded">
                                <div className="flex justify-center my-4">
                                    <div className="size-[70px] transition-all flex justify-center hover:text-4xl text-3xl items-center rounded-full bg-light-blue-500">
                                        <FaStethoscope />
                                    </div>
                                </div>
                                <p className="text-center text-black text-2xl font-semibold">Clinical</p>
                            </div>
                            <div className="absolute  transition-all z-10 opacity-0 opacity_1 bg-purple-500 top-0 w-full h-full rounded shadow-lg">
                                <div className="flex justify-center my-3">
                                    <div className="size-[70px] transition-all flex justify-center hover:text-4xl text-3xl text-purple-700 items-center rounded-full bg-white ">
                                        <FaStethoscope />
                                    </div>
                                </div>
                                <p className="text-center">Specialist clinical and complex care courses. Ideal for nurses or advanced carers.</p>
                            </div>
                        </div>
                        <div onClick={() => navigate("/practical_course/course")} className="relative cursor-pointer">
                            <div className="p-3 bg-slate-100 opacity-100 h-full hover:opacity-0 shadow-lg rounded">
                                <div className="flex justify-center my-4">
                                    <div className="size-[70px] transition-all flex justify-center hover:text-4xl text-3xl items-center rounded-full bg-light-blue-500">
                                        <FaMicrophoneAlt />
                                    </div>
                                </div>
                                <p className="text-center text-black text-2xl font-semibold">Train the Trainer</p>
                            </div>
                            <div className="absolute  transition-all z-10 opacity-0 opacity_1 bg-purple-500 top-0 w-full h-full rounded shadow-lg">
                                <div className="flex justify-center my-3">
                                    <div className="size-[70px] transition-all flex justify-center hover:text-4xl text-3xl text-purple-700 items-center rounded-full bg-white ">
                                        <FaMicrophoneAlt />
                                    </div>
                                </div>
                                <p className="text-center">Learn the skills to teach your own courses, we have a variety of subjects to choose from.</p>
                            </div>
                        </div>
                        <div onClick={() => navigate("/practical_course/course")} className="relative cursor-pointer">
                            <div className="p-3 bg-slate-100 opacity-100 h-full hover:opacity-0 shadow-lg rounded">
                                <div className="flex justify-center my-4">
                                    <div className="size-[70px] transition-all flex justify-center hover:text-4xl text-3xl items-center rounded-full bg-light-blue-500">
                                        <BiSolidFirstAid />
                                    </div>
                                </div>
                                <p className="text-center text-black text-2xl font-semibold">First Aid</p>
                            </div>
                            <div className="absolute  transition-all z-10 opacity-0 opacity_1 bg-purple-500 top-0 w-full h-full rounded shadow-lg">
                                <div className="flex justify-center my-3">
                                    <div className="size-[70px] transition-all flex justify-center hover:text-4xl text-3xl text-purple-700 items-center rounded-full bg-white ">
                                        <BiSolidFirstAid />
                                    </div>
                                </div>
                                <p className="text-center">Regulated First Aid qualifications through Qualsafe Awards. Meet your legal requirements.</p>
                            </div>
                        </div>
                        <div onClick={() => navigate("/practical_course/course")} className="relative cursor-pointer">
                            <div className="p-3 bg-slate-100 opacity-100 h-full hover:opacity-0 shadow-lg rounded">
                                <div className="flex justify-center my-4">
                                    <div className="size-[70px] transition-all flex justify-center hover:text-4xl text-3xl items-center rounded-full bg-light-blue-500">
                                        <FaShieldAlt />
                                    </div>
                                </div>
                                <p className="text-center text-black text-2xl font-semibold">Safeguarding</p>
                            </div>
                            <div className="absolute  transition-all z-10 opacity-0 opacity_1 bg-purple-500 top-0 w-full h-full rounded shadow-lg">
                                <div className="flex justify-center my-3">
                                    <div className="size-[70px] transition-all flex justify-center hover:text-4xl text-3xl text-purple-700 items-center rounded-full bg-white ">
                                        <FaShieldAlt />
                                    </div>
                                </div>
                                <p className="text-center">Variety of courses to help your staff to protect both adults and children.</p>
                            </div>
                        </div>
                        <div onClick={() => navigate("/practical_course/course")} className="relative cursor-pointer">
                            <div className="p-3 bg-slate-100 opacity-100 h-full hover:opacity-0 shadow-lg rounded">
                                <div className="flex justify-center my-4">
                                    <div className="size-[70px] transition-all flex justify-center hover:text-4xl text-3xl items-center rounded-full bg-light-blue-500">
                                        <FaArrowsAlt />
                                    </div>
                                </div>
                                <p className="text-center text-black text-2xl font-semibold">Mandatory</p>
                            </div>
                            <div className="absolute  transition-all z-10 opacity-0 opacity_1 bg-purple-500 top-0 w-full h-full rounded shadow-lg">
                                <div className="flex justify-center my-3">
                                    <div className="size-[70px] transition-all flex justify-center hover:text-4xl text-3xl text-purple-700 items-center rounded-full bg-white ">
                                        <FaArrowsAlt />
                                    </div>
                                </div>
                                <p className="text-center">The core skills your staff should have. Available in individual subjects or as a package.</p>
                            </div>
                        </div>
                        <div onClick={() => navigate("/practical_course/course")} className="relative cursor-pointer">
                            <div className="p-3 bg-slate-100 opacity-100 h-full hover:opacity-0 shadow-lg rounded">
                                <div className="flex justify-center my-4">
                                    <div className="size-[70px] transition-all flex justify-center hover:text-4xl text-3xl items-center rounded-full bg-light-blue-500">
                                        <FaUserAlt />
                                    </div>
                                </div>
                                <p className="text-center text-black text-2xl font-semibold">Conflict</p>
                            </div>
                            <div className="absolute  transition-all z-10 opacity-0 opacity_1 bg-purple-500 top-0 w-full h-full rounded shadow-lg">
                                <div className="flex justify-center my-3">
                                    <div className="size-[70px] transition-all flex justify-center hover:text-4xl text-3xl text-purple-700 items-center rounded-full bg-white ">
                                        <FaUserAlt />
                                    </div>
                                </div>
                                <p className="text-center">Specialist training to help care for individuals with behaviours that challenge.</p>
                            </div>
                        </div>
                        <div onClick={() => navigate("/practical_course/course")} className="relative cursor-pointer">
                            <div className="p-3 bg-slate-100 opacity-100 h-full hover:opacity-0 shadow-lg rounded">
                                <div className="flex justify-center my-4">
                                    <div className="size-[70px] transition-all flex justify-center hover:text-4xl text-3xl items-center rounded-full bg-light-blue-500">
                                        <FaWheelchair />
                                    </div>
                                </div>
                                <p className="text-center text-black text-2xl font-semibold">Specials Care</p>
                            </div>
                            <div className="absolute  transition-all z-10 opacity-0 opacity_1 bg-purple-500 top-0 w-full h-full rounded shadow-lg">
                                <div className="flex justify-center my-3">
                                    <div className="size-[70px] transition-all flex justify-center hover:text-4xl text-3xl text-purple-700 items-center rounded-full bg-white ">
                                        <FaWheelchair />
                                    </div>
                                </div>
                                <p className="text-center">Subjects for those who care for individuals with more specialised needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="my-12">
                <div className="container md:px-10">
                    <MostPopularCourses />
                </div>
            </div>
            <ContactSection />
        </div>
    )
}

export default PhysicalCourses