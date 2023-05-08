import { AppBar, Button,Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Content = () => {
  return (
    <div>
    <AppBar position='static'>
        <Toolbar>
            
            <Button variant='contained' color='secondary'><Link to="/">Home</Link></Button>
            <Typography varient = "h2" sx={{flexGrow: 2}} fontFamily={"Cursive"} fontSize={30}>Blog App</Typography>
            
            <Button variant='contained' color='secondary'><Link to="/add">Add Blog</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Content
