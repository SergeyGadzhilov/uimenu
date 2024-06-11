import { Container, Row, Col, Button } from "react-bootstrap";
import { IoCloseOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import MenuList from "../components/Menu/MenuList";
import { fetchPlaceMenu } from "../api";
import ShoppingCart from "../components/ShoppingCart";
import { ShoppingCart as Cart } from "../ShoppingCart/ShoppingCart";
import { Product } from "../ShoppingCart/Product";
import { PlaceType } from "../types";

const OrderButton = styled(Button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
  width: 60px;
  height: 60px;
  color: #fff;
  background-color: #ED6F3B;
`;

enum Pages {
  Menu,
  Cart
}

const Menu = () => {
  const params = useParams();
  const cart = Cart.instance(params.id);
  const [page, setPage] = useState(Pages.Menu);
  const [place, setPlace] = useState<PlaceType>();
  const [products, setProducts] = useState(cart.products);

  const onFetchPlace = useCallback( async () => {
    const json = await fetchPlaceMenu(params.id) as PlaceType;
    if (json) {
      setPlace(json);
    }
  }, []);

  const onAddProduct = useCallback((product: Product) => {
    cart.add(product);
    setProducts(cart.products);
  }, []);

  const onRemoveProduct = useCallback((product: Product) => {
    cart.remove(product.id);
    setProducts(cart.products);
    if (cart.isEmpty()) {
      setPage(Pages.Menu);
    }
  }, []);

  useEffect(() => {
    onFetchPlace();
  }, []);

  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          {page == Pages.Cart && <ShoppingCart
              items={products}
              onAdd={onAddProduct}
              onRemove={onRemoveProduct}
          />}
          {page == Pages.Menu && <MenuList place={place!} onOrder={onAddProduct}/>}
        </Col>
      </Row>

      {cart.total ? (
        <OrderButton
          variant="standard"
          onClick={() => page == Pages.Cart ? setPage(Pages.Menu) : setPage(Pages.Cart)}
        >
          {page == Pages.Cart ? <IoCloseOutline size={25} /> : cart.total}
        </OrderButton>
      ) : null}
    </Container>
  );
};

export default Menu;
