import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layouts from './components/layout/Layout'
import Home from './pages/Home'
import FlexibleCourses from './pages/FlexibleCourses'
import CourseDetails from './pages/CourseDetails'

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path='/flexible_courses' element={<FlexibleCourses />} />
          <Route path='/course/:id' element={<CourseDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App