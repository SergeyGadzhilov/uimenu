import { useContext, useState } from 'react';
import styles from './ResetPasswrod.module.css';
import Error from '../../components/Error/Error';
import Loader from './Loader';
import SuccessPage from './Success';
import AccentButton from '../../components/Buttons/buttons';
import { AuthContextType } from '../../types';
import AuthContext from '../../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import { ResetPasswrodResponse } from '../../apis/dto/AuthDTO';

enum Page {
    Form,
    Loader,
    Error,
    Success
}

export function ResetPassword () {
    const params = useParams();
    const [password, setPassword] = useState("");
    const [page, setPage] = useState(Page.Form);
    const [errors, setError] = useState([]);
    
    const navigateTo = useNavigate();
    const auth = useContext(AuthContext) as AuthContextType;

    const showErrors = (error: string[]) => {
        setError(error);
        setPage(Page.Error);
    }

    const ResetPassword = async (event) => {
        event.preventDefault();
        setPage(Page.Loader);
        ProcessResponse(await auth.ResetPassword({password, token: params.token}));
    }

    const ProcessResponse = (response: ResetPasswrodResponse) => {
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
                    value={password}
                    className={styles.input}
                    type="password" placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className={styles.buttons}>
                    <AccentButton onPress={ResetPassword}>Reset</AccentButton>
                </div>
                </>
            }
            <Loader show={page == Page.Loader} />
            <Error show={page == Page.Error} errors={errors} onClose={() => {
                setError([]);
                setPage(Page.Form)
            }} />
            <SuccessPage show={page == Page.Success} onClose={() => {navigateTo("/login")}}>
                You password has been reset successfuly!
            </SuccessPage>
            </form>
        </section>
        </MainLayout>
    );
};