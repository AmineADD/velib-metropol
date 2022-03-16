import { Avatar, Fab, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { FC } from 'react'
import { useAppCreateContext } from '../../context/AppCreateContext';
import Footer from '../Main/Footer/Footer';
import LoginOrRegister from '../Modal/Modal';
import User from '../User/User';
import styles from './Favorites.module.css'
import Image from 'next/image'
import CancelIcon from '@mui/icons-material/Cancel';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import Link from 'next/link'
import { Station } from '../../types/Stations';

const Favorites: FC = () => {
    const { user, isDarkMode, isConnected, favorites, setFavorites } = useAppCreateContext();

    const handleRemove = (station: Station) => {
        const newFavorite = [...favorites.filter((f) => f != station)];
        localStorage.setItem("favorites", JSON.stringify(newFavorite))
        setFavorites(newFavorite);
    }
    return (
        <div className={`${styles.grid}  ${isDarkMode ? styles.dark : styles.transparent}`}>
            {
                isConnected ? <>
                    <User user={user} nbFavorite={favorites?.length ?? 0} />
                    <Link href="/">
                        <Fab color='info' variant='extended' sx={{ m: 2 }}>
                            <AddLocationAltIcon sx={{ mr: 1 }} />
                            More ?
                        </Fab>
                    </Link>
                    <div className={styles.list}>
                        {
                            favorites?.map((station) =>
                            (<List className={styles.listBg} sx={{ width: '100%', maxWidth: 360 }}>
                                <div className={styles.listItem}>
                                    <Typography component="span">{station.name}</Typography>
                                    <CancelIcon className={styles.button} onClick={() => handleRemove(station)} />
                                </div>
                                <ListItem className={styles.columnList} >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Image
                                                src="/bicycle.png"
                                                alt="Picture of station"
                                                width={64}
                                                height={64}
                                            />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <div className={styles.ListItemText} >
                                        <ListItemText className={styles.item} primary={"Code"} secondary={station.stationCode} />
                                        <ListItemText className={styles.item} primary={"ID"} secondary={station.station_id} />
                                        <ListItemText className={styles.item} primary={"Capacity"} secondary={station.capacity} />
                                    </div>
                                </ListItem>
                            </List>)
                            )
                        }
                    </div>
                </> : <>
                    <div className={styles.notConnected}>
                        <LoginOrRegister isConnected={false} />
                        <Footer isDarkMode={isDarkMode} />
                    </div>
                </>
            }

        </div>
    )
}


export default Favorites;