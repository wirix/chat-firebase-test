import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Chat from './components/Chat';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  const isAuth = false
  
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/chat' element={ isAuth ? <Chat /> : <Navigate to='/login' /> } />
      </Routes>
    </HashRouter>
  );
}

export default App;