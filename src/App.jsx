import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layouts from './components/layout/Layout'

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layouts />}>
          {/* <Route index element={<Home />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App