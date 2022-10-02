import { useContext } from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Context } from './index';
import './App.css';
import Chat from './components/Chat';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/chat' element={user ? <Chat /> : <Navigate to='/login' /> } />
      </Routes>
    </HashRouter>
  );
}

export default App;