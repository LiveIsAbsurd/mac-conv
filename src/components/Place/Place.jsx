import { useState } from "react";
import styles from "./Place.module.scss";
import macValidator from "../../functions/macValidator";
import macConvert from "../../functions/macConvert";
import vendorAPI from "../../functions/vendorAPI";
import labuba from "../../assets/labuba.png";

const Place = () => {
    const [mac, setMac] = useState();
    const [labubuPic, setLabubuPic] = useState(false);
    const valid = macValidator(mac);
    const [copied, setCopied] = useState(false);
    const [vendor, setVendor] = useState();

    const convertedMac = valid ? macConvert(mac) : null;

    const searchVendor = () => {
        setVendor(vendorAPI(mac));
    }

    const setLabubu = (text) => {
        if (text == "labubu") {
            setLabubuPic(!labubuPic);
        }
    }

    return (
        <div className={styles.main}>
            {labubuPic ? <img onClick={() => setLabubuPic(false)} className={styles.labuba} src={labuba}></img> : null}
            <div>Введите МАКъ</div>
            <input 
                onChange={(e) => {
                    setMac(e.target.value.trim());
                    setVendor("");
                    setLabubu(e.target.value.trim());
                }} 
                value={mac} type="text" className={`${styles.input} ${!valid && mac ? styles.input_alarm : ''}`} />

            <button onClick={() => valid ? searchVendor() : null} className={styles.button}>Узнать производителя</button>

           {vendor ? <div>{vendor}</div> : null}

            <code className={styles.covertedMac} onClick={() => {
                if (!convertedMac) return;
                navigator.clipboard.writeText(convertedMac)
                    .then(() => {
                        setCopied(true);
                        setTimeout(() => setCopied(false), 1000);
                    });
            }}>
                {valid && mac ? convertedMac : "Только корректный пожалуйста"}
            </code>
            
            <div className={styles.copy} >{copied ? "✓ Скопировано!" : "Нажми на мак чтобы скопировать"}</div>
        </div>
    )
};

export default Place;