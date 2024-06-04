import { createContext, useContext } from "react";
import AccentButton from "../Buttons/buttons";
import styles from "./items.module.css";

const ItemsContext = createContext(null);

function CategoryItem({item}) {
    const onOrder = useContext(ItemsContext);

    return (
        <li className={styles.item}>
            {item.image && <div className={styles.image} style={{backgroundImage: `url(${item.image})`}}></div>}
            <div className={styles.item_data}>
                <h3 className={styles.item_title}>{item.name}</h3>
                <p className={styles.item_description}>{item.description}</p>
                <p className={styles.item_price}>${item.price}</p>
                <AccentButton onPress={() => onOrder(item)}>Add</AccentButton>
            </div>
        </li>
    );
}

function CategoryItems({items = null}) {
    return (
        <ul>
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