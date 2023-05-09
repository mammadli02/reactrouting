import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { postProduct } from '../../api/httprequests';
import { useNavigate } from 'react-router-dom';
const AdminAddEmployee = () => {
  const [newEmplo, setNewEmplo]=useState({})
  const navigate=useNavigate()
 async function handleSubmit(e){
e.preventDefault(); 
newEmplo.id=uuidv4()
 await postProduct(newEmplo)
navigate('/admin/')

  }
function handleChange(e){
  setNewEmplo({...newEmplo,[e.target.name]: e.target.value})
}

  return (
<>
<form style={{margin:'50px auto', width:'80%'}} onSubmit={handleSubmit}>
  <input name="name" type="text" onChange={(e)=>handleChange(e)} placeholder='Name'/>
  <input name='surname' type="text" onChange={(e)=>handleChange(e)}  placeholder='Surname'/>
  <input name='age' type="number" onChange={(e)=>handleChange(e)}  placeholder='Age' min={0} required/>
  <input name='salary' type="number" onChange={(e)=>handleChange(e)}  placeholder='Salary' min={0} required/>
  <input name='position' type="text" onChange={(e)=>handleChange(e)}  placeholder='Position'/>
  <button type='submit'>Add</button>
</form>
</>
  )
}
 
export default AdminAddEmployee