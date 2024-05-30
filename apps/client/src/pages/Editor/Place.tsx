/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AiOutlineDelete } from "react-icons/ai";
import { Row, Col, Button, Modal } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import {
  fetchPlace,
  removePlace,
  removeCategory,
  removeMenuItem,
  updatePlace,
} from "../../api";
import AuthContext from "../../context/AuthContext";
import MainLayout from "../../layouts/MainLayout";
import MenuItemForm from "../../containers/MenuItemForm";
import MenuItem from "../../components/MenuItem";
import QRCodeModal from "../../components/QRCodeModal";
import { toast } from "react-toastify";
import { AuthContextType, PlaceType } from "../../types";
import SettingsPanel from "./SettingsPannel";
import Categories from "./Categories";
import Products from "./Products";
import styles from "./Place.module.css";

const Panel = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
`;

const Place = () => {
  const [place, setPlace] = useState<PlaceType>();
  const [menuItemFormShow, setMenuItemFormShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [qrCode, setQrCode] = useState(false);

  const showModal = () => setMenuItemFormShow(true);
  const hideModal = () => setMenuItemFormShow(false);

  const showQRModal = () => setQrCode(true);
  const hideQRModal = () => setQrCode(false);

  const auth = useContext(AuthContext) as AuthContextType;
  const params = useParams();
  const navigate = useNavigate();

  const onBack = () => navigate("/places");

  const onFetchPlace = async () => {
    const json:any = await fetchPlace({ id: params.id, token: auth.token });
    if (json) {
      setPlace(json);
    }
  };

  const onRemovePlace = () => {
    if (window.confirm("Are you sure?")) {
      removePlace({ id: params.id, token: auth.token }).then(onBack);
    }
  };

  const onRemoveCategory = async (id: string) => {
    if (window.confirm("Are you sure?")) {
      await removeCategory({id, token:auth.token}, place!.id).then(onFetchPlace);
      toast("Category removed successfully",{type: "info"});
    }
  };

  const onRemoveMenuItem = (id: string) => {
    if (window.confirm("Are you sure?")) {
      removeMenuItem({id, token:auth.token}, place!.id).then(onFetchPlace);
      toast("Item removed successfully",{type: "info"})
    }
  };

  const onUpdatePlace = (tables: number):void => {
    updatePlace({id:place!.id, data:{ numberOfTables: tables }, token:auth.token}).then(
      (json:any) => {
        if (json) {
          setPlace(json);
          toast("Place updated successfully",{type: "success"})
        }
      }
    );
  };

  useEffect(() => {
    onFetchPlace();
  }, []);

  return (
    <MainLayout>
      <SettingsPanel
        onQRCodes={showQRModal}
        onRemove={onRemovePlace}
        onOrders={() => navigate(`/places/${params!.id}/orders`)}
        onSettings={() => navigate(`/places/${params.id}/settings`)}
      />
      <div className={styles.editor}>
        <Categories place={place} onCreate={onFetchPlace} onRemove={onFetchPlace}/>
        <Products place={place} />
      </div>
      

      <Modal show={menuItemFormShow} onHide={hideModal} centered>
        <Modal.Body>
          <h4 className="text-center">Menu Item</h4>
          <MenuItemForm
            place={place}
            onDone={() => {
              onFetchPlace();
              hideModal();
            }}
            item={selectedItem}
          />
        </Modal.Body>
      </Modal>

      <QRCodeModal
        show={qrCode}
        onHide={hideQRModal}
        place={place}
        onUpdatePlace={onUpdatePlace}
      />
    </MainLayout>
  );
};

export default Place;
