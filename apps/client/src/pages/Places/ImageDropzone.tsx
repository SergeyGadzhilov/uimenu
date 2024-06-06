/* eslint-disable react-hooks/exhaustive-deps */
import { Spinner } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { useCallback, useContext, useState } from "react";
import styles from "./dropzone.module.css";
import { UploadImage } from "../../apis/aws";
import AuthContext from "../../context/AuthContext";
import { AuthContextType } from "../../types";

function ImageDropzone({place = null, value = null, onChange = null}){
    const auth = useContext(AuthContext) as AuthContextType;
    const [loading, setLoading] = useState(false);
    const onDrop = useCallback(async (acceptedFiles: File[])=>{
        setLoading(true);
        const response = await UploadImage({
            menu: place?.id ?? "",
            image: acceptedFiles[0]
        }, auth.token);
        
        if (response.IsSuccess) {
            if (onChange) onChange(response.Data.url);
        }
        setLoading(false);
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