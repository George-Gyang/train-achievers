import React from 'react'
import { Link } from 'react-router-dom'
import { navItems } from './utils/constant'
import { MdCall } from 'react-icons/md'

const NavbarComponent = () => {
    return (
        <div className='container py-3'>
            <div className="d-flex justify-content-between">
                <div>
                    <h5>TRAIN ACHIEVERS</h5>
                </div>
                <div className='col-md-7'>
                    <ul className='d-flex no_list'>
                        {
                            navItems.map((each) => (
                                <li className='me-3'> <Link className='nav-link fw-semibold fs-5' to={""}>{each.link}</Link> </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='d-flex align-items-center fs-5'>
                    <div className="d-flex fw-semibold">
                        <span className='me-2 text-secondary'><MdCall /> </span>
                        <span className='me-2'>08012345678</span>
                    </div>
                    <button className='btn btn-outline-info custom_btn border-2 p-3 px-4 fw-semibold f-5' >Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default NavbarComponent