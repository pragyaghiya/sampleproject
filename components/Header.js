import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import "./header.css";
import { useAuth } from '../utils/auth';

const Header = () => {
  const auth = useAuth()
  const handleLogout = ()=>{
      auth.logout()
      return <Navigate to="/"/>
  }
  
  return (
    <div>
        <header className="header">
            
            
            <Link to='/search' className="header--title">
            <h2 className="header--title">Rally Health India</h2>
            </Link>    

            
            <div className='header--profile'>
           
            <button className="header-ProfileBtn" onClick={handleLogout} type=''>Logout</button>
            </div>
        </header>  

        <div className='container'>
            <div className="col-lg-12">
                <p>Hello {auth.user}, Who are you looking for?</p>
            </div>
    </div>


    </div>

  
        

  )
}

export default Header