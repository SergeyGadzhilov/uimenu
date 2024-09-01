import styles from "./Loader.module.css"

export default function Loader({show=false}) {
    return (
        <>
            {show && <img className={styles.spinner} src="/assets/images/spinner.svg"></img>}
        </>
    );
}
