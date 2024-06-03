import Error from "../Error/Error";
import styles from "./loader.module.css";

export function LoaderOverlay({show = false, errors = [], onClose = null}) {
    return (
        <>
            {show &&
                (<div className={styles.overlay}>
                    { errors.length > 0 ?
                        <Error show={show} errors={errors} onClose={onClose}/>
                        :
                        <img className={styles.image} src="/assets/images/spinner.svg"/>
                    }
                </div>)
            }
        </>
    );
};