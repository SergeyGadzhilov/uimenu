import { Link } from "react-router-dom";
import styles from "./buttons.module.css"

export function Button({children, onPress=null}) {
    return (
        <button className={styles.button} onClick={onPress}>{children}</button>
    );
}

export default function AccentButton({children="", onPress=null}) {
    return (
        <button className={styles.accent} onClick={onPress}>{children}</button>
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