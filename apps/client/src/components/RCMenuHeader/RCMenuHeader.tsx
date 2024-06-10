import { useContext, useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { AuthContextType } from "../../types";
import AuthContext from "../../context/AuthContext";
import styles from './RCMenuHeader.module.css'

const RCMenuHeader = () => {
    const auth = useContext(AuthContext) as AuthContextType;
    const [menu_class, setMenuClass] = useState("menu");
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [burger_class, setBurgerClass] = useState("all_p_humber");

    const updateMenu = () => {
      if (isMenuOpened) {
        setBurgerClass("all_p_humber");
        setMenuClass("menu");
        setIsMenuOpened(false);
      } else {
        setBurgerClass("all_p_humber open");
        setMenuClass("menu open");
        setIsMenuOpened(true);
      }
    };

    return (
        <header className="header__main_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="header__logo_menu">
                <div className="header__logo">
                  <a href="/">
                    <img src="/logo.png" alt="UIMenu" className={styles.logo} />
                  </a>
                </div>
                <div className="header__menu">
                {auth.token ? (
                  <nav className={menu_class}>
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/#prices">Prices</Link></li>
                      <li><Link to="/#contacts">Contacts</Link></li>
                      <li><Link to="/places">Account</Link></li>
                      <li><Link to= "/" onClick={() => auth.signOut()}>Logout</Link></li>
                    </ul>
                  </nav>):(
                  <nav className={menu_class}>
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/#prices">Prices</Link></li>
                      <li><Link to="/#contacts">Contacts</Link></li>
                      <li><Link to="/login">Login</Link></li>
                      <li><Link to="/register">Registration</Link></li>
                    </ul>
                  </nav>
                  )}
                  <div className="mobile_menu">
                    <div className={burger_class} onClick={updateMenu}>
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
        <div className="mobile_menu">
          <div className="header__menu">
          {auth.token ? (
            <nav className={menu_class}>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/#prices">Prices</Link></li>
                <li><Link to="/#contacts">Contacts</Link></li>
                <li><Link to="/places">Account</Link></li>
                <li><Link to= "/" onClick={() => auth.signOut()}>Logout</Link></li>
              </ul>
            </nav>):(
            <nav className={menu_class}>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/#prices">Prices</Link></li>
                <li><Link to="/#contacts">Contacts</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Registration</Link></li>
              </ul>
            </nav>)}
          </div>
        </div>
        </header>
    )
};

export default RCMenuHeader;