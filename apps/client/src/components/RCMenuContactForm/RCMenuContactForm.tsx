import { useState } from 'react';
import styles from './RCMenuContactFrom.module.css'
import Error from './Error';
import Loader from './Loader';
import SuccessPage from './Success';
import { CreateSupportTicket } from '../../apis/support';

enum Page {
    Form,
    Loader,
    Error,
    Success
}

const RCMenuContactFrom = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [page, setPage] = useState(Page.Form);
    const [errors, setError] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setPage(Page.Loader);
        const response = await CreateSupportTicket({name, email, message});
        if (response.IsSuccess) {
            setPage(Page.Success);
            return;
        }
        setError(response.Error.Message);
        setPage(Page.Error);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {page == Page.Form &&
                <>
                <input
                    value={name}
                    className={styles.input} 
                    type="text" placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    value={email}
                    className={styles.input}
                    type="text" placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    value={message}
                    className={styles.textarea}
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                />
                <input className={styles.submit} type="submit" value="Send" />
                </>
            }
            <Loader show={page == Page.Loader} />
            <Error show={page == Page.Error} errors={errors} onClose={() => {setPage(Page.Form)}} />
            <SuccessPage show={page == Page.Success} onClose={() => {
                setName("");
                setEmail("");
                setMessage("");
                setPage(Page.Form)
            }}/>
        </form>
    );
};

export default RCMenuContactFrom;