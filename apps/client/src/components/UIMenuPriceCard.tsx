const UIMenuPriceCard = ({title, descirption, price}) => {
    return (
        <div className="price_card">
            <div className="price_card__title">{title}</div>
            <div className="price_card__description">{descirption}</div>
            <div className="price_card__price">{price}</div>
            <div className="price_card__period">per month</div>
        </div>
    );
};

export default UIMenuPriceCard;
