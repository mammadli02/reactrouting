import Input from 'antd/es/input/Input';
import React from 'react'

const Search = ({todosState,setEmployess,employess, placeholder}) => {
    function handleSearch(e) {
        if (e.target.value.trim()==="") {
            console.log(e.target.value);
            setEmployess(todosState);
        }
        else{
         let filteredtodos = todosState.filter(emplo => emplo.name.toLowerCase().includes(e.target.value.toLowerCase().trim()));
         setEmployess(filteredtodos);
        }
    }
  return (
    <>
      <Input onChange={(e)=>handleSearch(e)} placeholder={placeholder} style={{margin: '50px auto ', width:'85%'  }}/>
      
    </>
  )
}

export default Search