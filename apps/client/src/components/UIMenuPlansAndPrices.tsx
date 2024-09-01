import { Link } from "react-router-dom";
import UIMenuPriceCard from "./UIMenuPriceCard";

const UIMenuPlansAndPrices = () => {
    return (
        <section id="prices" className="prices">
            <div className="prices__title">Plans and prices</div>
            <div className="prices__cards">
                <UIMenuPriceCard 
                    title = "Monthly"
                    descirption = "Charged every month. Total amount is 10$"
                    price = "10$"
                />
                <UIMenuPriceCard 
                    title = "Annual"
                    descirption = "Charged every 12 months. Total amount is 96$"
                    price = "8$"
                />
                <UIMenuPriceCard 
                    title = "Semi-annual"
                    descirption = "Charged every 6 months. Total amount is 54$"
                    price = "9$"
                />
            </div>
            <div className="prices__trial_card">
                <div className="prices__trial_title">Trial</div>
                <div className="prices__trial_descrition">
                    You can try our QR code menu service first, and then decide does it suits you or not. 
                    It's totally free and we do not ask for your credit card details.
                </div>
                <Link className="price_card__button" to="/register">Try it for free</Link>
            </div>
        </section>
    );
};

export default UIMenuPlansAndPrices;