import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layouts from './components/layout/Layout'
import Home from './pages/Home'
import FlexibleCourses from './pages/FlexibleCourses'

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path='/flexible_courses' element={<FlexibleCourses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App