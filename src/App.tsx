import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from './Login';
import Index from './Index';
import Register from './Register';
import NotFound from './NotFound';

function App() {

  const fakeIsAuthenticated: boolean = false // getthisfrom usercontextprovider
  type Props = { logged: boolean }
  const IsGuest = ({ logged }: Props) => {
    return (!logged
      ? <Outlet />
      : <Navigate to='/' />)
  }

  const IsMember = ({ logged }: Props) => {
    return (logged
      ? <Outlet />
      : <Navigate to='/guest/login' />)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IsMember logged={fakeIsAuthenticated} />} >
          <Route index element={<Index />} />
        </Route>
        <Route path='guest' element={<IsGuest logged={fakeIsAuthenticated} />} >
          <Route path='login' element={<Login />} />
          <Route path='register' index element={<Register />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
