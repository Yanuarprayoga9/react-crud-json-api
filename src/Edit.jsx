import { useEffect, useState,  } from 'react'
import Form from 'react-bootstrap/Form'
import { useParams } from 'react-router'
import axios from 'axios'
import { useNavigate } from 'react-router';

function Edit() {
    const { id } = useParams();
    let [data, setData] = useState({id:id,name:"nama",email:"nama"} );
    const Navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3030/users/"+id)
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    let handleSubmit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3030/users/"+id, data)
            .then(res => {
                alert('user updated')
                Navigate('/')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='p-5 bg-light'>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="text" placeholder="name"  value={data.id} disabled/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="name"  value={data.name} onChange={e=>setData({...data,name:e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com"  value={data.email} onChange={e=>setData({...data,email:e.target.value})}/>
                </Form.Group>
                <button className='btn bg-success' type='submit'>submit</button>
            </Form>
        </div>
    )
}

export default Edit