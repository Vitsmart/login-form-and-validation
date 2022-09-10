import React, { useEffect, useState } from "react";
import styles from "./Signup.module.css"
import {Link, useNavigate} from "react-router-dom"
import { useUserAuth } from "../../UserAuthContext";


const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const {signUp, currentUser} = useUserAuth();
   // const [currentuser, setCurrentuser] = useState(null);
   // const [username, setUsername] = useState("");
   // const [name, setName] = useState("");
    
// name = setName;
// username = setUsername;
// error = setError;

    // const validatePassword = () => {
    //     let isValid = '';
    //     if (password !== '' &&  password.trim().length > 5){

    //         isValid = true
    //              setError('password length must be more than 5')
    //         }
        
    //     return isValid;
    // }

    

    const submitRegHandler = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await signUp(email, password);
            // setCurrentUser(true)
        }
        catch(error) { setError(error.message)
        };

    };
    
        if (currentUser) {
            return navigate('/');
        }
    
    
    



return (
    <>
    <form onSubmit={submitRegHandler}>
        <div className={styles.wrapper}>
            {/* <div className={styles.control}>
                <label htmlFor="name">Name</label>
                <input 
                type="text" 
                name="name" 
                onChange={(e) => setName(e.target.value)}/>
            </div> */}
            {/* <div className={styles.control}>
                <label htmlFor="username">Username</label>
                <input 
                type="text" 
                name="username" 
                onChange={(e) => setUsername(e.target.value)}/>
            </div> */}
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
        </div>
    </form>
     <div>
     <p>Already have an account? <Link to="/">Login</Link></p>
 </div>
 </>
)
};
export default SignUp;