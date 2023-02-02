import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './EditStudentPage.css'
import { AddData } from './Slice';

const AddStudents = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newobject = {
    name: '',
    age: '',
    course: '',
    batch: ''
  }

  const Changefun = (e) => {
    newobject[e.target.name] = e.target.value;
  }

  const Updatefun = (e) => {
    e.preventDefault();
    dispatch(AddData( newobject ))
    navigate('/Component/Students')
  }

  const Cancelfun = (e) => {

    navigate('/Component/Students')
  }

  return (
    <>
      <h1 className='add-h1tag'>Add Students Here</h1>
      <div className='addstudents'>
        <input type="text" onChange={Changefun} name='name' placeholder='name' />
        <input type="number" onChange={Changefun} name='age' placeholder='age' />
        <br />
        <input type="text" onChange={Changefun} name='course' placeholder='course' />
        <input type="text" onChange={Changefun} name='batch' placeholder='batch' />
        <br />
        <button className='submitbtn' onClick={Updatefun}>Submit</button>
        <button className='cancelbtn' onClick={Cancelfun}>Cancel</button>
      </div>
    </>
  )
}

export default AddStudents