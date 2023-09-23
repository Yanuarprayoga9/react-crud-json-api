import { useEffect,useState } from 'react'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { useNavigate } from 'react-router';
function Add() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  const Navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email };
    axios.post("http://localhost:3030/users", data)
    .then(res => {
      alert('user added')
      Navigate('/')
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='p-5 bg-light'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="name" onChange={e=>setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" onChange={e =>setEmail(e.currentTarget.value)}/>
        </Form.Group> 
        <button className='btn bg-success' type='submit'>submit</button>
      </Form>
    </div>
  )
}

export default Add