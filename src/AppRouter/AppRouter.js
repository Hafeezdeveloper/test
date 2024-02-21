import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Screenzz from './Screenzz'

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Screenzz />} />
        {/* <Route path='/*' element={<MainDashboard />} /> */}
        {/* <Route path='' element={<MainDashboard />} />
        <Route path='/' element={<MainDashboard />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter
