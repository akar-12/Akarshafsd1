import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
            <Typography>MY APP</Typography>
                <Button variant='contained' color='error'>
                <Link to ={'/'}>Home</Link>
                </Button> &nbsp;&nbsp;
                <Button variant='contained' color='error'>
                    <Link to={'/Todo'}>Log In</Link>
                    </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar