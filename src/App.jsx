import React, { useEffect } from 'react'
import Aos from 'aos'
import 'react-toastify/dist/ReactToastify.css';
import "aos/dist/aos.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
import AuthContextProvider from './components/context/AuthContext';
import CPDDetails from './pages/CPDDetails';
import Dashboard from './pages/Dashboard';


const App = () => {
  useEffect(() => {
    Aos.init({
      // disable: 'mobile',
      // offset: 200,
      duration: 400,
      // easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

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
      <AuthContextProvider>
        <ResourceContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layouts />}>
                <Route index element={<Home />} />
                <Route path='/rqfnvq_courses' element={<FlexibleCourses />} />
                <Route path='/course/:id' element={<CourseDetails />} />
                <Route path='/practical_course' element={<PhysicalCourses />} />
                <Route path='/practical_course/course' element={<PhysicalCourseList />} />
                <Route path='/practical_course/course/:id' element={<PhysicalCourseDetails />} />
                <Route path='/prep_training' element={<PrepTraining />} />
                <Route path='/cpd_course' element={<CPDCourses />} />
                <Route path='/cpd_course/:id' element={<CPDDetails />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registration' element={<Registration />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ResourceContextProvider>
      </AuthContextProvider>
    </>
  )
}

export default App