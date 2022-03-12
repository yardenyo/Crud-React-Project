import React, { useState, useContext, useEffect } from 'react'
import Heading from '../Header/Heading'
import Footer from '../Footer/Footer'
import './EditUser.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState'
import { Form, FormGroup, Label, Input } from 'reactstrap'


const EditUser = (props) => {
  const [selectedUser, setSelectedUser] = useState({
    key: "",
    id: "",
    fname: "",
    lname: ""
  });

  const { users, editUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  const id = useParams();

  useEffect(() => {
    const userId = id;
    const selectedUser = users.find(user => user.id === Number(userId.id))
    setSelectedUser(selectedUser);
  },[id, users])

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    navigate('/');
  }

  const handleChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  }

  return (
    <>
    <Heading />
    <Form className="form-container" onSubmit={onSubmit}>
      <h1 className="heading-text">Edit User</h1>
      <FormGroup>
        <Label className="label-text">ID</Label>
        <Input 
        type="text" 
        name="id" 
        value={selectedUser.id}
        onChange={handleChange} 
        readOnly />
      </FormGroup>
      <FormGroup>
        <Label className="label-text">First Name</Label>
        <Input 
        type="text" 
        name="fname" 
        value={selectedUser.fname}
        onChange={handleChange} 
        required/>
      </FormGroup>
      <FormGroup>
        <Label className="label-text">ID</Label>
        <Input 
        type="text" 
        name="lname" 
        value={selectedUser.lname}
        onChange={handleChange} 
        required/>
      </FormGroup>
      <button type="submit" className="btn btn-outline-dark mt-3">Save Changes</button>
      <Link to="/" className="btn btn-outline-danger ms-3 mt-3">Cancel</Link>
    </Form>
    <Footer />
    </>
  )
}

export default EditUser