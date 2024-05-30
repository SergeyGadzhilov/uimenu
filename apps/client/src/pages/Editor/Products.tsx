import styles from "./Products.module.css";

function ProductCategory({category}) {
    return (
        <li className={styles.category}>
            <div>{category.name}</div>
        </li>
    )
}

export default function Products({place = null}) {
    return (
        <ul className={styles.list}>
            {place?.categories?.map((category) => <ProductCategory category={category}/>)}
        </ul>
    );
};