import AccentButton from "../Buttons/buttons";
import styles from "./Error.module.css"

export default function Error({show=false, errors=[], onClose=null}) {
    const messages = () => {
        if (errors.length <= 0) {
            return (
                <>
                    <li>An error occurred while sending the message</li>
                    <li>Could you please try to resend the message</li>
                </>
            )
        }
        return errors.map(error => <li key={error}>{error}</li>);
    }

    return (
        <>
            {show &&
                (<div className={styles.error}>
                    <img className={styles.icon} src="/assets/images/error.svg"></img>
                    <ul className={styles.description}>
                        {messages()}
                    </ul>
                    <div className={styles.button}>
                        <AccentButton onPress={onClose}>Ok</AccentButton>
                    </div>
                </div>)
            }
        </>
    );
};