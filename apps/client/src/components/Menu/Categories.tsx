import styles from "./categories.module.css";

function Category({category = null, isActive = false, onChange = null}) {
    return (
        <>
        {category?.items?.length > 0 &&
            <li
                onClick={() => onChange(category.id)}
                className={isActive ? styles.category_active : styles.category }
            >
                {category.name}
            </li>
        }
        </>
    );
}
export function Categories({place, active = "", onChange = null}) {
    return (
        <ul className={styles.categories}>
            {
                place?.categories?.map((category) =>
                    <Category
                        isActive={active == category.id}
                        onChange={() => {onChange(category.id)}}
                        key={category.id}
                        category={category}
                    />
                )
            }
        </ul>
    );
}