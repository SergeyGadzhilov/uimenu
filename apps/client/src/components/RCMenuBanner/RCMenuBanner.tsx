
import { LinkAccentButton } from "../Buttons/buttons";
import styles from "./RCMenuBanner.module.css"
import RCMenuScanCode from "./RCMenuScanCode";

const RCMenuBanner = () => {
    return (
        <section className={styles.banner}>
          <div className={styles.left} >
            <h2 className={styles.title}>Contactless digital <br/>QR Code Menu</h2>
            <div className={styles.description}>
              <div>
                Revolutionize your customers' ordering process with our contactless QR Code menu solution.
                <span className={styles.description2}>Create digital restaurant menu and share it via a unique QR code with just a few clicks.</span>
              </div>
            </div>
            <div className={styles.button}>
                <LinkAccentButton to="/register">Create QR menu</LinkAccentButton>
            </div>
          </div>
          <div className={styles.gap}></div>
          <div>
            <RCMenuScanCode />
          </div>
      </section>
    );
};

export default RCMenuBanner;