import { useEffect, useState } from "react"
import axios from "axios"
import Table from 'react-bootstrap/Table';

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
                  Del/Update
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>

    </div>
  )
}

export default App