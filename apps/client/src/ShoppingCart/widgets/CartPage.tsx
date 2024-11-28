import { Card } from "react-bootstrap";
import OperationButton from "../../components/OperationButton";
import { AccentButton, Button } from "../../components/Buttons/buttons";
import styles from "./CartPage.module.css";

const CartPage = ({cart, onAdd, onRemove, onClose, onClear}) => {
  return (
    <>
      <h3 className="text-center mb-4">
        <b>Your Order</b>
      </h3>
      <Card>
        <Card.Body>
          {cart.products.map((item) => (
            <div key={item.id} className="d-flex mb-4 align-items-center">
              <div className="flex-grow-1">
                <p className="mb-0">
                  <b>{item.name}</b>
                </p>
                <span>${item.price}</span>
              </div>

              <div className="d-flex align-items-center">
                <OperationButton className="opbnt"
                  variant="lightgray"
                  size="sm"
                  onClick={() => onRemove(item)}
                >
                  -
                </OperationButton>
                <span>{item.quantity}</span>
                <OperationButton className="opbnt"
                  variant="lightgray"
                  size="sm"
                  onClick={() => onAdd(item)}
                >
                  +
                </OperationButton>
              </div>
            </div>
          ))}

          <hr />
          <div className="d-flex justify-content-between">
            <h5>
              <b>Total</b>
            </h5>
            <h5>
              <b>${cart.price}</b>
            </h5>
          </div>
        </Card.Body>
      </Card>
      <div className={styles.buttons}>
          <AccentButton onPress={onClose}>Back to menu</AccentButton>
          <Button onPress={onClear}>Clear</Button>
      </div>
    </>
  );
};

export default CartPage;