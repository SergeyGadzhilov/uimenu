
import { LinkAccentButton } from "../Buttons/buttons";
import styles from "./UIMenuBanner.module.css"
import UIMenuScanCode from "./UIMenuScanCode";

const UIMenuBanner = () => {
    return (
        <section className={styles.banner}>
          <div className={styles.left} >
            <h2 className={styles.title}>Free digital menu for hotels,<br/>cafes and restaurants</h2>
            <div className={styles.description}>
              <div>
                The simplest way to create digital menu for your business.
                <span className={styles.description2}> Create digital menu and share it via a unique QR code with just a few clicks.</span>
              </div>
            </div>
            <div className={styles.button}>
                <LinkAccentButton to="/register">Create menu</LinkAccentButton>
            </div>
          </div>
          <div className={styles.gap}></div>
          <div>
            <UIMenuScanCode />
          </div>
      </section>
    );
};

export default UIMenuBanner;