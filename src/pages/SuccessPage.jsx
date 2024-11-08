import React from 'react'
import { GoChecklist } from 'react-icons/go'
import { MdVerified } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

const date = new Date();

const SuccessPage = () => {
    const {state} = useLocation()
    const mainDetails = state?.mainDetails;
    return (
        <div className='my-5'>
            <div className="container">
                <div className="py-5">
                    <div className="md:flex">
                        <div className="md:w-1/2">
                            <h3 className="uppercase text-xl font-bold mb-3">Payments Confirmation Successfully !</h3>
                            <p className='md:w-2/3 mb-4'>Thank you for choosing to study with Trainwithacheivers ! Your Reservation is Confirmed. If there's anything you need before your arrival, please don't hesitate to reach out to your host!
                            </p>
                            <div className="flex items-center">
                                <span className='text-purple-500 mr-3'><GoChecklist size={30} /></span>
                                <p className='text-gray-500 font-bold'>Order ID : {mainDetails.paymentId}</p>
                            </div>
                            <div className='py-4'>
                                <Link className='underline text-blue-600' replace to={"/"}>Go Back to Home</Link>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="bg-purple-600/30 p-4">
                                <div className="flex justify-between">
                                    <div className="">
                                        <h4 className="text-3xl font-bold mb-3">${mainDetails.amount}.00</h4>
                                        <p>Payment Successful</p>
                                    </div>
                                    <span className='text-purple-600'>
                                        <MdVerified size={50} />
                                    </span>
                                </div>
                            </div>
                            <div className="mt-5 w-3/4 px-3">
                                <p className="text-lg font-semibold pb-4 border-bottom ">Transaction Details</p>
                                <div className="mt-3">
                                    <div className="flex justify-between mb-3">
                                        <p className="">Course Price</p>
                                        <p className="font-medium">${mainDetails.amount}</p>
                                    </div>
                                    <div className="flex justify-between mb-3">
                                        <p className="">Course Date</p>
                                        <p className="font-medium">{mainDetails && date.toLocaleTimeString()}</p>
                                    </div>
                                    <div className="mt-4 border-t-2 py-3">
                                        <div className="flex justify-between mb-3">
                                            <p className="font-bold">Total</p>
                                            <p className="font-bold">${mainDetails.amount}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessPage