import React, { useContext, useEffect } from 'react'
import Aos from 'aos'
import 'react-toastify/dist/ReactToastify.css';
import "aos/dist/aos.css"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layouts from './components/layout/Layout'
import Home from './pages/Home'
import FlexibleCourses from './pages/FlexibleCourses'
import CourseDetails from './pages/CourseDetails'
import PhysicalCourses from './pages/PhysicalCourses'
import PhysicalCourseList from './pages/PhysicalCourseList'
import PhysicalCourseDetails from './pages/PhysicalCourseDetails'
import ResourceContextProvider from './components/context/ResourceContext'
import PrepTraining from './pages/PrepTraining'
import CPDCourses from './pages/CPDCourses'
import Login from './pages/Login'
import RegistrationForm from './components/registeration/RegistrationForm'
import Registration from './pages/Registration'
import { ToastContainer } from 'react-toastify'
import { AuthContext } from './components/context/AuthContext';
import CPDDetails from './pages/CPDDetails';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import AdminLayout from './admin-layout/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';


const App = () => {
  const { userInfo } = useContext(AuthContext)
  useEffect(() => {
    Aos.init({
      // disable: 'mobile',
      // offset: 200,
      duration: 400,
      // easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])
console.log(userInfo)
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <ResourceContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layouts />}>
              <Route index element={<Home />} />
              <Route path='/rqfnvq_courses' element={<FlexibleCourses />} />
              <Route path='/course/:id' element={<CourseDetails />} />
              <Route path='/practical_course' element={<PhysicalCourses />} />
              <Route path='/practical_course/course' element={<PhysicalCourseList />} />
              <Route path='/practical_course/:id' element={<PhysicalCourseDetails />} />
              <Route path='/prep_training' element={<PrepTraining />} />
              <Route path='/cpd_course' element={<CPDCourses />} />
              <Route path='/cpd_course/:id' element={<CPDDetails />} />
              {userInfo?.role === "admin" && (
                <Route path='/dashboard' element={<Dashboard />} />
              )}
              <Route path='/admin' >
                <Route index element={<Login />} />
                {userInfo && (
                  <Route path='/admin/dashboard' element={<AdminLayout />}>
                    <Route index element={<AdminDashboard />} />
                    {/* <Route path='/admin/dashboard/add_user' element={<AddUser />} />
                    <Route path='/admin/dashboard/career_portal' element={<AdminCareer />} />
                    <Route path='/admin/dashboard/admin_portal' element={<AdminPortal />} />
                    <Route path='/admin/dashboard/housing_portal' element={<HousingPortal />} />
                    <Route path='/admin/dashboard/job_applications' element={<JobApplications />} />
                    <Route path='/admin/dashboard/messages' element={<ContactMessages />} />
                    <Route path='/admin/dashboard/request' element={<CallBackRequest />} />
                    <Route path='/admin/dashboard/reviews' element={<ReviewsPortal />} /> */}
                  </Route>
                )}

              </Route>
              < Route path='/login' element={<Login />} />
              <Route path='/registration' element={<Registration />} />
              <Route path="*" element={<Navigate to="/not-found" replace />} />
              <Route path="/not-found" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ResourceContextProvider>
    </>
  )
}

export default App