import { useState } from 'react';
import styles from './RCMenuContactFrom.module.css'
import Error from './Error';
import Loader from './Loader';
import SuccessPage from './Success';

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
        setPage(Page.Success);
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
            <Loader show={page == Page.Loader} />
            <Error show={page == Page.Error} onClose={() => {setPage(Page.Form)}} />
            <SuccessPage show={page == Page.Success} onClose={() => {setPage(Page.Form)}}/>
        </form>
    );
};

export default RCMenuContactFrom;