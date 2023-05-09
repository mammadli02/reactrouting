import { useEffect, useState } from 'react';
import {  deleteProductById, getAllProducts } from '../../api/httprequests';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Table } from '@mui/material';
import { Link } from 'react-router-dom';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const AdminEmployees = () => {
  const [datas,setDatas]=useState([]);
  useEffect(()=>{
    getAllProducts().then(data=>{

      setDatas(data)
    })
  },[])
  
  return (
    <section style={{width:'80%', margin:'30px auto', padding:'30px', backgroundColor:'#e7e9eb'} } >
   <Table columns={columns} dataSource={data} onChange={onChange} />
  
      
        
     
      <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Surname</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Salary</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">Delete Button</TableCell>
            <TableCell align="right">Edit Button</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((employe) => (
            <TableRow
              key={employe.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {employe.name}
              </TableCell>
              <TableCell align="right">{employe.surname}</TableCell>
              <TableCell align="right">{employe.age}</TableCell>
              <TableCell align="right">{employe.salary}</TableCell>
              <TableCell align="right">{employe.position}</TableCell>
              <TableCell align="right"> <button><Link to={`addeditemployee/${employe.id}`}>Edit</Link></button></TableCell>
              <TableCell align="right"><button onClick={()=>{
                
                deleteProductById(employe.id)
                let filtered=datas.filter((item)=>item.id!==employe.id)
                setDatas(filtered)
              }

              } >Delete</button> </TableCell>
              
            
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
          
    
   
      </section>
  ) 
    }


export default AdminEmployees