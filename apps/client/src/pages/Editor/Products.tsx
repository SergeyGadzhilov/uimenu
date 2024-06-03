import { createContext, useContext, useState } from "react";
import styles from "./Products.module.css";
import AccentButton, { Button } from "../../components/Buttons/buttons";
import { CreateProduct, DeleteProduct, UpdateProduct } from "../../apis/products";
import { LoaderOverlay } from "../../components/Loader/LoaderOverlay";
import AuthContext from "../../context/AuthContext";
import { AuthContextType } from "../../types";
import ImageDropzone from "../Places/ImageDropzone";

const PlaceContext = createContext(null);

function ProductEditor({product = null, onUpdated = null, onCancel = null}) {
    const place = useContext(PlaceContext);
    const [name, setName] = useState(product?.name);
    const [description, setDescription] = useState(product?.description);
    const [price, setPrice] = useState(product?.price);
    const [image, setImage] = useState(product?.image);
    const [IsLoading, showLoader] = useState(false);
    const [errors, setErrors] = useState([]);
    const auth = useContext(AuthContext) as AuthContextType;

    const Save = async () => {
        if (product?.id) {
            await Update();
        }
        else {
            await Create();
        }
    }

    const Create = async () => {
        showLoader(true);
        const response = await CreateProduct(place.id, {
            name,
            description,
            price,
            categoryId: product?.categoryId,
            image: image
        }, auth.token);

        if (response.IsSuccess) {
            onUpdated();
            showLoader(false);
            return;
        }

        setErrors(response.Error.Message);
    }

    const Update = async () => {
        showLoader(true);
        const response = await UpdateProduct(place.id, {
            id: product?.id,
            name,
            description,
            price,
            categoryId: product?.categoryId,
            image: image
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
        <ImageDropzone value={image} onChange={setImage} />
        <div className={styles.edata}>
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
                value={price ?? 0}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
            />
            <div className={styles.econtrols}>
                <AccentButton onPress={Save}>Save</AccentButton>
                <Button onPress={onCancel}>Cancel</Button>
            </div>
        </div>
    </li>);
}

function AddProduct({categoryId, onUpdated = null}) {
    const [IsEditor, showEditor] = useState(false);
    const Update = () => {
        showEditor(false);
        onUpdated();
    }

    return (
        <>
        {
            IsEditor ? <ProductEditor product={{categoryId: categoryId}} onUpdated={Update} onCancel={() => showEditor(false)}/> :
            <li onClick={() => showEditor(true)} className={styles.add}>+Add</li>
        }
        </>
    );
}

function Product({product, onUpdated = null}) {
    const place = useContext(PlaceContext);
    const auth = useContext(AuthContext) as AuthContextType;
    const [IsLoading, showLoader] = useState(false);
    const [IsEditor, showEditor] = useState(false);
    const [errors, setErrors] = useState([]);

    const Update = () => {
        showEditor(false);
        onUpdated();
    }

    const Remove = async () => {
        showLoader(true);
        const response = await DeleteProduct(place.id, product.id, auth.token);
        if (response.IsSuccess) {
            showLoader(false);
            onUpdated();
            return;
        }
        setErrors(response.Error.Message);
    }

    return (
        <>
        {IsEditor ? <ProductEditor product={product} onUpdated={Update} onCancel={() => showEditor(false)}/> :
        <li className={styles.product}>
            <LoaderOverlay show={IsLoading} errors={errors} onClose={() => showLoader(false)}/>
            <div className={styles.image} style={{ backgroundImage: `url(${product.image})`}}></div>
            <div className={styles.data}>
                <div className={styles.header}>
                    <h2 className={styles.name}>{product.name}</h2>
                    <img onClick={() => showEditor(true)} className={styles.icon} src={`/assets/images/edit.svg`}/>
                    <img onClick={Remove} className={styles.icon} src={`/assets/images/remove.svg`}/>
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
        <li id={category.id} className={styles.category}>
            <div className={styles.category_title}>{category.name}</div>
            <ul className={styles.products}>
                <AddProduct categoryId={category?.id} onUpdated={onUpdated}/>
                {category.items?.map((product) => <Product key={product.id} product={product} onUpdated={onUpdated}/>)}
            </ul>
        </li>
    )
}

export default function Products({place = null, categoryId="", onUpdated = null}) {
    document.getElementById(categoryId)?.scrollIntoView({behavior: "smooth"});

    return (
        <PlaceContext.Provider value={place}>
            <ul className={styles.list}>
                {place?.categories?.map((category) => 
                    <ProductCategory
                        key={category.id}
                        category={category}
                        onUpdated={onUpdated}
                    />)
                }
            </ul>
        </PlaceContext.Provider>
    );
};