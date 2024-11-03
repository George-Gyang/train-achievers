import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { navItems } from '../utils/constant'
import { MdCall } from 'react-icons/md'
import NavDropdown from './NavDropdown'
import { MobileNav } from './MobileNav'
import { ResourceContext } from '../context/ResourceContext'
import logo from "../../assets/png/new-logo.png"

const NavbarComponent = () => {
    const { activeNav } = useContext(ResourceContext)
    const navigate = useNavigate
    // console.log(activeNav)
    return (
        <nav className="bg-blue-gray-900">
        <div className='container popins py-3'>
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <Link to={"/"} className='nav-link'>
                        <div className="w-[80px]">
                            <img src={logo} alt="" className="" />
                        </div>
                        {/* <h5 ><span className="primary_color">TRAIN</span><span className="secondary_color">ACHIEVERS</span></h5> */}
                    </Link>
                </div>
                <div className='col-md-6 d-none d-md-block'>
                    <ul className=' d-md-flex mb-2 no_list '>
                        {
                            navItems.map((each, i) => {
                                const activeLink = activeNav == each.link;
                                const index = i + 1
                                const last = index === navItems.length
                                return (
                                    <li key={i} className={`me-4 hover:bg-light-blue-300 text-white font-medium text-nowrap p-1 px-2 border-b-2 border-light-blue-300 border-2 rounded-full ${activeLink ? "border-purple-300 secondary_bg" : "primary_bg"}`}>
                                        <Link target={last ? "_blank" : "_self"} className=' text-lg' to={each.route}>{each.link}</Link>
                                    </li>
                                )
                            })
                        }
                        {/* <NavDropdown /> */}
                    </ul>
                </div>
                <div className='d-flex align-items-center'>
                    {/* <div className="d-md-flex items-center d-none fw-semibold">
                        <span className='me-2 text-secondary'><MdCall /> </span>
                        <span className='me-3'>08012345678</span>
                    </div> */}
                    <button className='hidden md:block btn btn-outline-info custom_btn hover_secondary_bg secondary_border border-2 p-2 p-md-3 px-md-4 fw-semibold f-5' >Contact Us</button>
                    <div className="md:hidden">
                        <MobileNav />
                    </div>
                </div>
            </div>
        </div>
        </nav>
    )
}

export default NavbarComponent