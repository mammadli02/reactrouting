import axios from "axios"
import {  BASE_URL  } from  './base_url'
// get all products
export const getAllProducts=async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/employess`)
    .then(res=>{
globalData=res.data;
    })
    return globalData;
}

//get product by id
export const getProductById=async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL}/employess/${id}`)
    .then(res=>{
        globalData=res.data;
    })
    return globalData;
}
//post new product
export const postProduct=(newProduct)=>{
    axios.post(`${BASE_URL}/employess`, newProduct)
}
//delete product by id
export  const deleteProductById=(id)=>{
    axios.delete(`${BASE_URL}/employess/${id}`)
}
//edit product by id
export const editProductById=(id,updateProduct)=>{
axios.put( `${BASE_URL}/employess/${id}`, updateProduct)
}