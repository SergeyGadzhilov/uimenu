import { useCallback, useState } from "react";
import { CartButton } from "./CartButton";
import CartPage from "./CartPage";
import { Product } from "../core/Product";

export function Cart({cart, onOpen = null, onClose = null}) {
    let [counter, onUpdate] = useState(0);
    const [showCart, setShowCart] = useState(false);

    const Open = useCallback(() => {
        setShowCart(true);
        if (onOpen) onOpen();
    }, []);

    const Close = useCallback(() => {
        setShowCart(false);
        if (onClose) onClose();
    }, []);

    const Add = (product: Product) => {
        cart.add(product);
        onUpdate(++counter);
    };

    const Remove = (product: Product) => {
        cart.remove(product.id);
        if (cart.isEmpty()) {
            Close();
        }
        onUpdate(++counter);
    }

    return (
        <>
            {showCart && <CartPage cart={cart} onAdd={Add} onRemove={Remove} onClose={Close}/>}
            {!showCart && <CartButton cart={cart} onClick={Open}/>}
        </>
    );
}