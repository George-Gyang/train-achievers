import React from 'react'
import NavbarComponent from './NavbarComponent'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import FirstNav from './FirstNav'

const Layouts = () => {
    return (
        <>
            <FirstNav />
            <NavbarComponent />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layouts