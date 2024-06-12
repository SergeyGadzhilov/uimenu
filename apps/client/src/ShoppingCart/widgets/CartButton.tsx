import styles from "./CartButton.module.css";

export function CartButton({cart, onClick=null}) {
    return (
        <>
        {cart.total > 0 &&
            <div onClick={onClick} className={styles.button}>
                <div>Your order: </div>
                <div className={styles.price}>${cart.price}</div>
            </div>}
        </>
    );
}