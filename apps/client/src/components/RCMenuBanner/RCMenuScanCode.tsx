import styles from "./RCScanCode.module.css"

export default function RCMenuScanCode() {
    return (
        <div className={styles.scancode}>
            <div className={styles.qrcode}>
              <img src="/qr.png" alt="QR_Code" />
              <div className={styles.description}>Scan me <br/>to try demo</div>
            </div>
            or <a className={styles.link} href="" target="_blank" rel="noopener">Click here</a>
        </div>
    );
};