import { useContext, useState } from "react";
import styles from "./Categories.module.css";
import { CreateCategory, DeleteCategory } from "../../apis/categories";
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext";
import { AuthContextType } from "../../types";

function Category({category=null, isActive=false, onClick=null, onRemove=null}) {
    const auth = useContext(AuthContext) as AuthContextType;
    const [IsLoader, showLoader] = useState(false);

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

    return (
        <li 
            onClick={onClick} 
            className={isActive ? styles.active : styles.item}>
            <div className={styles.name}>{category.name}</div>
            {onRemove != null &&
            (IsLoader ?
                <img className={styles.eremove} src="/assets/images/spinner.svg"/>
            :
                <img className={styles.eremove} onClick={Remove} src={`/assets/images/remove.svg`}/>)
            }
        </li>
    );
}

function AddCategory({placeId, onCreate=null}) {
    const auth = useContext(AuthContext) as AuthContextType;
    const [isLoader, showLoader] = useState(false);
    const [category, setCategory] = useState("");
    const [isEditor, showEditor] = useState(false);

    const Cancel = () => {
        setCategory("");
        showEditor(false);
    }

    const Create = async () => {
        showLoader(true);
        const response = await CreateCategory({placeId, name: category}, auth.token);
        if (response.IsSuccess) {
            Cancel();
            showLoader(false);
            onCreate(category);
            return;
        }

        showLoader(false);
        toast(JSON.stringify(response.Error.Message), {type: "error"});
    }

    return (
        <>
        {isEditor ?
            <li className={styles.editor}>
                <input
                    onChange={(e) => setCategory(e.target.value)}
                    className={styles.ename}
                    type="text"
                    placeholder="Enter name"
                    value={category}
                />
                {
                isLoader ?
                    <img className={styles.eicon} src="/assets/images/spinner.svg"/>
                :
                    <>
                        <img onClick={Create} className={styles.eicon} src="/assets/images/accept.svg"/>
                        <img onClick={Cancel} className={styles.eicon} src="/assets/images/cancel.svg"/>
                    </>
                }
            </li>
        :
            <li onClick={() => showEditor(true)} className={styles.add}>+Add</li>
        }
        </>
    );
}

export default function Categories({place, onChange= null, onCreate=null, onRemove=null}) {
    const [active, setActive] = useState("all");

    const Remove = (id: string) => {
        if (id == active) {
            setActive("all");
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
                <>
                    <Category
                        isActive={active == "all"}
                        category={{id: "all", name: "All"}}
                        onClick={() => Change("all")}
                    />
                    {place?.categories?.map((category) =>
                        <Category
                            key={category.id}
                            category={category}
                            isActive={active == category.id}
                            onClick={() => Change(category.id)}
                            onRemove={Remove}
                        />
                    )}
                </>
                <AddCategory placeId={place?.id} onCreate={onCreate}></AddCategory>
            </ul>
        </div>
        <div className={styles.spacer}></div>
        </div>
    );
};