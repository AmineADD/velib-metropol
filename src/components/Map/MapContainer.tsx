import { FC } from "react";
import dynamic from "next/dynamic";
import useStyles from './styles'
import { Stations } from "../../types/Stations";
const MapContainer: FC<{
    data: Stations
}> = ({ data }) => {

    const classes = useStyles();
    const MapWithNoSSR = dynamic(() => import("./Map"), {
        ssr: false
    });

    return (
        <div id="map" className={classes.map}>
            <MapWithNoSSR stations={data} />
        </div>
    );
}

export default MapContainer;