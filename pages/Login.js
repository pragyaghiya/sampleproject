import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../utils/auth';

const Login = () => {
  const auth = useAuth()
  // const navigate = useNavigate()
  // const handleLogged = ()=>{
  //   navigate('/search')
  // }
  if(!auth.user)
  {return (
    <LoginForm/>
  )}
  else{
    return(
      <Navigate to='/search'/>)
      // <button className='loggedIn' onClick={handleLogged}>Search</button>)
}
}

export default Login