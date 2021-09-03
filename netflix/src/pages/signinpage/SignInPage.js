import React from 'react'
import SignIn from "../../components/signin/SignIn";
import styles from "./styles/SignInPage.module.css";

function SignInPage(props) {
    return (
        <div className={styles.signInPage}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcxyD4z8RcftP5qP5rAd9q0ff2BK6LADyYnw&usqp=CAU"
                 alt="Netflix Logo" className={styles.netflix_logo} onClick={() => props.history.push("/")}/>
        
             <SignIn {...props}/>

        </div>
    )
}

export default SignInPage;