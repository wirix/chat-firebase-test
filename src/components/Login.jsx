import { Button, Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Login = () => {
  return (
    <Container>
      <Grid container style={{height: window.innerHeight - 50}} alignItems={'center'} justifyContent={'center'}>
        <Grid style={{background: 'gray'}}>
          <Box>
            <Button>Войти с помощью Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login