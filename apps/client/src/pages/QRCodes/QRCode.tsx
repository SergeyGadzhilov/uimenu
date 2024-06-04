import { AiOutlineLink } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { FaPrint } from "react-icons/fa";
import {QRCodeSVG}  from "qrcode.react";
import { useRef } from "react";
import styled from "styled-components";
import { useReactToPrint } from "react-to-print";
import styles from "./qrcode.module.css";
import { Link, useNavigate } from "react-router-dom";

const ComponentToPrint = styled.div`
  text-align: center;
  margin-top: 200px;
  h1 {
    font-size: 100px;
    font-weight: bold;
    margin-bottom: 50px;
  }
  h2 {
    font-size: 60px;
    margin-bottom: 100px;
  }
`;

function Controls({place, table, onPrint = null, onRemove = null}) {
  const navigator = useNavigate();

  return (
    <div className={styles.controls}>
      <h3 className={styles.table_name}>Table {table}</h3>
      <div className={styles.icons}>
        <FaPrint className={styles.control} onClick={onPrint} />
        <Link className={styles.link} target="blank" to={`/menu/${place.id}/${table}`}><AiOutlineLink className={styles.control}/></Link>
        <MdDelete onClick={() => onRemove(place?.numberOfTables -1)} className={styles.control}/>
      </div>
    </div>
  )
}

const QRCode = ({ table, place, onRemove = null }) => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const url = `${window.location.origin}/menu/${place.id}/${table}`;

  return (
    <div className={styles.table}>
      <QRCodeSVG
            value={url}
            size={200}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"L"}
            includeMargin={false}
            imageSettings={{
              src: `${place.image}`,
              x: undefined,
              y: undefined,
              height: 54,
              width: 54,
              excavate: true,
            }}
          />

      <Controls place={place} table={table} onPrint={handlePrint} onRemove={onRemove} />

      <div style={{ display: "none" }}>
        <ComponentToPrint
          ref={componentRef}
          style={{
            background: "#fff",
            backgroundRepeat: "no-repeat",
            position: "fixed",
            fontFamily:`${place.font}`,
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
        >
          <h1>Table {table}</h1>
          <h2 style={{
            color:`${place.color}`
          }}>Scan for menu</h2>
          <QRCodeSVG
            value={url}
            size={500}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"L"}
            includeMargin={true}
            imageSettings={{
              src: `${place.image}`,
              x: undefined,
              y: undefined,
              height: 104,
              width: 104,
              excavate: true,
            }}
          />
        </ComponentToPrint>
      </div>
    </div>
  );
};

export default QRCode;