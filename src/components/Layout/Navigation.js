import React from 'react';
import {  NavLink, useNavigate} from "react-router-dom"
import styles from './Navigation.module.css';

const Navigation = (props) => {
const navigate = useNavigate();

function outHandler() {
  navigate('/');
}

  return (
  <div>
    <h1>welcome to main page</h1>
  
    
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
            <button onClick={outHandler}>Logout</button>
          </li>
        
      </ul>
    </nav>
    </div>
  
  
      
  );
};

export default Navigation;
