import { useContext, useState } from 'react';
import styles from './UIMenuRegistrationFrom.module.css'
import Error from '../Error/Error';
import Loader from './Loader';
import SuccessPage from './Success';
import { AccentButton } from '../Buttons/buttons';
import { AuthContextType } from '../../types';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

enum Page {
    Form,
    Loader,
    Error,
    Success
}

const UIMenuRegistrationFrom = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [page, setPage] = useState(Page.Form);
    const [errors, setError] = useState([]);
    const [isTermsAccepted, setTermsAccepted] = useState(false);
    
    const navigateTo = useNavigate();
    const auth = useContext(AuthContext) as AuthContextType;

    const showErrors = (error: string[]) => {
        setError(error);
        setPage(Page.Error);
    }

    const Login = async () => {
        const response = await auth.LogIn({email, password});
        if (response.IsSuccess) {
            navigateTo('/places');
        }
        showErrors(response.Error.Message);
    }

    const Register = async (event) => {
        event.preventDefault();
        
        if (!isTermsAccepted) {
            showErrors(["Terms of Services are not accepted"]);
            return;
        }

        setPage(Page.Loader);
        const response = await auth.Register({email, password});
        if (response.IsSuccess) {
            await Login();
        }
        showErrors(response.Error.Message);
    }

    return (
        <section className={styles.container}>
            <h1>Registration</h1>
            <form className={styles.form}>
            {page == Page.Form &&
                <>
                <input
                    value={email}
                    className={styles.input} 
                    type="email" placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    value={password}
                    className={styles.input}
                    type="password" placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className={styles.terms}>
                    <input id="terms"
                        onChange={() => setTermsAccepted(!isTermsAccepted)} 
                        type='checkbox' checked={isTermsAccepted}
                    />
                    <label htmlFor="terms">Creating an account means you’re okay with our
                    <Link target='blank' to="/terms"> Terms of Service</Link></label>
                </div>
                
                <div className={styles.buttons}>
                    <AccentButton onPress={Register}>Register</AccentButton>
                </div>
                <div className={styles.registration}>
                    <h3>Already have an account?</h3>
                    <Link to="/login">Login</Link>
                </div>
                </>
            }
            <Loader show={page == Page.Loader} />
            <Error show={page == Page.Error} errors={errors} onClose={() => {
                setError([]);
                setPage(Page.Form)
            }} />
            <SuccessPage show={page == Page.Success} onClose={() => {
                setEmail("");
                setPassword("");
                setPage(Page.Form)
            }}/>
            </form>
        </section>
    );
};

export default UIMenuRegistrationFrom;