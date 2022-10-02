import { AppBar, Button, Grid, Toolbar } from '@mui/material'
import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../index'
import { useAuthState } from 'react-firebase-hooks/auth'

const Navbar = () => {
  const {auth} = useContext(Context)
  const [user, loading, error] = useAuthState(auth)
  console.log(user)

  if (loading) {
    return <div>лоадинг...</div>
  }
  return (
    <div>
      <Link to='/login'>login</Link>
      <Link to='/chat'>chat</Link>
      <AppBar position="static" color={'secondary'}>
        <Toolbar>
          <Grid container justify={"flex-end"}>
            {
              user
                ? <Button onClick={() => auth.signOut()} variant={"outlined"}>Выйти</Button>
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