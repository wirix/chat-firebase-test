import { Button, Grid, TextField } from '@mui/material'
import { Container } from '@mui/system'
import React, { useContext, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Context } from '..'
import firebase from "firebase/compat/app";

const Chat = () => {
  const { auth, firestore } = useContext(Context)
  const [user] = useAuthState(auth)
  const [value, setValue] = useState('')
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  )
  
  const sendMessage = async () => {
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setValue('')
  }

  if (loading) {
    return <div>............</div>
  }

  return (
    <div>
      <Container>
        <div style={{width: '80%', height: '70vh', border: '1px solid #000'}}>
          {messages.map(item => (
            <div key={item.createdAt}>
              <div><img alt='' src={item.photoURL} /></div>
              <div>{item.displayName}</div>
              <div style={{ border: item.uid === user.uid ? '1px solid #000' : '1px solid red'}}>{item.text}</div>

            </div>
          ))}
        </div>
        <Grid
          container direction={'column'} alignItems={'flex-end'}
          style={{ width: '80px' }}
        >
          <TextField onChange={(e) => setValue(e.target.value)} variant='outlined' fullWidth value={value} />
          <Button onClick={sendMessage}>отправить</Button>
        </Grid>
      </Container>
    </div>
  )
}

export default Chat