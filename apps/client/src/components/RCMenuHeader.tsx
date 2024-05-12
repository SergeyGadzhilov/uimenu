import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContextType } from "../types";
import AuthContext from "../context/AuthContext";

const RCMenuHeader = () => {
    const auth = useContext(AuthContext) as AuthContextType;
    return (
        <header className="header__main_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="header__logo_menu">
                <div className="header__logo">
                  <a href="/">
                    <img src="/logo.png" alt="RCMenu" className="logo" />
                  </a>
                </div>
                <div className="header__menu">
                {auth.token ? (
                  <nav className="menu">
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/places">Account</Link></li>
                      <li><Link to= "/" onClick={() => auth.signOut()}>Logout</Link></li>
                    </ul>
                  </nav>):(
                  <nav className="menu">
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/login">Login</Link></li>
                      <li><Link to="/register">Registration</Link></li>
                    </ul>
                  </nav>
                  )}
                  <div className="mobile_menu">
                    <div className="all_p_humber">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
};

export default RCMenuHeader;