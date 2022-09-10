import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from "react-router-dom";
import Card from '../UI/Card';
import styles from './Login.module.css';
import Button from '../UI/Button';
import { useUserAuth } from '../../UserAuthContext';
import { auth, provider, signInWithRedirect } from '../../firebase';
import { getRedirectResult } from 'firebase/auth';

//   length > 6);
//   };

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   props.onLogin(enteredEmail, enteredPassword);
  // }  
//  const clickLogin = () => {
//  navigate("/main");}


  
const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const {login} = useUserAuth();

  const submitLoginHandler = async (e) => {
e.preventDefault();

try {
    await login(email, password);
    
} catch (error) {
   return (error.message); 
}
  };
 

  const googleSignIn = async (e) => {
    e.preventDefault();
    provider.addScope('profile');
provider.addScope('email');
    try {
         await signInWithRedirect(auth, provider);
        
          const result = getRedirectResult(auth);
          if (result) {
            const user = result.user;
            const credential = provider.credentialFromResult(auth, result);
            const token = credential.accessToken;
            console.log(user,token);
          }
          const operationType = result.operationType;
          console.log(operationType);
    } catch (error) {
        console.log(error.message);
    }
  };
  const {currentUser} = useUserAuth();
  
  
    if (currentUser) {
        return navigate('/');
    }




  return (
    <Card className={styles.login}>
      <form onSubmit={submitLoginHandler}>
        <div
        className={styles.control}> 
    
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
         
          />
        </div>
        <div className={styles.control}>
        
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn}>
            Login
          </Button>
          <div>
            <button type="submit" onClick={googleSignIn}>SignIn with google</button>
          </div>
        </div>
        </form>
        <div className={styles.action}>
          Dont have an account? <Link to="/signup">Register</Link>
        </div>
      
    </Card>
  );
};

export default Login;
