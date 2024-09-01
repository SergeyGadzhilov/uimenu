import UIMenuContactFrom from '../../components/UIMenuContactForm/UIMenuContactForm';
import styles from './UIMenuContatcs.module.css'

const UIMenuContactsSection = () => {
    return (
        <section className={styles.contacts}>
            <div className={styles.title}>Contact Us</div>
            <div className={styles.description}>
                If you have any questions, simply send us a message, and we will get back to you as soon as possible
            </div>
            <div className={styles.form}>
                <UIMenuContactFrom/>
            </div>
        </section>
    );
};

export default UIMenuContactsSection;