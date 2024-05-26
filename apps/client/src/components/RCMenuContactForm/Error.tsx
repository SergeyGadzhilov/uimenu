import AccentButton from "../Buttons/AccentButton";
import styles from "./Error.module.css"

export default function Error({show=false, onClose=null}) {
    return (
        <>
            {show &&
                (<div className={styles.error}>
                    <img className={styles.icon} src="/assets/images/error.svg"></img>
                    <div className={styles.description}>
                        An error occurred while sending the message<br/>
                        Could you please try to resend the message
                    </div>
                    <div className={styles.button}>
                        <AccentButton label="Ok" onPress={onClose}/>
                    </div>
                </div>)
            }
        </>
    );
};