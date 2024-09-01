import styles from "./RCScanCode.module.css"

export default function UIMenuScanCode() {
    return (
        <div className={styles.scancode}>
            <div className={styles.qrcode}>
              <img src="/qr.png" alt="QR_Code" />
              <div className={styles.description}>Scan me <br/>to try demo</div>
            </div>
            or <a className={styles.link} href="/demo" target="_blank" rel="noopener">Click here</a>
        </div>
    );
};