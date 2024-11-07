import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { navItems } from '../utils/constant'
import { MdCall } from 'react-icons/md'
import NavDropdown from './NavDropdown'
import { MobileNav } from './MobileNav'
import { ResourceContext } from '../context/ResourceContext'
import logo from "../../assets/png/new-logo.png"

const NavbarComponent = ({ logout, userInfo, getCart }) => {
    const { activeNav } = useContext(ResourceContext)
    const navigate = useNavigate();
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
                    {getCart?.length > 0 && (<div className="mt-3 d-block d-md-none">
                        <div className="relative inline-flex">
                            <button
                                onClick={() => navigate("/carts",)}
                                className="flex items-center rounded-md bg-slate-800 py-2 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </button>
                            <span
                                className="absolute top-0.5 left-0.5 grid min-h-[24px] min-w-[24px] -translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-purple-500 py-1 px-1 text-xs font-medium leading-none text-white content-['']"
                            >{getCart?.length}</span>
                        </div>
                    </div>)}
                    <div className='d-flex align-items-center'>
                        {/* <div className="d-md-flex items-center d-none fw-semibold">
                        <span className='me-2 text-secondary'><MdCall /> </span>
                        <span className='me-3'>08012345678</span>
                    </div> */}
                        <button className='hidden md:block btn btn-outline-info custom_btn hover_secondary_bg secondary_border border-2 p-2 p-md-3 px-md-4 fw-semibold f-5' >Contact Us</button>
                        <div className="md:hidden">
                            <MobileNav logout={logout} userInfo={userInfo} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent