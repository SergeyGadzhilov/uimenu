import styles from "./AccentButton.module.css"

export default function AccentButton({label="", onPress=null}) {
    return (
        <button className={styles.button} onClick={onPress}>{label}</button>
    );
};