import RCMenuHeader from "../components/RCMenuHeader";
import RCMenuBanner from "../components/RCMenuBanner";
import RCMenuEditorSection from "../components/RCMenuEditorSection";

function IndexPage() {
  return (
    <div id="landing">
      <RCMenuHeader/>
      <RCMenuBanner/>
      <RCMenuEditorSection/>

      {/* <!-- Start Footer Area --> */}
      <footer
        className="footer__main_area ptb_4"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer__content">
                <div className="footer__social_link">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer__copyrigt_menu">
                  <p>Copyright © {new Date().getFullYear()}</p>
                  <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Support</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default IndexPage;
