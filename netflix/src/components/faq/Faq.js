import React, {useState} from 'react'
import styles from "./styles/faq.module.css";

function Faq(props) {
     var [show, setShow] = useState(false);

    function handleClick(){
        setShow(!show);
    }
    return (
        <div className={styles.faq}>
        <div className={styles.faq__header}>
            <p>{props.faq.header}</p>
            <p className={styles.faq__add} onClick={handleClick}>{show ? <span>&#215;</span> : "+"}</p>
        </div>
          {show && <div className={styles.faq__details}>
            <p>{props.faq.body}</p>
        </div>}
         
        </div>
    )
}

export default Faq;