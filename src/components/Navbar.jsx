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
    <header style={{padding: '10px', display: 'flex', justifyContent: 'space-between', backgroundColor: '#333'}}>
      <div>
        <Link to='/chat' style={{ fontSize: '20px', color: '#e2e2e2', textDecoration: 'none' }}>
          <button style={{outline: 'none', border: 'none', padding: '5px', }}>Чат</button>
        </Link>
        {/* <Link to='/login' style={{fontSize: '20px', color: '#e2e2e2', textDecoration: 'none'}}>Регистрация</Link> */}
      </div>
      {
        user
          ? <button style={{ outline: 'none', border: 'none', padding: '5px', }} onClick={() => auth.signOut()} variant={"outlined"}>Выйти</button>
          : <Link to='/login'>
            <button style={{outline: 'none', border: 'none', padding: '5px', }} variant={"outlined"}>Логин</button>
          </Link>
      }
    </header>
  )
}

export default Navbar