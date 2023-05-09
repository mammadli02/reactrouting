import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../api/httprequests';
import Card from 'antd/es/card/Card';
import { Col } from 'antd';

const EmployeeDetail = () => {
  const{id}=useParams();
  const[employs,setEmploys]=useState({})
  // console.log(id);
  useEffect(()=>{
    getProductById(id).then(res=>{
      setEmploys(res)
    })
  })
  return (
<>

<section style={{display:'flex', justifyContent:'center', alignItems:'center', height:'450px'}}>
<Col span={8} key={employs.id}>

<Card key={employs.id}  style={{backgroundColor:'#f0f2f5', fontSize:'15px', fontWeight:'bolder'}}      
    bordered={true} >
 <p>Employes name: {employs.name} </p>  
   <p> Employes surname: {employs.surname}</p> 
    <p>Employes age: {employs.age}</p> 
  <p>Employes salary: {employs.salary}</p>   
    <p>Employes position: {employs.position}</p> 
   </Card>

</Col>
</section>





</>
   
  )
}

export default EmployeeDetail