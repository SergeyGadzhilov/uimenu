import { useState } from 'react';
import styles from './RCMenuContactFrom.module.css'

const RCMenuContactFrom = () => {
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
        {
            isLoading ? <img className={styles.spinner} src="/assets/images/spinner.svg"></img> :
            <>
                <input className={styles.input} type="text" placeholder="Name"></input>
                <input className={styles.input} type="text" placeholder="Email"></input>
                <textarea className={styles.textarea} placeholder="Message"/>
                <input className={styles.submit} type="submit" value="Send" />
            </>
        }
        </form>
    );
};

export default RCMenuContactFrom;