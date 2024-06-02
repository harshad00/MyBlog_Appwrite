import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import authService from './appwrit/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
      <div className='w-full min-h-screen flex flex-wrap content-baseline bg-slate-400'>
        <div className='w-full block'>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    ) : (
      <div className='w-full min-h-screen flex justify-center items-center bg-slate-400'>
        <p>Loading...</p>
      </div>
    )
  
}

export default App;