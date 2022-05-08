import react from 'react';
import styles from '../styles/footer.module.css'

export default function Footer(){
    return (
    <>
    <div className={styles.footer}>
        <div className={styles.container}>
            <h2 className={styles.contactMeHeader}>Contact Me</h2>
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
    </div>
    </>)
}