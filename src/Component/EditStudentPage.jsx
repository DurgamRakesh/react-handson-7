import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import './EditStudentPage.css'
import { EditData } from './Slice';

const EditStudentPage = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const index = (location.state.data)
  console.log(location.state.data);
  const newarray = useSelector((state) => state.Data);
  const dispatch = useDispatch();

  const newobj = {
    name: newarray[index].name,
    age: newarray[index].age,
    course: newarray[index].course,
    batch: newarray[index].batch,

  }

  const ChangeHandle = (e) => {
    newobj[e.target.name] = e.target.value;
  }

  const Update = (e) => {
    e.preventDefault();
    dispatch(EditData({ newobj, index }))
    navigate('/Component/Students')
  }

  const Canfun = () => {
    navigate('/Component/Students')
  }

  return (
    <>
      <h1 className='add-h1tag'>Edit Students Data</h1>
    <div className='editdiv'>
      <input type="text" onChange={ChangeHandle} name='name' placeholder={newarray[index].name} />
      <input type="number" onChange={ChangeHandle} name='age' placeholder={newarray[index].age} />
      <br />
      <input type="text" onChange={ChangeHandle} name='course' placeholder={newarray[index].course} />
      <input type="text" onChange={ChangeHandle} name='batch' placeholder={newarray[index].batch} />
      <br />
      <button className='updatebtn' onClick={Update}>Update</button>
      <button className='cbtn' onClick={Canfun}>Cancel</button>
    </div>
    </>
  )
}

export default EditStudentPage