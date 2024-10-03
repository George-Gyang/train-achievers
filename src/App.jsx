import React, { useEffect } from 'react'
import Aos from 'aos'
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
          </Route>
        </Routes>
      </BrowserRouter>
    </ResourceContextProvider>
  )
}

export default App