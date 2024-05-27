import RCMenuContactFrom from '../../components/RCMenuContactForm/RCMenuContactForm';
import styles from './RCMenuContatcs.module.css'

const RCMenuContactsSection = () => {
    return (
        <section className={styles.contacts}>
            <div className={styles.title}>Contact Us</div>
            <div className={styles.description}>
                If you have any questions, simply send us a message, and we will get back to you as soon as possible
            </div>
            <div className={styles.form}>
                <RCMenuContactFrom/>
            </div>
        </section>
    );
};

export default RCMenuContactsSection;