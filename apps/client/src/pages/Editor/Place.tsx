/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import {
  fetchPlace,
  removePlace,
  updatePlace,
} from "../../api";
import AuthContext from "../../context/AuthContext";
import MainLayout from "../../layouts/MainLayout";
import QRCodeModal from "../QRCodes/QRCodesPage";
import { toast } from "react-toastify";
import { AuthContextType } from "../../types";
import SettingsPanel from "./SettingsPannel";
import Categories from "./Categories";
import Products from "./Products";
import styles from "./Place.module.css";
import { UpdatePlace } from "../../apis/places";
import { PlaceDTO } from "../../apis/dto/PlacesDTO";

const Place = () => {
  const [place, setPlace] = useState<PlaceDTO>();
  const [qrCode, setQrCode] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

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

  const onUpdatePlace = async (tables: number) => {
    const response = await UpdatePlace({id: place?.id, numberOfTables: tables}, auth.token);
    if (response.IsSuccess) {
      setPlace(response.Data);
      return;

    }
    toast("Error",{type: "success"})
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
        <Categories
          place={place}
          onChange={(id) => setActiveCategory(id)}
          onCreate={onFetchPlace}
          onRemove={onFetchPlace}
          onUpdate={onFetchPlace}
        />
        <Products categoryId={activeCategory} place={place} onUpdated={onFetchPlace}/>
      </div>
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
