import { Link } from "react-router-dom";

const RCMenuEditorSection = () => {
    return (
      <section className="section_editor">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="editor__main_content">
                        <div className="editor__main_content_left">
                            <img src="/assets/images/idea_item.png" alt="item_image" />
                        </div>
                        <div className="editor__main_content_right">
                            <div className="editor__title">QR Code Menu Editor</div>
                            <div className="editor__description">
                                The QR code menu editor allows you to effortlessly create and share your menu within minutes.
                                <ul className="editor__features">
                                    <li>Design your digital menu in just minutes</li>
                                    <li>Effortless menu updates with our editor</li>
                                    <li>Generate and print QR code for menu</li>
                                </ul>
                                <div className="editor__buttons">
                                    <Link className="button_accent" to="/register">Create QR menu</Link>
                                    <Link className="button" to="/demo">Demo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
};

export default RCMenuEditorSection;