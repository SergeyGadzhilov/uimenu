import { useState } from "react";
import styles from "./Products.module.css";
import AccentButton, { Button } from "../../components/Buttons/buttons";

function ProductEditor({product, onCancel = null}) {
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);

    return (
    <li className={styles.eproduct}>
        <div className={styles.image} style={{ backgroundImage: `url(${product.image})`}}></div>
        <div className={styles.data}>
            <div className={styles.header}>
                <input 
                    placeholder="Name"
                    className={styles.ename}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <textarea 
                placeholder="Description"
                className={styles.edescription}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input 
                placeholder="Price"
                className={styles.eprice} 
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <div className={styles.econtrols}>
                <AccentButton>Save</AccentButton>
                <Button onPress={onCancel}>Cancel</Button>
            </div>
        </div>
    </li>);
}

function AddProduct() {
    return (
        <li className={styles.add}>+Add</li>
    );
}

function Product({product}) {
    const [IsEditor, showEditor] = useState(false);

    return (
        <>
        {IsEditor ? <ProductEditor product={product} onCancel={() => showEditor(false)}/> :
        <li className={styles.product}>
            <div className={styles.image} style={{ backgroundImage: `url(${product.image})`}}></div>
            <div className={styles.data}>
                <div className={styles.header}>
                    <h2 className={styles.name}>{product.name}</h2>
                    <img onClick={() => showEditor(true)} className={styles.icon} src={`/assets/images/edit.svg`}/>
                    <img className={styles.icon} src={`/assets/images/remove.svg`}/>
                </div>
                <p className={styles.description}>{product.description}</p>
                <div className={styles.price}>${product.price}</div>
            </div>
        </li>
        }
        </>
    );
}

function ProductCategory({category}) {
    return (
        <li className={styles.category}>
            <div className={styles.category_title}>{category.name}</div>
            <ul className={styles.products}>
                <AddProduct />
                {category.items?.map((product) => <Product key={product.id} product={product}/>)}
            </ul>
        </li>
    )
}

export default function Products({place = null}) {
    return (
        <ul className={styles.list}>
            {place?.categories?.map((category) => <ProductCategory key={category.id} category={category}/>)}
        </ul>
    );
};