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
        <div>
          {messages.map(item => (
            <div  key={item.createdAt} style={{position: 'relative', border: item.uid === user.uid ? '1px solid #000' : '1px solid red'}}>
              {
                item.uid === user.uid ? <></>
                  : <div> <span style={{ width: '40px', height: '40px' }} ><img alt='' src={item.photoURL} style={{ width: '40px', height: '40px', borderRadius: '50%' }} /></span>
                    <span style={{ position: 'absolute', top: '12px' }}>{item.displayName}</span></div>
              }
              <div style={{ textAlign: item.uid === user.uid ? 'right' : 'left'}}>{item.text}</div>
            </div>
          ))}
        </div>
          <div style={{position: 'fixed', bottom: 0, backgroundColor: '#fff', height: '40px', width: '400px'}} >
              <input style={{padding: '5px', outline: 'none', border: '1px solid #3577EF', borderRadius: '10px'}} onChange={(e) => setValue(e.target.value)} variant='outlined' value={value} />
              <button onClick={sendMessage}>Отправить</button>
          </div>
      </Container>
    </div>
  )
}

export default Chat