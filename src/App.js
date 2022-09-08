import React, { useEffect, useState } from 'react'
import {  Link, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import SignUp from './components/signUp/SignUp';
import Layout from './components/Layout/Layout';
import {userAuthContextProvider} from "./UserAuthContext"


function App() {
  
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  


function handleLogin() {
  setIsLoggedIn(true);
  <Link to="/main"></Link>
}
// function handleLogout() {
//   navigate('/');
  
//}

useEffect (() => {
  const storedUserLog = localStorage.getItem('isLoggedIn');
  if (storedUserLog === '1') {
    setIsLoggedIn(true);
  }
}, []);



  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  // localStorage.setItem('isLoggedIn', '1');
  //   setIsLoggedIn(true);
  
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // };

  return (
    <React.Fragment>
     
     <userAuthContextProvider> 
      <Routes>
      
        <Route exact path='/main' element={<Layout />}/>
        <Route exact path ='/' element={<Home />}/>
  
        <Route exact path='/login' element={<Login onLogin={handleLogin}/>}/>
        
          <Route exact path='/signup' element={<SignUp />}/>
        
        
      
      </Routes>
      </userAuthContextProvider>
  
    </React.Fragment>
    
  );
}

export default App;
