import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header style={{ backgroundColor:'#e7e9eb',padding:'20px',  margin:'0 auto'}}>
    <ul style={{display:'flex', justifyContent:'space-between', width:'70%',margin:'0 auto', listStyle:'none',}}>
   
     <li >
       <Link style={{color:'black', textDecoration:'none',fontSize:'25px', fontWeight:'bolder'}} to=''>Employees </Link>
     </li>
     <li>
       <Link style={{color:'black', textDecoration:'none',fontSize:'25px',  fontWeight:'bolder'}} to='addemployee'>Add Employee</Link>
     </li>
     {/* <li>
       <Link style={{color:'black', textDecoration:'none',fontSize:'25px'}} to='employeedetail'>EmployeeDetail</Link>
     </li> */}
    </ul>
    </header>
  )
}

export default Navbar