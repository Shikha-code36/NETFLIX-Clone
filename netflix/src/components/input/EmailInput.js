import React from 'react';
import {withRouter} from "react-router-dom";
import styles from "./styles/EmailInput.module.css";

function EmailInput(props) {
    return (
        <div className={styles.Email__input}>
                      <input type="email" placeholder="Email Address"/>
                      <button className={styles.Email__input_btn} onClick={() => props.history.push("/signUp")}>Get Started </button>
                </div>
    )
}

export default withRouter(EmailInput);
