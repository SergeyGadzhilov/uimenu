import styles from './UIMenuEditorSection.module.css';
import { LinkAccentButton, LinkButton } from "../Buttons/buttons";

const UIMenuEditorSection = () => {
    return (
      <section className={styles.editor}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className={styles.main_content}>
                        <div className={styles.main_content_left}>
                            <img src="/assets/images/editor_image.webp" alt="editor image" />
                        </div>
                        <div className={styles.main_content_right}>
                            <div className={styles.title}>Menu editor</div>
                            <div className={styles.description}>
                                The menu editor allows you to effortlessly create and share your menu within minutes.
                                <ul className={styles.features}>
                                    <li>Design your digital menu in just minutes</li>
                                    <li>Effortless menu updates with our editor</li>
                                    <li>Generate and print QR code for menu</li>
                                </ul>
                                <div className={styles.buttons}>
                                    <LinkAccentButton to="/register">Create menu</LinkAccentButton>
                                    <LinkButton to="/demo">Demo</LinkButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
};

export default UIMenuEditorSection;