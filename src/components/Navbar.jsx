import { AppBar, Button, Grid, Toolbar } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const isAuth = false
  return (
    <div>
      <Link to='/login'>login</Link>
      <Link to='/chat'>chat</Link>
      <AppBar position="static" color={'secondary'}>
        <Toolbar>
          <Grid container justify={"flex-end"}>
            {
              isAuth
                ? <Button variant={"outlined"}>Выйти</Button>
                : <Link to='/login'>
                  <Button variant={"outlined"}>логин</Button>
                </Link>
            }
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar