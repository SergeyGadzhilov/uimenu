import { MdMenuBook } from "react-icons/md";
import { MdOutlineQrCode2 } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import styles from "./PannelNavigation.module.css";

function Button({children, onClick=null}) {
    return (
        <li onClick={onClick} className={styles.button}>
            {children}
        </li>
    )
}

export default function PannelNavigation({
    onOpenMenu = null,
    onQRCodes = null,
    onRemove = null})
{
    return (
        <ul className={styles.navigation}>
            <Button onClick={onOpenMenu}><MdMenuBook className={styles.icon}/>Menu</Button>
            <Button onClick={onQRCodes}><MdOutlineQrCode2 className={styles.icon}/>QR Codes</Button>
            <Button onClick={onRemove}><MdDelete className={styles.icon}/>Remove</Button>
        </ul>
    );
};