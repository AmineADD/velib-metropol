import { FC } from "react";
import dynamic from "next/dynamic";
import styles from './Map.module.css'
const MapContainer: FC = () => {

    const MapWithNoSSR = dynamic(() => import("./Map"), {
        ssr: false
    });

    return (
        <div id="map" className={styles.map}>
            <MapWithNoSSR />
        </div>
    );
}

export default MapContainer;