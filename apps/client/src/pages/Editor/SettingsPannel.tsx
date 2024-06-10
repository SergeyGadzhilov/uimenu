import { useNavigate } from "react-router-dom";
import styles from "./SettingsPannel.module.css";
import { Button } from "react-bootstrap";
import { IoMdArrowBack } from "react-icons/io";
import PannelNavigation from "./PannelNavigation";

export default function SettingsPanel({onOpenMenu= null, onQRCodes = null, onRemove = null})
{
    const navigate = useNavigate();
    const onBack = () => navigate("/places");

    return (
        <div className={styles.pannel}>
            <Button variant="link" onClick={onBack}>
                <IoMdArrowBack size={25} color="black" />
            </Button>
            <div className={styles.spacer}></div>
            <PannelNavigation
                onOpenMenu={onOpenMenu}
                onQRCodes={onQRCodes}
                onRemove={onRemove}
            />
        </div>
    );
};