import React, { Fragment } from 'react';
import Login from '../Login/Login';
import styles from './Home.module.css';

const Home = (props) => {
  return (
    <Fragment>
    <div className={styles.wrap}>
    <div>
      
      <h1>Explore best tourist places.</h1>
      
      <p>25 most beautiful places to visit this season...</p>
    
    </div>
    
    <div>

<Login />

    </div>
    </div>

    </Fragment>
  );
};

export default Home;
