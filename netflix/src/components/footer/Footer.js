import React from 'react'
import styles from "./styles/Footer.module.css";

const footerItems = ["FAQ", "Help Centre", "Account", "Investor relations", "Jobs", "Wats to see", "Terms of Use", "Privacy", 
                    "Cookie Preferences", "Corporate information", "Contact us", "Speed test", "Legal information", "Netflix Originals"];

function Footer() {
    return (
        <footer className={styles.footer}>
             <p>Got a question? Call 000-800-040-1843</p>
                <ul className={styles.footer__items}>
                    {footerItems.map((item, idx) => {
                        return <li key={idx}><a href="#">{item}</a></li>
                    })}
                </ul>

                <button>English</button>

                <p>Netflix India</p>
        </footer>
    )
}

export default Footer;
