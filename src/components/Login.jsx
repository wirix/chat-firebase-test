import { Button, Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { Context } from '../index'
import firebase from 'firebase/compat/app'

const Login = () => {
  const { auth } = useContext(Context)

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const { user } = await auth.signInWithPopup(provider)
    console.log(user)
  }

  return (
    <Container>
      <Grid container style={{height: window.innerHeight - 50}} alignItems={'center'} justifyContent={'center'}>
        <Grid style={{background: 'gray'}}>
          <Box>
            <Button onClick={login}>Войти с помощью Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login