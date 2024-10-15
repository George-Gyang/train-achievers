import React from 'react'
import AdminSideBar from './AdminSideBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <div className=' navy_bg 2xl:container md:mx-auto pt-4'>
            <div className='flex h-full'>
                <div className="md:w-[15%] text-white">
                <AdminSideBar />
                </div>
                <div className="md:w-[85%] h-full bg-gray-50 rounded-tl-3xl">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminLayout