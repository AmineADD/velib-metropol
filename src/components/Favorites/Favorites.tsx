import { Avatar, Fab, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { FC } from 'react'
import { useAppCreateContext } from '../../context/AppCreateContext';
import Footer from '../Main/Footer/Footer';
import LoginOrRegister from '../Modal/Modal';
import User from '../User/User';
import useStyles from './styles';
import Image from 'next/image'
import CancelIcon from '@mui/icons-material/Cancel';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import Link from 'next/link'
import { Station } from '../../types/Stations';

const Favorites: FC = () => {
    const { user, isDarkMode, isConnected, favorites, setFavorites } = useAppCreateContext();
    const classes = useStyles();
    const handleRemove = (station: Station) => {
        const newFavorite = [...favorites.filter((f) => f != station)];
        localStorage.setItem("favorites", JSON.stringify(newFavorite))
        setFavorites(newFavorite);
    }
    return (
        <div className={`${classes.grid}  ${isDarkMode ? classes.dark : classes.transparent}`}>
            {
                isConnected ? <>
                    <User user={user} nbFavorite={favorites?.length ?? 0} />
                    <Link href="/" passHref>
                        <Fab color='info' variant='extended' sx={{ m: 2 }}>
                            <AddLocationAltIcon sx={{ mr: 1 }} />
                            More ?
                        </Fab>
                    </Link>
                    <div className={classes.list}>
                        {
                            favorites?.map((station, __key_) =>
                            (<List key={__key_} className={classes.listBg} sx={{ width: '100%', maxWidth: 360 }}>
                                <div className={classes.listItem}>
                                    <Typography component="span">{station.name}</Typography>
                                    <CancelIcon className={classes.button} onClick={() => handleRemove(station)} />
                                </div>
                                <ListItem className={classes.columnList} >
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
                                    <div className={classes.ListItemText} >
                                        <ListItemText className={classes.item} primary={"Code"} secondary={station.stationCode} />
                                        <ListItemText className={classes.item} primary={"ID"} secondary={station.station_id} />
                                        <ListItemText className={classes.item} primary={"Capacity"} secondary={station.capacity} />
                                    </div>
                                </ListItem>
                            </List>)
                            )
                        }
                    </div>
                </> : <>
                    <div className={classes.notConnected}>
                        <LoginOrRegister isConnected={false} />
                        <Footer isDarkMode={isDarkMode} />
                    </div>
                </>
            }

        </div>
    )
}


export default Favorites;