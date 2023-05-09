import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../api/httprequests';
import { Card, Col, Row } from 'antd';
import Search from './Search';
import { Link } from 'react-router-dom';
const Employees = () => {
let [employess,setEmployess]=useState([]);
const [todosState, setTodosState] = useState(employess);
useEffect(()=>{
  getAllProducts().then(data=>{
    // console.log(data);
    setEmployess(data)
    setTodosState(data)
  })
},[])



  return (
  <>
 <section style={{margin:'50px auto', width:'85%', }}>
 <Search todosState={todosState} setEmployess={setEmployess} employess={employess} placeholder="search title(s)"/>

<Row gutter={[20,30] }style={{marginBottom:'30px'}} >

{employess && employess.map((employe)=>{
  return(
    <>
    <Col  span={24} key={employe.id} className="gutter-row"  xs={24} sm={24} md={12} lg={6}>
      
      <Card key={employe.id}  style={{backgroundColor:'#f0f2f5', fontSize:'15px', fontWeight:'bolder'}}      
       bordered={true} >
     <Link to={`${employe.id}`}><p>{employe.name} </p></Link>  
      <p> {employe.surname}</p> 
       <p>{employe.age}</p> 
     <p>{employe.salary}</p>   
       <p>{employe.position}</p> 
      </Card>
    </Col>
  </>
  )
  })}

</Row >
       </section> 

  </>
  )
}

export default Employees