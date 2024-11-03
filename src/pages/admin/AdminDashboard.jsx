import React, { useContext, useEffect, useState } from 'react'
import MaterialCard from '../../components/general/Card'
import { BiSolidBookAlt } from 'react-icons/bi'
import { MdArrowDropDown, MdOutlineCollectionsBookmark, MdOutlinePeopleAlt } from 'react-icons/md'
import { FaArrowRightArrowLeft, FaUsers } from 'react-icons/fa6'
import AddOfflineCourse from '../../components/physical-course/AddOfflineCourse'
import AdminCourseTable from '../../components/physical-course/AminCourseTable'
import { ResourceContext } from '../../components/context/ResourceContext'
import AddSchedule from '../../components/physical-course/AddSchedule'
import UsersTable from '../../components/users/UsersTable'

const AdminDashboard = () => {
  const { getAllCourse, setGetAllCourse, getAllUsers, setGetAllUsers } = useContext(ResourceContext);
  const [display, setDisplay] = useState("courses")
  useEffect(() => {
    setGetAllCourse((prev) => {
      return {
        ...prev, isDataNeeded: true
      }
    })
  }, [])

  useEffect(() => {
    setGetAllUsers((prev) => {
      return {
        ...prev, isDataNeeded: true
      }
    })
  }, [])

  const handleDisplay = (e) => {
    setDisplay(e)
  }


  // console.log(getAllUsers)
  return (
    <div style={{ overflow: "scroll" }} className='overflow-hidden h-full'>
      <div>
        <h2 className='p-4 secondary_bg rounded-tl-3xl text-2xl font-bold'>Analytics</h2>
        <div className="">
          <div className="grid md:grid-cols-4 gap-4 p-4">
            <MaterialCard>
              <div className='p-4 bg-purple-600/20 rounded-xl border-b-4 border-purple-300'>
                <p className="font-semibold text-lg uppercase mb-3">Total Courses</p>
                <div className="flex items-center">
                  <div className='size-[70px] rounded-full bg-purple-400 flex items-center justify-center text-white'>
                    <BiSolidBookAlt size={40} />
                  </div>
                  <div className="ml-4">
                    <div className="text-3xl flex items-center text-purple-400">
                      <p className='font-bolder font-bold text-black'>{getAllCourse.data?.length}</p>
                      <span><MdArrowDropDown size={30} /> </span>
                    </div>
                  </div>
                </div>
              </div>
            </MaterialCard>
            <MaterialCard>
              <div className='p-4 bg-purple-600/20 rounded-xl border-b-4 border-purple-300'>
                <p className="font-semibold text-lg mb-3 uppercase">Enroll Users</p>
                <div className="flex items-center">
                  <div className='size-[70px] rounded-full bg-purple-400 flex items-center justify-center text-white'>
                    <FaUsers size={25} />
                  </div>
                  <div className="ml-4">
                    <div className="text-3xl flex items-center text-purple-400">
                      <p className='font-bolder font-bold text-black mr-2'>{getAllUsers.data?.length}</p>
                      <span><FaArrowRightArrowLeft size={15} /> </span>
                    </div>
                  </div>
                </div>
              </div>
            </MaterialCard>
            <MaterialCard>
              <div className='p-4 bg-purple-600/20 rounded-xl border-b-4 border-purple-300'>
                <p className="font-semibold text-lg mb-3 uppercase">add Course</p>
                <div className="flex items-center">
                  <div className='size-[70px] rounded-full bg-purple-400 flex items-center justify-center text-white'>
                    <AddOfflineCourse />
                  </div>
                  <div className="ml-4">
                    <div className="text-3xl flex items-center text-purple-400">
                      <span><MdArrowDropDown size={30} /> </span>
                    </div>
                  </div>
                </div>
              </div>
            </MaterialCard>
            <MaterialCard>
              <div className='p-4 bg-purple-600/20 rounded-xl border-b-4 border-purple-300'>
                <p className="font-semibold text-lg mb-3 uppercase">Create Schedule</p>
                <div className="flex items-center">
                  <div className='size-[70px] rounded-full bg-purple-400 flex items-center justify-center text-white'>
                    <AddSchedule />
                  </div>
                  <div className="ml-4">
                    <div className="text-3xl flex items-center text-purple-400">
                      <span><MdArrowDropDown size={30} /> </span>
                    </div>
                  </div>
                </div>
              </div>
            </MaterialCard>
          </div>
          <div className='p-4'>
            <div className="bg-blue-100/30 flex">
              <button onClick={() => handleDisplay("courses")} className={`flex items-center px-5 py-3 border ${display === "courses" ? "bg-gray-50 text-purple-400" : "bg-transparent"}`}>
                <span className='mr-1'>
                  <MdOutlineCollectionsBookmark size={20} />
                </span>
                Courses</button>
              <button onClick={() => handleDisplay("users")} className={`flex items-center px-5 py-3 border ${display === "users" ? "bg-gray-50 text-purple-400 " : "bg-transparent"}`}>
                <span className='mr-1'>
                  <MdOutlinePeopleAlt size={20} />
                </span>
                Users</button>
            </div>
            {
              display === "courses" && <AdminCourseTable getAllCourse={getAllCourse.data} />
            }
            {
              display === "users" && <UsersTable setGetAllUsers={setGetAllUsers} data={getAllUsers.data} />
            }


          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard