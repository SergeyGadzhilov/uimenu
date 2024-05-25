const RCMenuFooter = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer__content">
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
    );
};

export default RCMenuFooter;