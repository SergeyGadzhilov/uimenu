import { Link } from "react-router-dom";

const RCMenuBanner = () => {
    return (
        <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner__content_area">
                <div className="banner__content_left">
                  <h2 className="banner__title">Contactless digital <span>QR Code Menu</span></h2>
                  <p className="banner__description">
                    Revolutionize your customers' ordering process with our contactless QR Code menu solution.<br/>
                    <span className="banner__description_part2">Create digital restaurant menu and share it via a unique QR code with just a few clicks.</span>
                  </p>
                  <div className="banner__buttons">
                    <Link className="button_accent" to="/register">Create QR menu</Link>
                  </div>
                </div>
                <div className="banner__content_right">
                  <div className="scan_code">
                    <a>
                      <img src="/qr.png" alt="QR_Code" />
                      <p>Scan me <span>to try demo</span></p>
                    </a>
                  </div>
                  <div className="qr_code text-center">
                    <span>or <a href="" target="_blank" rel="noopener">click here</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default RCMenuBanner;