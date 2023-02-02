import React from 'react'
import {NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Component/Home'
import Students from './Component/Students'
import Contact from './Component/Contact'
import EditStudentPage from './Component/EditStudentPage'
import AddStudents from './Component/AddStudents'


const App = () => {
  return (
  
      <>
      <div className='main'>
        <nav>
          <h1>WELCOME</h1>
          <ul>
            <li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to={'./Comonent/Home'}>Home</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to={'./Component/Students'}>Students</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to={'./Component/Contact'}>Contact Us</NavLink></li>
          </ul>
        </nav>
      <Routes>
        <Route path='/Comonent/Home' element={<Home/>}/>
        <Route path='/Component/Students' element={<Students/>}/>
        <Route path='/Component/Contact' element={<Contact/>}/>
        <Route path='/Component/EditStudentPage' element={<EditStudentPage/>}/>
        <Route path='/Component/AddStudents' element={<AddStudents/>}/>
      </Routes>
      </div>
      
      </>

  )
}

export default App