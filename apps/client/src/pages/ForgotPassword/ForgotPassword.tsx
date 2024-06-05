import { useContext, useState } from 'react';
import styles from './ForgotPasswrod.module.css';
import Error from '../../components/Error/Error';
import Loader from './Loader';
import SuccessPage from './Success';
import AccentButton from '../../components/Buttons/buttons';
import { AuthContextType } from '../../types';
import AuthContext from '../../context/AuthContext';
import MainLayout from '../../layouts/MainLayout';
import { ForgotPasswordResponse } from '../../apis/dto/AuthDTO';
import { useNavigate } from 'react-router-dom';

enum Page {
    Form,
    Loader,
    Error,
    Success
}

export function ForgotPassword () {
    const [email, setEmail] = useState("");
    const [page, setPage] = useState(Page.Form);
    const [errors, setError] = useState([]);
    const auth = useContext(AuthContext) as AuthContextType;
    const navigator = useNavigate();

    const showErrors = (error: string[]) => {
        setError(error);
        setPage(Page.Error);
    }

    const SendResetLink = async (event) => {
        event.preventDefault();
        setPage(Page.Loader);
        ProcessResponse(await auth.ForgotPassword(email));
    }

    const ProcessResponse = (response: ForgotPasswordResponse) => {
        if (response.IsSuccess) {
            setPage(Page.Success);
            return;
        }
        showErrors(response.Error.Message);
    }

    return (
        <MainLayout>
        <section className={styles.container}>
            <h1>Reset password</h1>
            <form className={styles.form}>
            {page == Page.Form &&
                <>
                <input
                    value={email}
                    className={styles.input} 
                    type="email" placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className={styles.buttons}>
                    <AccentButton onPress={SendResetLink}>Send</AccentButton>
                </div>
                </>
            }
            <Loader show={page == Page.Loader} />
            <Error show={page == Page.Error} errors={errors} onClose={() => {navigator("/")}} />
            <SuccessPage show={page == Page.Success} onClose={() => {navigator("/")}}>
                We have sent a reset link to your email.<br/>
                Use the reset link from the email to reset your password.
            </SuccessPage>
            </form>
        </section>
        </MainLayout>
    );
};