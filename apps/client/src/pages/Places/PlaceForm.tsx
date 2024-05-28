import {Form } from 'react-bootstrap'
import { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import ImageDropzone from './ImageDropzone';
import { AuthContextType } from '../../types';
import AccentButton, { Button } from '../../components/Buttons/buttons';
import styles from "./form.module.css";
import { CreatePlace } from '../../apis/places';
import Error from '../../components/Error/Error';

const PlaceForm = ({ onDone })=>{
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

        console.log(`${JSON.stringify(response)}`);

        if (response.IsSuccess) {
            clear();
            onDone();
            return;
        }

        setErorr(response.Error.Message);
    }

    return (
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
                    <Button onPress={onDone}>Cancel</Button>
                </div>
                
            </Form>}
            <Error show={error.length > 0} errors={error} onClose={() => {setErorr([])}}></Error>
        </div>
    )
}

export default PlaceForm