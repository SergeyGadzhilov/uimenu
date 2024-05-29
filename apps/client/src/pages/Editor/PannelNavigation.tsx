import styles from "./PannelNavigation.module.css";

function Button({icon="", onClick=null, children}) {
    return (
        <li onClick={onClick} className={styles.button}>
            <img className={styles.icon} src={`/assets/images/${icon}`}/>
            {children}
        </li>
    );
}

export default function PannelNavigation({
    onOrders = null,
    onQRCodes = null,
    onSettings = null,
    onRemove = null})
{
    return (
        <ul className={styles.navigation}>
            <Button onClick={onOrders} icon="orders.svg">Orders</Button>
            <Button onClick={onQRCodes} icon="qrcodes.svg">QRCodes</Button>
            <Button onClick={onSettings} icon="settings.svg">Settings</Button>
            <Button onClick={onRemove} icon="remove.svg">Remove</Button>
        </ul>
    );
};