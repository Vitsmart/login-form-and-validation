import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import SignUp from './components/signUp/SignUp';
import {UserAuthContextProvider} from "./UserAuthContext"
import Layout from './components/Layout/Layout';


function App() {
  
  


// function handleLogin() {
//   setIsLoggedIn(true);
//   <Link to="/main"></Link>
// }
// // function handleLogout() {
// //   navigate('/');
  
// //}

// useEffect (() => {
//   const storedUserLog = localStorage.getItem('isLoggedIn');
//   if (storedUserLog === '1') {
//     setIsLoggedIn(true);
//   }
// }, []);



//   // const loginHandler = (email, password) => {
//   //   // We should of course check email and password
//   //   // But it's just a dummy/ demo anyways
//   // localStorage.setItem('isLoggedIn', '1');
//   //   setIsLoggedIn(true);
  
//   // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // };

  return (
    <React.Fragment>
     
     <UserAuthContextProvider>
      <Routes>
      
        <Route exact path='/main' element={<Layout />}/>
        <Route exact path ='/' element={<Home />}/>
  
        <Route exact path='/login' element={<Login />}/>
        
          <Route exact path='/signup' element={<SignUp />}/>
        
        
      
      </Routes>
      </UserAuthContextProvider>
  
    </React.Fragment>
    
  );
}

export default App;
