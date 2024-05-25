import { Link } from "react-router-dom";

const RCMenuFooter = () => {
    return (
        <footer>
            <Link className="terms_of_service" to="/">Terms of Service</Link>
            <div>Copyright © {new Date().getFullYear()} All rights reserved</div>
        </footer>
    );
};

export default RCMenuFooter;