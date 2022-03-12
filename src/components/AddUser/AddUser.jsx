import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import { ModalBox } from './ModalBox'
import Header from '../Header/Heading'
import Footer from '../Footer/Footer'
import './AddUser.css'

const AddUser = () => {
  const { users, addUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [state, setState] = useState({
    ID: "",
    fname: "",
    lname: ""
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      key: Number(state.ID),
      id: Number(state.ID),
      fname: state.fname,
      lname: state.lname
    }
    const isFound = users.find(user => user.id === newUser.id);
    if(!isFound){
      console.log(newUser);
      addUser(newUser);
      navigate('/');
    } else{
      ModalBox();
    }
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }

  return (
    <>
    <Header />
    <Form className="form-container" onSubmit={onSubmit}>
      <h1 className="heading-text">Add a new Person</h1>
      <FormGroup>
        <Label className="label-text">ID</Label>
        <Input 
        type="text" 
        placeholder="Enter ID number" 
        name="ID" 
        value={state.ID}
        onChange={handleChange} 
        required/>
      </FormGroup>
      <FormGroup>
        <Label className="label-text">First Name</Label>
        <Input 
        type="text" 
        placeholder="Enter First Name" 
        name="fname" 
        value={state.fname}
        onChange={handleChange} 
        required/>
      </FormGroup>
      <FormGroup>
        <Label className="label-text">ID</Label>
        <Input 
        type="text" 
        placeholder="Enter Last Name" 
        name="lname" 
        value={state.lname}
        onChange={handleChange} 
        required/>
      </FormGroup>
      <button type="submit" className="btn btn-outline-dark mt-3">Submit</button>
      <Link to="/" className="btn btn-outline-danger ms-3 mt-3">Cancel</Link>
    </Form>
    <Footer />
    </>
  )
}

export default AddUser
