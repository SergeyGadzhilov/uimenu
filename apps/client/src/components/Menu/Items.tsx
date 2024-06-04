import styles from "./items.module.css";

function CategoryItems({items = null}) {
    return (<></>);
}

function Category({category}) {
    return (
        <>
            { category?.items?.length > 0 && (
                <div>
                    <h3 className={styles.category_title}>{category.name}</h3>
                    <CategoryItems items={category?.items} />
                </div>
            ) }
        </>
    );
}

export function Items({categories}) {
    return (
        <>
            {categories?.map((category) => <Category key={category.id} category={category}/>)}
        </>
    );
}