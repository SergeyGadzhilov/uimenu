import { useContext, useState } from "react";
import styles from "./Categories.module.css";
import { CreateCategory, DeleteCategory, UpdateCategory } from "../../apis/categories";
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext";
import { AuthContextType } from "../../types";

function Category({category=null, isActive=false, onClick=null, onUpdate=null, onRemove=null}) {
    const auth = useContext(AuthContext) as AuthContextType;
    const [IsLoader, showLoader] = useState(false);
    const [IsEditor, showEditor] = useState(false);

    const Remove = async (event) => {
        event.preventDefault();
        showLoader(true);
        const response = await DeleteCategory(category, auth.token);
        if (response.IsSuccess) {
            showLoader(false);
            if (onRemove) onRemove(category.id);
            return;
        }
        toast(JSON.stringify(response.Error.Message), {type: "error"});
        showLoader(false);
    }

    const Update = () => {
        showEditor(false);
        if(onUpdate) onUpdate();
    }

    return (
        <CategoryEditor
            placeId={category.placeId}
            category = {category}
            show = {IsEditor}
            onCancel={() => showEditor(false)}
            onUpdate={Update}
        >
        <li 
            onClick={onClick}
            className={isActive ? styles.active : styles.item}>
            <div className={styles.name}>{category.name}</div>
            <img className={styles.eicon} onClick={() => showEditor(true)} src={`/assets/images/edit.svg`}/>
            {onRemove != null &&
            (IsLoader ?
                <img className={styles.eicon} src="/assets/images/spinner.svg"/>
            :
                <img className={styles.eicon} onClick={Remove} src={`/assets/images/remove.svg`}/>)
            }
        </li>
        </CategoryEditor>
    );
}

function CategoryEditor({
    children,
    placeId = "",
    category = null,
    show = false,
    onCancel = null,
    onUpdate = null,
    onCreate = null
}) {
    const auth = useContext(AuthContext) as AuthContextType;
    const [isLoader, showLoader] = useState(false);
    const [name, setName] = useState(category.name);

    const Cancel = () => {
        if (onCancel != null) onCancel();
    }

    const Save = async () => {
        if (category.id) {
            await Update();
        }
        else {
            await Create();
        }
    }

    const Create = async () => {
        showLoader(true);
        const response = await CreateCategory({placeId, name}, auth.token);
        if (response.IsSuccess) {
            showLoader(false);
            if (onCreate != null) onCreate();
            return;
        }

        showLoader(false);
        toast(JSON.stringify(response.Error.Message), {type: "error"});
    }

    const Update = async () => {
        showLoader(true);
        const response = await UpdateCategory({
            id: category.id,
            placeId,
            name},
            auth.token
        );

        if (response.IsSuccess) {
            showLoader(false);
            if (onUpdate != null) onUpdate();
            return;
        }

        showLoader(false);
        toast(JSON.stringify(response.Error.Message), {type: "error"});
    }

    return (
        <>
        {show ?
            <li className={styles.editor}>
                <input
                    onChange={(e) => setName(e.target.value)}
                    className={styles.ename}
                    type="text"
                    placeholder="Enter name"
                    value={name}
                />
                {isLoader ?
                    <img className={styles.eicon} src="/assets/images/spinner.svg"/>
                :
                    <>
                        <img onClick={Save} className={styles.eicon} src="/assets/images/accept.svg"/>
                        <img onClick={Cancel} className={styles.eicon} src="/assets/images/cancel.svg"/>
                    </>
                }
            </li>
        :
            children
        }
        </>
    );
}

function AddCategory({placeId, onCreate = null}) {
    const [isEditor, showEditor] = useState(false);
    const Create = () => {
        showEditor(false);
        onCreate();
    }

    return (
        <CategoryEditor
            placeId={placeId}
            show = {isEditor}
            onCreate={Create}
            onCancel={() => showEditor(false)}
            category=""
        >
            <li onClick={() => showEditor(true)} className={styles.add}>+Add</li>
        </CategoryEditor>
    );
}

export default function Categories({place, onChange= null, onCreate=null, onRemove=null, onUpdate=null}) {
    const [active, setActive] = useState(place?.categories[0]?.id);

    const Remove = (id: string) => {
        if (id == active) {
            setActive(place?.categories[0]?.id);
        }
        onRemove();
    }

    const Change = (id) => {
        onChange(id);
        setActive(id);
    }

    return (<div>
        <div className={styles.categories}>
            <div className={styles.title}>
                <h3>Categories</h3>
            </div>
            <ul className={styles.items}>
                
                    {place?.categories?.map((category) =>
                        <Category
                            key={category.id}
                            category={category}
                            isActive={active == category.id}
                            onClick={() => Change(category.id)}
                            onRemove={Remove}
                            onUpdate={onUpdate}
                        />
                    )}
                <AddCategory placeId={place?.id} onCreate={onCreate}></AddCategory>
            </ul>
        </div>
        <div className={styles.spacer}></div>
        </div>
    );
};