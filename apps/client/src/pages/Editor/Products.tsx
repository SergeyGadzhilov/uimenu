import { createContext, useContext, useState } from "react";
import styles from "./Products.module.css";
import AccentButton, { Button } from "../../components/Buttons/buttons";
import { UpdateProduct } from "../../apis/products";
import { LoaderOverlay } from "../../components/Loader/LoaderOverlay";
import AuthContext from "../../context/AuthContext";
import { AuthContextType } from "../../types";

const PlaceContext = createContext(null);

function ProductEditor({product, onUpdated = null, onCancel = null}) {
    const place = useContext(PlaceContext);
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [IsLoading, showLoader] = useState(false);
    const [errors, setErrors] = useState([]);
    const auth = useContext(AuthContext) as AuthContextType;

    const Update = async () => {
        showLoader(true);
        const response = await UpdateProduct(place.id, {
            id: product.id,
            name,
            description,
            price,
            categoryId: product.categoryId,
            image: product.image
        }, auth.token);

        if (response.IsSuccess) {
            onUpdated();
            showLoader(false);
            return;
        }

        setErrors(response.Error.Message);
    }

    return (
    <li className={styles.eproduct}>
        <LoaderOverlay show={IsLoading} errors={errors} onClose={() => showLoader(false)}/>
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
                type="number"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
            />
            <div className={styles.econtrols}>
                <AccentButton onPress={Update}>Save</AccentButton>
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

function Product({product, onUpdated = null}) {
    const [IsEditor, showEditor] = useState(false);

    const Update = () => {
        showEditor(false);
        onUpdated();
    }

    return (
        <>
        {IsEditor ? <ProductEditor product={product} onUpdated={Update} onCancel={() => showEditor(false)}/> :
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

function ProductCategory({category, onUpdated = null}) {
    return (
        <li className={styles.category}>
            <div className={styles.category_title}>{category.name}</div>
            <ul className={styles.products}>
                <AddProduct />
                {category.items?.map((product) => <Product key={product.id} product={product} onUpdated={onUpdated}/>)}
            </ul>
        </li>
    )
}

export default function Products({place = null, onUpdated = null}) {
    return (
        <PlaceContext.Provider value={place}>
            <ul className={styles.list}>
                {place?.categories?.map((category) => 
                    <ProductCategory 
                        key={category.id}
                        category={category}
                        onUpdated={onUpdated}
                    />)}
            </ul>
        </PlaceContext.Provider>
    );
};