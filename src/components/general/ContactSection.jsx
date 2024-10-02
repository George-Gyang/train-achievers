import React from 'react'
import HelperContact from '../physical-course/HelperContact'

const ContactSection = () => {
    return (
        <div className="py-16 secondary_bg">
            <div className="container md:px-10">
                <div className="md:flex items-center">
                    <div className="md:w-[50%] text-white p-4">
                        <h2 className="h2 mb-3 text-center">Let us Help you</h2>
                        <p className='mb-3'>We’ll help you find the right course for your needs. Tell us a little bit about your situation and what you would like to achieve.</p>
                        <p className='mb-3'>We’ll get back to you within one working day.</p>
                    </div>
                    <div className="md:w-[50%]">
                        <div className="rounded p-3 bg-white">
                            <HelperContact />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection