import { useContext, useState } from 'react';
import styles from './RCMenuLoginFrom.module.css'
import Error from '../Error/Error';
import Loader from './Loader';
import SuccessPage from './Success';
import AccentButton, { Button } from '../Buttons/buttons';
import { AuthContextType } from '../../types';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { LoginResponse } from '../../apis/dto/TokenDTO';

enum Page {
    Form,
    Loader,
    Error,
    Success
}

const RCMenuLoginFrom = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [page, setPage] = useState(Page.Form);
    const [errors, setError] = useState([]);
    
    const navigateTo = useNavigate();
    const auth = useContext(AuthContext) as AuthContextType;

    const showErrors = (error: string[]) => {
        setError(error);
        setPage(Page.Error);
    }

    const Demo = async (event) => {
        event.preventDefault();
        setPage(Page.Loader);
        ProcessResponse(await auth.LogIn({email: 'test@test.com', password: 'password'}));
    }

    const Login = async (event) => {
        event.preventDefault();
        setPage(Page.Loader);
        ProcessResponse(await auth.LogIn({email, password}));
    }

    const ProcessResponse = (response: LoginResponse) => {
        if (response.IsSuccess) {
            navigateTo('/places');
            return;
        }
        showErrors(response.Error.Message);
    }

    return (
        <section className={styles.container}>
            <h1>Login</h1>
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
                <Link to="/password/forgot">Forgot passwrod?</Link>
                <div className={styles.buttons}>
                    <AccentButton onPress={Login}>Login</AccentButton>
                    <Button onPress={Demo}>Demo</Button>
                </div>
                <div className={styles.registration}>
                    <h3>Don't have an account?</h3>
                    <Link to="/register">Registration</Link>
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

export default RCMenuLoginFrom;