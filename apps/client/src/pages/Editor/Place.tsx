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
import { AuthContextType, PlaceType } from "../../types";
import SettingsPanel from "./SettingsPannel";
import Categories from "./Categories";
import Products from "./Products";
import styles from "./Place.module.css";

const Place = () => {
  const [place, setPlace] = useState<PlaceType>();
  const [qrCode, setQrCode] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const showQRModal = () => setQrCode(true);
  const hideQRModal = () => setQrCode(false);

  const auth = useContext(AuthContext) as AuthContextType;
  const params = useParams();
  const navigate = useNavigate();

  const onBack = () => navigate("/places");
  const openMenu = () => navigate(`/menu/${place.id}/1`);

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
    updatePlace({id:place!.id, data:{ numberOfTables: tables }, token:auth.token}).then(
      (json:any) => {
        if (json) {
          setPlace(json);
        }
      })
  };

  useEffect(() => {
    onFetchPlace();
  }, []);

  return (
    <MainLayout>
      <SettingsPanel
        onOpenMenu={openMenu}
        onQRCodes={showQRModal}
        onRemove={onRemovePlace}
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
