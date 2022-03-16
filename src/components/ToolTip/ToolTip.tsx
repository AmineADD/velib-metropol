import { FC, useState } from 'react'

import Fab from '@mui/material/Fab';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';
import User from '../User/User';
import LoginOrRegister from '../Modal/Modal';
import { useAppCreateContext } from '../../context/AppCreateContext';

import Slider from '@mui/material/Slider';
import Link from 'next/link'

import Typography from '@mui/material/Typography';
import useStyles from './styles'


const ToolTip: FC = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { isDarkMode, user, isConnected, nbShow, setNbShow, favorites: { length: favo } } = useAppCreateContext();

    const handleChange = (e) => {
        setNbShow(e.target.value)
    }

    const classes = useStyles();
    return (
        <>
            <span className={classes.fabButton}>
                {isOpen && (
                    <Paper className={`${classes.paper} ${isDarkMode ? classes.dark : classes.transparent}`}
                        variant="outlined"
                        square>
                        <User user={user} nbFavorite={favo} />
                        <span>Stations to show : {nbShow}</span>
                        <span className={classes.slider}>
                            <Typography >0</Typography>
                            <Slider
                                valueLabelDisplay="auto"
                                aria-label="custom thumb label"
                                value={nbShow}
                                onChange={handleChange}
                                step={25}
                                max={1425}
                            />
                            <Typography >{1425}</Typography>
                        </span>
                        <LoginOrRegister isConnected={isConnected} />
                    </Paper>)}
                <Fab onClick={() => setIsOpen(!isOpen)} variant="extended" sx={{ m: 2 }}>
                    <SettingsIcon sx={{ mr: 1 }} />
                    Settings
                </Fab>
            </span>
            <Link href="/favorites" passHref>
                <Fab className={classes.fabFavorite} color='secondary' variant="extended" aria-label="like" sx={{ m: 2 }}>
                    <FavoriteIcon sx={{ mr: 1 }} />
                    {favo}
                </Fab>
            </Link>
        </>
    )
}
export default ToolTip;