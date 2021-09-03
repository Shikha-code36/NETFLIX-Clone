import React from 'react'
import styles from "./styles/HomePage.module.css";
import Faq from "../../components/faq/Faq";
import EmailInput from "../../components/input/EmailInput";
import Footer from "../../components/footer/Footer";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import Banner from "../../components/banner/Banner";
import faqs from "../../data/faqs";


function HomePage(props) {
    return (
        <div>
          <Banner history={props.history}/>
        
        <div className={styles.border_line}/>

        <Jumbotron/>

            <div className={styles.faqs__container}>

            <div className={styles.faqs}>
                 <h1>Frequently Asked Questions</h1>
                 <div>
                     {faqs.map((faq) => {
                         return <Faq faq={faq} key={faq.id}/>
                     })}
                 </div>
            </div>

            <div className={styles.ready_to_watch}>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>

            <EmailInput/>
            </div>
             
            </div>
            <div className={styles.border_line}/>

            <Footer/>
        </div>
    )
}

export default HomePage
