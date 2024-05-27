import { Link } from "react-router-dom";
import RCMenuPriceCard from "./RCMenuPriceCard";

const RCMenuPlansAndPrices = () => {
    return (
        <section id="prices" className="prices">
            <div className="prices__title">Plans and prices</div>
            <div className="prices__cards">
                <RCMenuPriceCard 
                    title = "Monthly"
                    descirption = "Charged every month. Total amount is 10$"
                    price = "10$"
                />
                <RCMenuPriceCard 
                    title = "Annual"
                    descirption = "Charged every month. Total amount is 96$"
                    price = "8$"
                />
                <RCMenuPriceCard 
                    title = "Semi-annual"
                    descirption = "Charged every month. Total amount is 54$"
                    price = "9$"
                />
            </div>
            <div className="prices__trial_card">
                <div className="prices__trial_title">Trial</div>
                <div className="prices__trial_descrition">
                    You can try our QR code menu service first, and then decide does it suits you or not. 
                    It's totally free and we do not ask for your credit card details.
                </div>
                <Link className="price_card__button" to="/">Try it for free</Link>
            </div>
        </section>
    );
};

export default RCMenuPlansAndPrices;