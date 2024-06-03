/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import AuthContext from "../../context/AuthContext";
import { Row } from "react-bootstrap";
import AddPlaceForm, { AddPlaceButton } from "./PlaceForm";
import { AuthContextType } from "../../types";
import  styles from "./places.module.css";
import Place from "./Place";
import { GetPlaces } from "../../apis/places";

const Places = () => {
    const [places, setPlaces] = useState([]);
    const [show, setShow] = useState(false)
    const auth = useContext(AuthContext) as AuthContextType;

    useEffect(() => {
       onFetchPlaces();
    },[])

    const onFetchPlaces = async () => {
        const response = await GetPlaces(auth.token);
        if(response.IsSuccess){
            setPlaces(response.Data);
        }
    }

    const onDone =()=>{
        onFetchPlaces();
        setShow(false);
    }

    return(
    <MainLayout>
        <section className={styles.places}>
            <AddPlaceForm show={show} onDone={onDone} onCancel={()=> setShow(false)}/>
            <Row>
                { places.map((place: any) => <Place key={place.id} place={place} />)}
                <AddPlaceButton onClick={() => setShow(true)}>Add</AddPlaceButton>
            </Row>
        </section>
    </MainLayout>)
}

export default Places;