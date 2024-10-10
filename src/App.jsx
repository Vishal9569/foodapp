import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componentStore/home.jsx'
import Success from './componentStore/success.jsx'
import Error from './componentStore/Error.jsx'
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>

          <Route path='success'
            element={<Success />}  > </Route>
          <Route path='Error' element={<Error />}></Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
