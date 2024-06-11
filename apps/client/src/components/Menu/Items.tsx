import { createContext, useContext, useState } from "react";
import AccentButton from "../Buttons/buttons";
import styles from "./items.module.css";

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

function CategoryItem({item}) {
    
    const onOrder = useContext(ItemsContext);

    return (
        <li className={styles.item}>
            {item.image && <div className={styles.image} style={{backgroundImage: `url(${item.image})`}}></div>}
            <div className={styles.item_data}>
                <h3 className={styles.item_title}>{item.name}</h3>
                <ItemDescription descirption={item.description} />
                <div className={styles.controls}>
                    <p className={styles.item_price}>${item.price}</p>
                    <AccentButton onPress={() => onOrder(item)}>Add</AccentButton>
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

export function Items({categories, onOrder = null}) {
    return (
        <ItemsContext.Provider value={onOrder}>
            {categories?.map((category) => <Category key={category.id} category={category}/>)}
        </ItemsContext.Provider>
    );
}