import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Second = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);


  const loadApiContent = () => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data)
        setUsers(res.data);
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <button style={{ backgroundColor: "red" }} onClick={loadApiContent}><b>LOAD DATA</b></button><br/>
      {loading ? (
        <CircularProgress color='primary'/>
      ) : 
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "darkblue" }}><b>id</b></TableCell>
              <TableCell style={{ color: "darkblue" }}><b>name</b></TableCell>
              <TableCell style={{ color: "darkblue" }}><b>email</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell style={{ color: "darkred" }}>{user.id}</TableCell>
                <TableCell style={{ color: "darkred" }}>{user.name}</TableCell>
                <TableCell style={{ color: "darkred" }}>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>}
      
    </div>
  );
};

export default Second;