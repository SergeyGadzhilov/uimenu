import styles from './palce.module.css';

function PlaceImage({place = null}) {
    return (
      <>
        {place?.image && <img src={place?.image} alt={place?.name}/>}
      </>
    );
}

export function Place({place = null}) {
    return (
        <div className={styles.place}>
            <PlaceImage place={place}/>
            <h3 className={styles.title}>{place?.name}</h3>
        </div>
    );
}