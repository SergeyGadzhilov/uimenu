import { Container, Row, Col} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback, createContext } from "react";
import MenuList from "../components/Menu/MenuList";
import { fetchPlaceMenu } from "../api";
import { ShoppingCart } from "../ShoppingCart/core/ShoppingCart";
import { Product } from "../ShoppingCart/core/Product";
import { PlaceType } from "../types";
import { Cart } from "../ShoppingCart/widgets/Cart";

enum Pages {
  Menu,
  Cart
}

const Menu = () => {
  const params = useParams();
  const cart = ShoppingCart.instance(params.id);
  const [page, setPage] = useState(Pages.Menu);
  const [place, setPlace] = useState<PlaceType>();
  let [updates, onUpdate] = useState(0);

  const onFetchPlace = useCallback( async () => {
    const json = await fetchPlaceMenu(params.id) as PlaceType;
    if (json) {
      setPlace(json);
    }
  }, []);

  const onAddProduct = useCallback((product: Product) => {
    cart.add(product);
    onUpdate(++updates);
  }, []);

  const onRemoveProduct = useCallback((product: Product) => {
    cart.remove(product.id);
    onUpdate(++updates);
  }, []);

  useEffect(() => {
    onFetchPlace();
  }, []);

  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          {page == Pages.Menu && <MenuList cart={cart} place={place!} onOrder={onAddProduct} onRemove={onRemoveProduct}/>}
          <Cart cart={cart} onClose={() => setPage(Pages.Menu)} onOpen={() => setPage(Pages.Cart)}/>
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
