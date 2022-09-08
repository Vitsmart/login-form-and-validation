import React from "react";
import styles from "./Signup.module.css"
import {Link} from "react-router-dom"


const SignUp = () => {
    

    const submitRegHandler = (event) => {
        event.preventDefault();
        
    }



return (
    <form onSubmit={submitRegHandler}>
        <div className={styles.wrapper}>
            <div className={styles.control}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
            </div>
            <div className={styles.control}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" />
            </div>
            <div className={styles.control}>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" />
            </div>
            <div className={styles.control}>
                <label htmlFor="password">Create Password</label>
                <input type="password" name="password" />
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