import { Modal } from 'react-bootstrap';
import QRCode from './QRCode';
import { PlaceType } from '../../types';
import styles from "./qrcode.module.css";

function AddNewTable({place = null, onAdd = null}) {
  return (
      <li onClick={() => onAdd(place?.numberOfTables + 1)} className={styles.add}>+Add</li>
  );
}

function Tables({place, onRemove=null}) {
  return (
    <>
      {
        Array.from({ length: place?.numberOfTables }, (_, i) => i + 1).map(
          (table) => <QRCode table={table} place={place} onRemove={onRemove}/>
         )
      }
    </>
  );
}

const QRCodeModal = ({ show, onHide, place, onUpdatePlace }:{show:boolean, onHide:()=>void, place:PlaceType,onUpdatePlace:(tn:number)=> void}) => (
  <Modal show={show} onHide={onHide} centered>
    <Modal.Body className={styles.window}>
        <h3 className={styles.title}>QR Codes for tables</h3>
        <ul className={styles.tables}>
          <Tables place={place} onRemove={onUpdatePlace}/>
          <AddNewTable place={place} onAdd={onUpdatePlace}/>
        </ul>
    </Modal.Body>
  </Modal>
);

export default QRCodeModal;