/* eslint-disable react-hooks/exhaustive-deps */
import { Spinner } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { uploadImage } from "../../api";
import { useCallback, useState } from "react";
import styles from "./dropzone.module.css";


function ImageDropzone({value,onChange}){
    const [loading, setLoading] = useState(false);
    const onDrop = useCallback((acceptedFiles: (string | Blob)[])=>{
        setLoading(true);
        uploadImage(acceptedFiles[0])
        .then((json)=>onChange(json.url))
        .finally(()=>setLoading(false))
    },[]);

    const {getRootProps, getInputProps} = useDropzone(
        {
            onDrop,
            multiple: false,
            accept: 'image/*'
        }
    );

    return (
        <div className={styles.dropzone} {...getRootProps()}>
            <input {...getInputProps()} />
            {
            value ? <img src={value}  alt="img"/>
            : loading ?
            (<Spinner animation="border" role="status" variant="standard" />)
            : <span>Drag & drop image here, or click to select image</span>
            }
        </div>
    )
}

export default ImageDropzone;