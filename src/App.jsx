import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3030/user")
      .then(res => {
        setColumns(Object.keys(res.data[0]))
        setRecords(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            records.map((record, index) => (
              <tr key={index}>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}

export default App