import React from 'react'
import styles from "./styles/Jumbotron.module.css";
import jumbotron from "../../data/jumbotron";

function Jumbotron() {
    return (
        <div className={styles.jumbotron}>
        {jumbotron.map((item) => {
            return (
                <div key={item.id}>
                <div className={styles.jumbotron__row}>
                <div className={styles.jumbotron__row_col}>
                     <h2>{item.title}</h2>
                     <p>{item.subTitle}</p>
                </div>
                <img src={item.image} alt={item.alt}/>
                </div>
                <div className={styles.border_line}/>
                </div>
            )
        })}
    </div>
    )
}

export default Jumbotron
