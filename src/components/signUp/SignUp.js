import React from "react";
import styles from "./Signup.module.css"
import {Link, useNavigate} from "react-router-dom"
import { auth } from "../../firebase";
import {createUserWithEmailAndPassword} from 'firebase'


const SignUp = () => {
    const navigate = useNavigate();
    
    const validatePassword = () => {
        let isValid = true
        if (password !== '' && confirmPassword !== ''){
            if (password !== confirmPassword){
                isValid = false
                setError('passwords does not match')
            }
        }
        return isValid;
    };

    const submitRegHandler = (e) => {
        e.preventDefault();
function onRegister (){
setError('') 
if (validatePassword()) {
    createUserWithEmailAndPassword(auth,email,password)
    .then((res) => {
        console.log(res.user);
    })
    .catch(err => setError(err.message))
}
setEmail('')
setPassword('')
setConfirmPassword('')
}
navigate('/')



    
        
    }



return (
    <form onSubmit={submitRegHandler}>
        <div className={styles.wrapper}>
            <div className={styles.control}>
                <label htmlFor="name">Name</label>
                <input 
                type="text" 
                name="name" 
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className={styles.control}>
                <label htmlFor="username">Username</label>
                <input 
                type="text" 
                name="username" 
                onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className={styles.control}>
                <label htmlFor="email">E-mail</label>
                <input 
                type="email" 
                name="email" 
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className={styles.control}>
                <label htmlFor="password">Create Password</label>
                <input 
                type="password" 
                name="password" 
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className={styles.actions}>
                
                <button type="submit" className={styles.button}>Register</button>
            </div>
            <div>
                <p>Already registered ? <Link to="/login">Login</Link></p>
            </div>
        </div>
    </form>
)
}
export default SignUp;