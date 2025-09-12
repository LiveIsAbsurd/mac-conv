import { useState } from "react";
import styles from "./Place.module.scss";
import macValidator from "../../functions/macValidator";
import macConvert from "../../functions/macConvert";
import vendorAPI from "../../functions/vendorAPI";

const Place = () => {
    const [mac, setMac] = useState();
    const valid = macValidator(mac);
    const [copied, setCopied] = useState(false);
    const [vendor, setVendor] = useState();

    const convertedMac = valid ? macConvert(mac) : null;

    const searchVendor = () => {
        setVendor(vendorAPI(mac));
    }

    return (
        <div className={styles.main}>
            <div>Введите МАКъ</div>
            <input 
                onChange={(e) => {
                    setMac(e.target.value.trim());
                    setVendor("");
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