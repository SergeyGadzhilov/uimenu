import {Col, Form, Modal } from 'react-bootstrap'
import { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import ImageDropzone from './ImageDropzone';
import { AuthContextType } from '../../types';
import AccentButton, { Button } from '../../components/Buttons/buttons';
import styles from "./form.module.css";
import { CreatePlace } from '../../apis/places';
import Error from '../../components/Error/Error';

const AddPlaceForm = ({ show = false, onDone = null, onCancel = null})=>{
    const [name, setName]= useState("");
    const [image, setImage]= useState("");
    const [error, setErorr] = useState([]);
    const auth = useContext(AuthContext) as AuthContextType;

    const clear = () => {
        setImage("");
        setName("");
    }

    const onClick = async (event) => {
        event.preventDefault();
        const response = await CreatePlace({name, image,}, auth.token);
        if (response.IsSuccess) {
            clear();
            onDone();
            return;
        }

        setErorr(response.Error.Message);
    }

    return (
        <Modal show={show} onHide={onCancel} centered>
            <Modal.Body>
                <div className={styles.form}>
                    <h2 className={styles.title}>Add new place</h2>
                    {error.length == 0 && <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group>
                            <ImageDropzone value={image} onChange={setImage} />
                        </Form.Group>
                        <div className={styles.button}>
                            <AccentButton onPress={onClick}>Add</AccentButton>
                            <Button onPress={onCancel}>Cancel</Button>
                        </div>
                    </Form>}
                    <Error show={error.length > 0} errors={error} onClose={() => {setErorr([])}}></Error>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default AddPlaceForm

export function AddPlaceButton({children, onClick = null}) {
    return (
        <Col lg={4} >
            <div className={styles.buttonPlace} onClick={onClick}>{children}</div>
        </Col>
    );
};