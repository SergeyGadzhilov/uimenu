import { useState } from "react";
import styles from "./Categories.module.css";

function Category({category=null, isActive=false, onClick=null}) {
    return (
        <li onClick={onClick} className={isActive ? styles.active : styles.item}>{category.name}</li>
    );
}

function AddCategory() {
    return (
        <li className={styles.add}>+Add</li>
    );
}

export default function Categories() {
    const [active, setActive] = useState(1);
    const categories = [
        {id: 1, name: "All"},
        {id: 2, name: "Category 1"},
        {id: 3, name: "Category 2"},
        {id: 4, name: "Category 3"},
    ];

    return (
        <div className={styles.categories}>
            <div className={styles.title}>
                <h3>Categories</h3>
            </div>
            <ul className={styles.items}>
                <>
                    {categories.map((category) => 
                        <Category
                            key={category.id}
                            category={category}
                            isActive={active == category.id}
                            onClick={() => setActive(category.id)}
                        />
                    )}
                </>
                <AddCategory></AddCategory>
            </ul>
        </div>
    );
};