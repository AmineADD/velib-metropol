import { FC } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import { FullscreenControl } from "react-leaflet-fullscreen";
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import "react-leaflet-fullscreen/dist/styles.css";
import { useAppCreateContext } from '../../context/AppCreateContext';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import useStyles from './styles'
import { Stations } from '../../types/Stations';

const Map: FC<{
    stations: Stations
}> = ({ stations }) => {
    const { nbShow, favorites, setFavorites, zoom, setZoom } = useAppCreateContext();
    const classes = useStyles();

    const MapSurvivor = () => {
        const map = useMapEvents({
            zoom: (e) => {
                setZoom(e.target._zoom);
            },
        })
        return null
    }

    return (
        <MapContainer
            center={[48.861293, 2.349607]}
            zoom={zoom}
            scrollWheelZoom
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.MAP_API}`}
            />
            <FullscreenControl />
            <MapSurvivor />
            {
                stations?.results?.slice(0, nbShow).map((velib, _) => (
                    <Marker key={_} position={[velib.lat, velib.lon]} >
                        <Popup>
                            <p className={classes.popOver}><b>{velib.name}</b>
                                {favorites?.includes(velib) ? <FavoriteSharpIcon /> : <FavoriteBorderSharpIcon className={classes.favorites} onClick={() => { localStorage.setItem("favorites", JSON.stringify([...favorites, velib])); setFavorites([...favorites, velib]) }} />}
                            </p>
                            <span className={classes.popOver}>
                                <span>
                                    <p><b>Capacity</b>: {velib.capacity}</p>
                                    <p><b>Code station</b>: {velib.stationCode}</p>
                                    {velib.rental_methods && (<p className={classes.popOver}><CreditCardIcon />{velib?.rental_methods?.join(" ")}</p>)}
                                </span>
                            </span>


                        </Popup>
                    </Marker>
                ))
            }
        </MapContainer>
    )
}

export default Map;