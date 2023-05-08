import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Homef = () => {
    var [value,setvalue] = useState([])
    useEffect(()=>{axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
        setvalue(response.data)

    })},[])
  return (
    <div>
        <Typography  variant='h2' sx={{flexGrow: 2}} fontFamily={"Cursive"} fontSize={30}>Home Page</Typography>
          <Table className='Tabclass'>
        <TableHead className='headclass'>
            <TableRow>
                <TableCell> UserID</TableCell>
                <TableCell> id</TableCell>
                <TableCell> Title</TableCell>
                <TableCell> Body</TableCell>
            </TableRow>
        </TableHead>
        <TableBody >
        {
            value.map((data,index)=>{
                return <TableRow className='bodyclass'>
                    <TableCell>{data.userId}</TableCell>
                    <TableCell>{data.id}</TableCell>
                    <TableCell>{data.title}</TableCell>
                    <TableCell>{data.body}</TableCell>
                </TableRow>
                })
        }
        </TableBody>
      </Table> 
    </div>
  )
}

export default Homef
