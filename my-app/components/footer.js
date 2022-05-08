import react from 'react';
import styles from '../styles/footer.module.css'

export default function Footer(){
    return (
    <>
    <div className={styles.footer}>
        <h1 className={styles.lfwHeader}>I'm currently looking for work..</h1>
        <div className={styles.container}>
            <div className={styles.contactMeContainer}>
                <h2 className={styles.header}>Contact Me</h2>
                <div>
                    <input className={styles.contactMeName} type="text" placeholder="Name" required="required"></input>
                </div>
                <div>
                    <input className={styles.contactMeEmail} type="text" placeholder="Email" required="required"></input>
                </div>
                <div>
                    <textarea className={styles.contactMeMessage}  type="text" placeholder="Message" required="required"></textarea>
                </div>
            </div>
            <div className={styles.supportMeContainer}>
                <h2 className={styles.header}>Support Me</h2>
                <ul className={styles.servicesList}>
                    <li>Check out my online stores:</li>
                </ul>
            </div>
        </div>
    </div>
    </>)
}