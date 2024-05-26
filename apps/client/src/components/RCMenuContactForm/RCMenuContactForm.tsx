import { useState } from 'react';
import styles from './RCMenuContactFrom.module.css'
import Error from './Error';
import Loader from './Loader';

enum Page {
    Form,
    Loader,
    Error,
    Success
}

const RCMenuContactFrom = () => {
    const [page, setPage] = useState(Page.Error);

    const handleSubmit = (event) => {
        event.preventDefault();
        setPage(Page.Error);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {page == Page.Form &&
                <>
                <input className={styles.input} type="text" placeholder="Name"></input>
                <input className={styles.input} type="text" placeholder="Email"></input>
                <textarea className={styles.textarea} placeholder="Message"/>
                <input className={styles.submit} type="submit" value="Send" />
                </>
            }
            <Error show={page == Page.Error} onClose={() => {setPage(Page.Form)}} />
            <Loader show={page == Page.Loader} />
        </form>
    );
};

export default RCMenuContactFrom;