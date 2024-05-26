import styles from './RCMenuContactFrom.module.css'

const RCMenuContactFrom = () => {
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" placeholder="Name"></input>
            <input className={styles.input} type="text" placeholder="Email"></input>
            <textarea className={styles.textarea} placeholder="Message"/>
            <input className={styles.submit} type="submit" value="Send" />
        </form>
    );
};

export default RCMenuContactFrom;