import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./place.module.css";

export default function Place({place}) {
    const navigate = useNavigate();
    const goToPlace = (id:string) => navigate(`/places/${id}/`);
    
    return (
        <Col lg={4}>
            <div className={styles.place} onClick={()=>goToPlace(place.id)}>
                <div style={{backgroundImage:`url(${place.image})`}}></div>
                <p>{place.name}</p>
            </div>
        </Col>
    );
};