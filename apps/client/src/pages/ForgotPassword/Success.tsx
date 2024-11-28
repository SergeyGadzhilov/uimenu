import { AccentButton } from "../../components/Buttons/buttons";
import styles from "./Success.module.css"

export default function SuccessPage({children, show=false, onClose=null}){
    return (
        <>
            {show &&
                (<div className={styles.success}>
                    <img className={styles.icon} src="/assets/images/success.svg"></img>
                    <div className={styles.description}>{children}</div>
                    <div className={styles.button}>
                        <AccentButton onPress={onClose}>Ok</AccentButton>
                    </div>
                </div>)
            }
        </>
    );
};