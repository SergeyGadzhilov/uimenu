import { createContext, useContext, useState } from "react";
import styles from "./items.module.css";
import { TiMinus, TiPlus } from "react-icons/ti";
import { CartContext } from "./MenuList";
import { ShoppingCart } from "../../ShoppingCart/core/ShoppingCart";

const ItemsContext = createContext(null);

function ItemDescription({descirption}) {
    const [isFullDescription, setFullDescription] = useState(false);
    return (
        <p 
            onClick={() => setFullDescription(!isFullDescription)}
            className={isFullDescription ? styles.item_description : styles.item_description_hidden}>
                {descirption}
        </p>
    );
}

function OrderButton({item}) {
    const events = useContext(ItemsContext);
    const cart = useContext(CartContext) as ShoppingCart;
    const product = cart.getProduct(item.id);

    return (
        <>
        {product?.quantity ?
            <div className={styles.counter}>
                <TiMinus onClick={() => events.onRemove(item)} className={styles.counter_control} />
                <div>{product?.quantity}</div>
                <TiPlus onClick={() => events.onOrder(item)} className={styles.counter_control}/>
            </div>
        :
            <div className={styles.order_button} onClick={() => events.onOrder(item)}>+</div>
        }
        </>
    );
}

function CategoryItem({item}) {
    return (
        <li className={styles.item}>
            {item.image && <div className={styles.image} style={{backgroundImage: `url(${item.image})`}}></div>}
            <div className={styles.item_data}>
                <h3 className={styles.item_title}>{item.name}</h3>
                <ItemDescription descirption={item.description} />
                <div className={styles.controls}>
                    <p className={styles.item_price}>${item.price}</p>
                    <OrderButton item={item}/>
                </div>
            </div>
        </li>
    );
}

function CategoryItems({items = null}) {
    return (
        <ul className={styles.items}>
            {items?.map((item) => <CategoryItem key={item.id} item={item}/>)}
        </ul>
    );
}

function Category({category}) {
    return (
        <>
            { category?.items?.length > 0 && (
                <div id={category.id}>
                    <h3 className={styles.category_title}>{category.name}</h3>
                    <CategoryItems items={category?.items} />
                </div>
            ) }
        </>
    );
}

export function Items({categories, onOrder = null, onRemove = null}) {
    return (
        <ItemsContext.Provider value={{onOrder, onRemove}}>
            {categories?.map((category) => <Category key={category.id} category={category}/>)}
        </ItemsContext.Provider>
    );
}