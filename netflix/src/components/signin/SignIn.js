import React, {useState} from 'react'
import {Link} from "react-router-dom";
import auth, {facebookAuthProvider} from "../../firebase/firebaseConfig";
import styles from "./styles/SignIn.module.css";

function Login(props) {

      let user = JSON.parse(localStorage.getItem("rememberedUser")) || {};

      let [email, setEmail] = useState(user.email || "");
      let [password, setPassword] = useState(user.password || "");
      let [checked, setChecked] = useState(false);
      let [error, setError] = useState(undefined);

      const showError = (error) => {
        setError(error);
        setTimeout(() => {
            setError(undefined)
        }, 5000);
     }

      const handleSubmit = (e) => {
            e.preventDefault();

            let rememberedUser = {email: email, password: password};

            if(checked){
                localStorage.setItem("rememberedUser", JSON.stringify(rememberedUser));
            }else{
                localStorage.setItem("rememberedUser", JSON.stringify({}));
            }
            
            if(props.method === "signUp"){
                auth.createUserWithEmailAndPassword(email, password)
                         .then((res) => props.history.push("/movies"))
                         .catch((err) => showError(err.message));
            }else{
                auth.signInWithEmailAndPassword(email, password)
                         .then((res) => props.history.push("/movies"))
                         .catch((err) => showError(err.message));
            }
      }


      const handleFacebookAuth = () => {
          auth.signInWithPopup(facebookAuthProvider)
              .then((user) => props.history.push("/movies"))
              .catch((err) => alert(err.message))
      }

      const handleCheck = () => {
          setChecked(!checked);
      }


    return (
        <div className={styles.signIn} onSubmit={handleSubmit}>
            <h1>{props.method === "signIn" ? "Sign In" : "Sign Up"}</h1>

            {error &&  <p className={styles.error}> 
                           <span onClick={() => setError("")} className={styles.error__close}>&#215;</span>
                           {error} </p>}

            <form className={styles.signIn__form}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button className={styles.signIn_btn}>{props.method === "signIn" ? "Sign In" : "Sign Up"}</button>
            </form>

            <div className={styles.rememberMe}>
                 <div>
                     <input type="checkbox" defaultChecked={checked} onChange={handleCheck}/>
                     <span>Remember me</span>
                 </div>
                <p>Need help?</p>
            </div>

            <div className={styles.facebook}>
               <img className={styles.facebook__logo} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAM1BMVEU7WZhHY55TbaVfeKtrgrF4jLiEl76QocWdrMupttK1wdjCy9/O1eXa4Ozm6vLz9fn///9rRBnMAAAAoElEQVR42u3XwQqEMAxF0VSrxlHb/P/XamWmOgsXyQNFyN25eGdRpFASDmQusBAT0jYP0H6be68rlhrjuJ+y/Er6eZfknHr/kf/0ewwYBAOaDAKjgEAGgfY0TBPvWY+wt91adW+8/uYKRBQgB94HxG9LBcqX4lqU6xgFOhSIKEBPA/PjAKPAcNOv7IADDjjggBoINuCYMwZwef4bgOP5vwLHsC9Ii/qaQwAAAABJRU5ErkJggg==" alt="facebook logo"/>
               <p onClick={handleFacebookAuth}>Login with Facebook</p>
            </div>

            {props.method === "signIn" ?
                  <div className={styles.newToNetflix}>
                     <span>New to Netflix? </span>
                     <Link to="/signUp">Sign up Now</Link>
                  </div> : 
                  <div className={styles.newToNetflix}>
                     <span>Already have an account? </span>
                     <Link to="/signIn">Sign In</Link>
                  </div>}

             <div className={styles.info}>
                  <p>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.
                  </p>
                  <a href="#">Learn More.</a>
             </div>

        </div>
    )
}

export default Login;