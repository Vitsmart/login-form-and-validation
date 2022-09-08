import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import Card from '../UI/Card';
import styles from './Login.module.css';
import Button from '../UI/Button';

const Login = (props) => {
  const navigate = useNavigate();
//   const [enteredEmail, setEnteredEmail] = useState('');
//   const [emailIsValid, setEmailIsValid] = useState();
//   const [enteredPassword, setEnteredPassword] = useState('');
//   const [passwordIsValid, setPasswordIsValid] = useState();
//   const [formIsValid, setFormIsValid] = useState(false);
  


// useEffect(() => {
  
//   setFormIsValid(
//     enteredEmail.includes('@') && enteredPassword.trim().length > 6);

  
// }, [enteredEmail, enteredPassword]);


//   const emailChangeHandler = (event) => {
//     setEnteredEmail(event.target.value);
//   }

//   const passwordChangeHandler = (event) => {
//     setEnteredPassword(event.target.value);

//   };

//   const validateEmailHandler = () => {
//     setEmailIsValid(enteredEmail.includes('@'));
//   };

//   const validatePasswordHandler = () => {
//     setPasswordIsValid(enteredPassword.trim().length > 6);
//   };

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   props.onLogin(enteredEmail, enteredPassword);
  // }  
 const clickLogin = () => {
 navigate("/main");}


  
  
  return (
    <Card className={styles.login}>
      <form>
        <div
        className={styles.control}> 
        
        
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
        
            
            
          />
        </div>
        <div className={styles.control}>
        
        
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            />
        </div>
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} onClick={clickLogin}>
            Login
          </Button>
        </div>
        <div>
          <button className='btn'><Link to="/signup">Register</Link></button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
