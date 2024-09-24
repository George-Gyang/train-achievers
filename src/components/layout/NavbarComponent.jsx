import React from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../utils/constant'
import { MdCall } from 'react-icons/md'
import NavDropdown from './NavDropdown'

const NavbarComponent = () => {
    return (
        <div className='container popins py-3'>
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <h5 >TRAIN ACHIEVERS</h5>
                </div>
                <div className='col-md-6'>
                    <ul className='d-flex mb-2 no_list'>
                        {
                            navItems.map((each, i) => (
                                <li key={i} className='me-3 hover_primary_color'> <Link className='nav-link fw-semibold fs-5' to={""}>{each.link}</Link> </li>
                            ))
                        }
                        <NavDropdown />
                    </ul>
                </div>
                <div className='d-flex align-items-center'>
                    <div className="d-flex fw-semibold">
                        <span className='me-2 text-secondary'><MdCall /> </span>
                        <span className='me-3'>08012345678</span>
                    </div>
                    <button className='btn btn-outline-info custom_btn hover_secondary_bg secondary_border border-2 p-3 px-4 fw-semibold f-5' >Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default NavbarComponent