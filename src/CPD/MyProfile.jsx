import React from 'react'
import MaterialCard from '../components/general/Card'
import { FaUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { VscBook } from 'react-icons/vsc'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

const MyProfile = ({userInfo}) => {
    return (
        <div>
            <div className="container">
                <div className="grid md:grid-cols-3 gap-4">
                    <MaterialCard>
                        <div className="md:flex items-center p-4">
                            <div className="flex mb-3 justify-center">
                                <div className="size-[100px] bg-purple-600/10 text-purple-400/80 text-5xl rounded-full flex items-center justify-center">
                                    <FaUser />
                                </div>
                            </div>
                            <div className="px-3 text-center text-md-start text-black">
                                <h3 className="text-lg md:text-xl font-semibold ">{userInfo.details.firstName} {userInfo.details.lastName}</h3>
                                <p>0 Certificates</p>
                                <Link className='primary_color' to={""}>Edit Profile</Link>
                            </div>
                        </div>
                    </MaterialCard>
                    <MaterialCard>
                        <div className="md:flex items-center p-4">
                            <div className="flex mb-3 justify-center">
                                <div className="size-[100px] bg-purple-600/10 text-purple-400/80 text-5xl rounded-full flex items-center justify-center">
                                    <VscBook />
                                </div>
                            </div>
                            <div className="px-3 text-center text-md-start text-black">
                                {/* <h3 className="text-lg md:text-xl font-semibold ">George Jammy</h3> */}
                                <p>Stay Compliant: Keep Up with Your Training!</p>
                                <Link className='primary_color' to={""}>My Progress</Link>
                            </div>
                        </div>
                    </MaterialCard>
                    <MaterialCard>
                        <div className="md:flex items-center p-4">
                            <div className="flex mb-3 justify-center">
                                <div className="size-[100px] bg-purple-600/10 text-purple-400/80 text-5xl rounded-full flex items-center justify-center">
                                    <IoMdCheckmarkCircleOutline />
                                </div>
                            </div>
                            <div className="px-3 text-center text-md-start text-black">
                                {/* <h3 className="text-lg md:text-xl font-semibold ">George Jammy</h3> */}
                                <p>Update Your Professional Achievements</p>
                                <Link className='primary_color' to={""}>Professional Profile</Link>
                            </div>
                        </div>
                    </MaterialCard>
                </div>
            </div>
        </div>
    )
}

export default MyProfile