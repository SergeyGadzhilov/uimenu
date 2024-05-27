import { Link } from "react-router-dom";
import styles from "./AccentButton.module.css"

export default function AccentButton({label="", onPress=null}) {
    return (
        <button className={styles.button} onClick={onPress}>{label}</button>
    );
};

export function LinkAccentButton({label="", to=""}) {
    return (
        <Link className={styles.button} to={to}>{label}</Link>
    );
}