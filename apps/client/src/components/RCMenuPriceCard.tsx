import { Link } from "react-router-dom";

const RCMenuPriceCard = ({title, descirption, price}) => {
    return (
        <div className="price_card">
            <div className="price_card__title">{title}</div>
            <div className="price_card__description">{descirption}</div>
            <div className="price_card__price">{price}</div>
            <div className="price_card__period">per month</div>
            <Link className="price_card__button" to="/">Subscribe</Link>
        </div>
    );
};

export default RCMenuPriceCard;
