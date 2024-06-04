import { Link } from "react-router-dom";

const RCMenuFooter = () => {
    return (
        <footer>
            <Link target="blank" className="terms_of_service" to="/terms">Terms of Service</Link>
            <div>Copyright © {new Date().getFullYear()} All rights reserved</div>
        </footer>
    );
};

export default RCMenuFooter;