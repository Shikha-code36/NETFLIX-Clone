import React, {useEffect, useState} from 'react'
import {NavLink, withRouter} from "react-router-dom";
import { FiGift } from 'react-icons/fi';
import { FaBell } from 'react-icons/fa';
import styles from "./styles/Nav.module.css";
import auth from "../../firebase/firebaseConfig";

function Nav(props) {
    var [showNav, setShowNav] = useState(false);

    const redirectToMovies = () => {
         props.history.push("/movies");
    }

    const eventListenerFn = () => {
        if(window.scrollY > 100){
            setShowNav(true)
        }else{
            setShowNav(false)
        }
    }

     useEffect(() => {
         window.addEventListener("scroll", eventListenerFn);
         return () => {
             window.removeEventListener("scroll", eventListenerFn);
         }
     }, [])


     const handleLogOut = () => {
          auth.signOut()
               .then(() => props.history.push("/"))
               .catch((err) => console.log(err));
     }
    return (
        <nav className={`${styles.Nav} ${showNav && `${styles.Nav_black}`}`}>
            <div className={styles.Nav__1}>
            <img className={styles.Nav_logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcxyD4z8RcftP5qP5rAd9q0ff2BK6LADyYnw&usqp=CAU" 
                  alt="Netflix Logo" onClick={redirectToMovies}/>

            <div className={styles.links}>
              <NavLink className={styles.link} to="/movies" exact activeStyle={{ fontWeight: 'bold' }}>Home</NavLink>
              <NavLink className={styles.link} to="/category/action" exact activeStyle={{ fontWeight: 'bold' }}>Action</NavLink>
              <NavLink className={styles.link} to="/category/horror" exact activeStyle={{ fontWeight: 'bold' }}>Horror</NavLink>
              <NavLink className={styles.link} to="/category/comedy" exact activeStyle={{ fontWeight: 'bold' }}>Comedy</NavLink>
              <NavLink className={styles.link} to="/category/top_rated" exact activeStyle={{ fontWeight: 'bold' }}>Top rated</NavLink>

            </div>
            </div>

            <div className={styles.Nav__2}>
            <FiGift className={styles.icons}/>
            <FaBell className={styles.icons}/>

            <img className={styles.Nav_smiley} src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="smiley-logo"/>
             <button className={styles.logout} onClick={handleLogOut}>Logout</button>
            </div>
        </nav>
    )
}

export default withRouter(Nav);
