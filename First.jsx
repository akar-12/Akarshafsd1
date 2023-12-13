import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const First = () => {
  var [users, setUsers] = useState([])
    var[loading,setlLoading]= useState(false)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data) ;
        setlLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
        {loading?<CircularProgress color='primary'/>:
        <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{color:'red'}}>ID</TableCell>
              <TableCell style={{color:'red'}}>Name</TableCell>
              <TableCell style={{color:'red'}}>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user,i) => (
              <TableRow>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>}
      
    </div>
  )
}

export default First
