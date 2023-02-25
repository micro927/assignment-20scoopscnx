import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from './Login';
import Index from './Index';
import Register from './Register';
import NotFound from './NotFound';
import { AuthProvider, useAuth } from './components/UserProvider';

function App() {
  const { loginInformation } = useAuth()
  const isLoggedIn = loginInformation.isLoggedIn

  const IsGuest = ({ logged }: { logged: boolean }) => {
    return (!logged
      ? <Outlet />
      : <Navigate to='/' />)
  }
  const IsMember = ({ logged }: { logged: boolean }) => {
    return (logged
      ? <Outlet />
      : <Navigate to='/guest/login' />)
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IsMember logged={isLoggedIn} />} >
            <Route index element={<Index />} />
          </Route>
          <Route path='guest' element={<IsGuest logged={isLoggedIn} />} >
            <Route index element={<Navigate to="/guest/login" />} />
            <Route path='login' element={<Login />} />
            <Route path='register' index element={<Register />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
