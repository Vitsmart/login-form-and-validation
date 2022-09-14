import React from 'react';
import {  NavLink, useNavigate} from "react-router-dom"
import styles from './Navigation.module.css';
import { useUserAuth } from '../../UserAuthContext';

const Navigation = (props) => {

const navigate = useNavigate();
const {logOut} = useUserAuth();

const logoutHandler = async() => {
  try {
    await logOut();

     navigate('/');
   
  } catch (error) {
    console.log(error.message);
  }
 
}

  




  return (
  <div>
    <h1>Welcome to the main page</h1>
  
    
    <nav className={styles.nav}>
      <ul>
        
          <li>
            <NavLink to="/#">About Us</NavLink>
          </li>
        
        
          <li>
            <a href="/#">Products/Services</a>
          </li>
        
      
          <li>
            <NavLink to="/#">About Us</NavLink>
          </li>
        
        
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        
      </ul>
    </nav>
    </div>
  
  
      
  );
};

export default Navigation;
