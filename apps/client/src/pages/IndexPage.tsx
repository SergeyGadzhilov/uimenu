import { Link } from "react-router-dom";
import RCMenuHeader from "../components/RCMenuHeader";
import RCMenuBanner from "../components/RCMenuBanner";
import RCMenuEditorSection from "../components/RCMenuEditorSection";

function IndexPage() {
  return (
    <div id="landing">
      <RCMenuHeader/>
      <RCMenuBanner/>
      <RCMenuEditorSection/>
      {/* <!-- Start Neeed Area --> */}
      <section
        className="need__main_area"
        style={{ backgroundColor: "#F3F3F3" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="need_header text-center">
                <h3>
                  Don't Think Twice! <span>You Need RCMenu 😎</span>
                </h3>
              </div>
              <div className="need__main_content">
                <div className="need__main_content_left">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          <span>QR Self-Ordering Menu</span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the{" "}
                          <code>.accordion-flush</code> className. This is the
                          first item's accordion body.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          <span>Order Display system</span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the{" "}
                          <code>.accordion-flush</code> className. This is the
                          second item's accordion body. Let's imagine this being
                          filled with some actual content.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          <span>Online Payments</span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the{" "}
                          <code>.accordion-flush</code> className. This is the
                          third item's accordion body. Nothing more exciting
                          happening here in terms of content, but just filling
                          up the space to make it look, at least at first
                          glance, a bit more representative of how this would
                          look in a real-world application.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          <span>Integration with third party POS</span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the{" "}
                          <code>.accordion-flush</code> className. This is the
                          third item's accordion body. Nothing more exciting
                          happening here in terms of content, but just filling
                          up the space to make it look, at least at first
                          glance, a bit more representative of how this would
                          look in a real-world application.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFive"
                          aria-expanded="false"
                          aria-controls="flush-collapseFive"
                        >
                          <span>Sales Metrics and Analytics </span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFive"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the{" "}
                          <code>.accordion-flush</code> className. This is the
                          third item's accordion body. Nothing more exciting
                          happening here in terms of content, but just filling
                          up the space to make it look, at least at first
                          glance, a bit more representative of how this would
                          look in a real-world application.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="need__main_content_right">
                  <img src="/assets/images/need_item.png" alt="item_image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Start Neeed Area --> */}

      {/* <!-- Start Free_Trial Area --> */}
      <section
        className="free_trial_main_area"
        style={{ backgroundColor: "#F3F3F3" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="free_trial__main_content">
                <div className="free_trial__content_left">
                  <img src="/assets/images/free_item.png" alt="item_image" />
                </div>
                <div className="free_trial__content_right">
                  <h1>Totaly Free</h1>
                  <p>$0.0 USD per month </p>
                  <Link className="btn_style_3" to="/register">
                    Create Account{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Free_Trial Area --> */}

      {/* <!-- Start Use Area --> */}
      <section
        className="use__main_area ptb_3"
        style={{ backgroundColor: "#ED6F3B" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="use__main_content">
                <div className="use__main_content_left">
                  <h1 style={{ color: "#FFF" }}>Why use RCMenu ?</h1>
                </div>
                <div className="use__main_content_right">
                  <ul>
                    <li>
                      <img src="/assets/images/icon.png" alt="icon" />
                      <span>100% Free</span>
                    </li>
                    <li>
                      <img src="/assets/images/icon.png" alt="icon" />
                      <span>
                        Third Party Integration With Existing POS Systems
                      </span>
                    </li>
                    <li>
                      <img src="/assets/images/icon.png" alt="icon" />
                      <span>Unlimited Number Of Products</span>
                    </li>
                    <li>
                      <img src="/assets/images/icon.png" alt="icon" />
                      <span>QR Code Generator</span>
                    </li>
                    <li>
                      <img src="/assets/images/icon.png" alt="icon" />
                      <span>Self Ordering Menu</span>
                    </li>
                    <li>
                      <img src="/assets/images/icon.png" alt="icon" />
                      <span>Custom Branding</span>
                    </li>
                    <li>
                      <img src="/assets/images/icon.png" alt="icon" />
                      <span>Online Payments</span>
                    </li>
                    <li>
                      <img src="/assets/images/icon.png" alt="icon" />
                      <span>Waiter Calls</span>
                    </li>
                    <li>
                      <img src="/assets/images/icon.png" alt="icon" />
                      <span>Order Display System</span>
                    </li>
                    <li>
                      <img src="/assets/images/icon.png" alt="icon" />
                      <span>No Hidden Fees</span>
                    </li>
                    <li>
                      <img src="/assets/images/icon.png" alt="icon" />
                      <span>Sales Metrics And Menu Analytics</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="try_for_free">
                <Link className="btn_style_2" to="/register">
                  TRY FOR FREE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Use Area --> */}

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
