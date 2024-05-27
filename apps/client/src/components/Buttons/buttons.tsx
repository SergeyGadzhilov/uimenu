import { Link } from "react-router-dom";
import styles from "./buttons.module.css"

export default function AccentButton({label="", onPress=null}) {
    return (
        <button className={styles.accent} onClick={onPress}>{label}</button>
    );
};

export function LinkAccentButton({children=null, to=""}) {
    return (
        <Link className={styles.accent} to={to}>{children}</Link>
    );
}

export function LinkButton({children=null, to=""}) {
    return (
        <Link className={styles.button} to={to}>{children}</Link>
    );
}