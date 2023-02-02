import React from 'react'
import { useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
import './Table.css'

const Table = () => {
  const newarray = useSelector((state) => state.Data);
  return (
    <div>
        <table className='tab'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          newarray.map((data,i) =>(
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.course}</td>
              <td>{data.batch}</td>
              <td>
                {
                  <Link to='/Component/EditStudentPage' state={{data:i}}>Edit</Link>
                }
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </div>
  )
}

export default Table