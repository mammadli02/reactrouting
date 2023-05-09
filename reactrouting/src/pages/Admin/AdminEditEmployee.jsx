import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editProductById, getProductById } from '../../api/httprequests';

const AdminEditEmployee = () => {
  const {id}=useParams();
  const navigate=useNavigate()
  const[employes,setEmployes]=useState([])
  useEffect(()=>{
    getProductById(id).then(res=>{
setEmployes(res)
console.log(res);
    })
  },[id]);
  function handleSubmit(e){
    editProductById(id,employes)
    navigate('/admin')
  }
  function handleChange(e){
    setEmployes({...employes,[e.target.name]:e.target.value})
  }
  return (
    <form style={{margin:'50px auto', width:'80%'}} onSubmit={(e)=>handleSubmit(e)}>
    <input onChange={(e)=>handleChange(e)}  name="name" type="text" value={employes.name} placeholder='Name'/>
    <input  onChange={(e)=>handleChange(e)} name='surname' type="text"b value={employes.surname}   placeholder='Surname'/>
    <input onChange={(e)=>handleChange(e)} name='age' type="number"  value={employes.age} placeholder='Age' min={0} required/>
    <input onChange={(e)=>handleChange(e)} name='salary' type="number"  value={employes.salary} placeholder='Salary' min={0} required/>
    <input onChange={(e)=>handleChange(e)} name='position' type="text" value={employes.position} placeholder='Position'/>
    <button type='submit'>Edit</button>
  </form>
  )
}

export default AdminEditEmployee