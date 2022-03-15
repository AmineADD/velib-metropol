import { FC, useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { FullscreenControl } from "react-leaflet-fullscreen";

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import "react-leaflet-fullscreen/dist/styles.css";
import { useAppCreateContext } from '../../context/AppCreateContext';


const Map: FC = () => {
    const { stations, nbShow } = useAppCreateContext();
    return (
        <MapContainer
            center={[48.861293, 2.349607]}
            zoom={12}
            scrollWheelZoom
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.MAP_API}`}
            />
            <FullscreenControl />
            {
                stations?.results?.slice(0, nbShow).map((velib, _) => (
                    <Marker key={_} position={[velib.lat, velib.lon]}>
                        <Popup>{velib.name}</Popup>
                    </Marker>
                ))
            }
        </MapContainer>
    )
}

export default Map;