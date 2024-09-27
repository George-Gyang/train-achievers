import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationArrow, FaTwitter } from 'react-icons/fa6'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { MdCall } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { navItems } from '../utils/constant'

const Footer = () => {
    return (
        <footer className='text-white'>
            <div className='py-5 navy_bg'>
                <div className="container mb-3">
                    <div className="d-md-flex justify-content-between">
                        <div>
                            <p className='fs-3 mb-1'>Need more information?</p>
                            <p className='fs-3 primary_color'>Get in touch with our team today.</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div className="me-4 fw-semibold">
                                <p className='me-2'>Call us today
                                </p>
                                <p className='me-3'>08012345678</p>
                            </div>
                            <button className='btn btn-outline-info custom_btn hover_secondary_bg secondary_border border-2 p-3 px-4 fw-semibold f-5' >Contact Us</button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md mb-3">
                            <div className="d-flex align-items-center mb-2">
                                <span className='secondary_color me-2'><MdCall size={20} /></span>
                                <Link to={"tel:0800 123 0984"} className='nav-link hover_primary_color'>0800 123 0984</Link>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <span className='secondary_color me-2'><HiOutlineMailOpen size={20} /></span>
                                <Link to={"mailto:0800 123 0984"} className='nav-link hover_primary_color'>0800 123 0984</Link>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <span className='secondary_color me-2'><FaLocationArrow size={20} /></span>
                                <p className='mb-0'>Suite 5 Pemberton House
                                    Stafford Park 1
                                    Telford
                                    TF3 3BD</p>
                            </div>
                        </div>
                        <div className="col-md mb-3">
                            <p className='secondary_color'>TRAINING
                            </p>
                            <ul className='no_list ps-0'>
                                {navItems.map((each) => (
                                    <li key={each.link} className='mb-3'>
                                        <Link className='nav-link hover_primary_color' to={""}>
                                            {each.link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md mb-3">
                            <p className='secondary_color'>FOLLOW US
                            </p>
                            <div className="d-flex">
                                <Link to={""} className="mx-2 nav-link hover_primary_color">
                                    <FaTwitter />
                                </Link>
                                <Link to={""} className="mx-2 nav-link hover_primary_color">
                                    <FaFacebookF />
                                </Link>
                                <Link to={""} className="mx-2 nav-link hover_primary_color">
                                    <FaInstagram />
                                </Link>
                                <Link to={""} className="mx-2 nav-link hover_primary_color">
                                    <FaLinkedinIn />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer