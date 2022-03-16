import { FC } from "react";
import dynamic from "next/dynamic";
import styles from './Map.module.css'
import { Stations } from "../../types/Stations";
const MapContainer: FC<{
    data: Stations
}> = ({ data }) => {

    const MapWithNoSSR = dynamic(() => import("./Map"), {
        ssr: false
    });

    return (
        <div id="map" className={styles.map}>
            <MapWithNoSSR stations={data} />
        </div>
    );
}

export default MapContainer;