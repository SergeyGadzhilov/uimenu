import AccentButton from "../Buttons/buttons";
import styles from "./Success.module.css"

export default function SuccessPage({show=false, onClose=null}){
    return (
        <>
            {show &&
                (<div className={styles.success}>
                    <img className={styles.icon} src="/assets/images/success.svg"></img>
                    <div className={styles.description}>
                        Your message has been sent successfuly<br/>
                        We will get back to you as soon as possible<br/>
                        Thank you for the message!
                    </div>
                    <div className={styles.button}>
                        <AccentButton onPress={onClose}>Ok</AccentButton>
                    </div>
                </div>)
            }
        </>
    );
};