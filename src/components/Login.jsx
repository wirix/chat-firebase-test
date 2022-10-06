import { Button, Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { Context } from '../index'
import firebase from 'firebase/compat/app'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom'

const Login = () => {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const { user } = await auth.signInWithPopup(provider)
  }

  return (
    <Container>
      <Grid container style={{height: window.innerHeight - 50}} alignItems={'center'} justifyContent={'center'}>
        <Grid style={{background: 'gray'}}>
          <Box>
            {user ? <Navigate to='/chat' /> : <Button onClick={login}>Войти с помощью Google</Button>}
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login