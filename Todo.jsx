import { Button } from '@mui/base'
import { TextField } from '@mui/material'
import React, { useState } from 'react'

const Todo = () => {
    const [names,setNames]=useState()
    const[data,setData]=useState([])

    const inputHandler =(e)=>{
        setNames(e.target.value)
    }

    const addHandler =()=>{
        setData((data=>[...data,names]))
        setNames('')
    }

  return (
    <div>
        <TextField variant='outlined' placeholder='Enter Text' onChange={inputHandler}></TextField><br /><br />
        <Button variant='contained' color='secondary' onClick={addHandler}>SUBMIT</Button><br /><br />
        
        { 
        data.map((value,index)=>{
        return(
            <li key={index}>{value}</li>
 )})}
    
    </div>
  )
}

export default Todo