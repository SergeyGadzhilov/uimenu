/* eslint-disable react-hooks/exhaustive-deps */
import { Spinner } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { useCallback, useContext, useState } from "react";
import styles from "./dropzone.module.css";
import { UploadImage } from "../../apis/aws";
import AuthContext from "../../context/AuthContext";
import { AuthContextType } from "../../types";
import Error from "../../components/Error/Error";

enum Pages {
    Empty,
    Loader,
    Image,
    Error
}

function ImageDropzone({place = null, value = null, onChange = null}) {
    const MAX_SIZE = 10485760; //10Mb
    const auth = useContext(AuthContext) as AuthContextType;
    const [page, setPage] = useState(value ? Pages.Image : Pages.Empty);
    const [errors, setErrors] = useState([]);

    const onDrop = useCallback(async (acceptedFiles: File[])=>{
        setPage(Pages.Loader);

        if (acceptedFiles[0]?.size > MAX_SIZE) {
            setErrors([`Max file size is: 10Mb`]);
            setPage(Pages.Error);
            return;
        }

        const response = await UploadImage({
            menu: place?.id ?? "",
            image: acceptedFiles[0]
        }, auth.token);
        
        if (response.IsSuccess && response.Data.url) {
            if (onChange) onChange(response.Data.url);
            setPage(Pages.Image);
            return;
        }

        setErrors(response.Error.Message);
        setPage(Pages.Error);
    },[]);

    const {getRootProps, getInputProps} = useDropzone(
        {
            onDrop,
            multiple: false,
            accept: 'image/*',
        }
    );

    return (
        <div className={styles.dropzone} {...getRootProps()}>
            <input {...getInputProps()} />
            {page == Pages.Loader && <Spinner animation="border" role="status" variant="standard" />}
            {page == Pages.Empty && <span>Drag & drop image here, or click to select image</span>}
            {page == Pages.Image && <img className={styles.image} src={value}  alt="img"/>}
            {<Error show={page == Pages.Error} errors={errors}>
                Fail to upload the image
            </Error>}
        </div>
    )
}

export default ImageDropzone;