import { useEffect, useState } from "react"
import axios from "axios"
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3030/users")
      .then(res => {
        setColumns(Object.keys(res.data[0]))
        setRecords(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div className="p-5">
      <Table striped bordered hover>
        <thead>
          <tr >
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {
            records.map((record, index) => (
              <tr key={index}>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.email}</td>
                <td>
                  <Link className="btn  btn-warning" to={`/edit/${record.id}`}>Edit</Link>
                  <button className="btn btn-danger" onClick={()=>{handleSubmit(record.id)}}>delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>

    </div>
  )
  function handleSubmit(id){
    axios.delete("http://localhost:3030/users/"+id)
    .then(res => {
      alert('user deleted')
      Navigate('/')
    })
    .catch(err => console.log(err))
  }
}

export default App