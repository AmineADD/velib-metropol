import { FC, useState } from 'react'

import Fab from '@mui/material/Fab';
import SettingsIcon from '@mui/icons-material/Settings';
import Paper from '@mui/material/Paper';
import User from '../User/User';
import LoginOrRegister from '../Modal/Modal';
import { useAppCreateContext } from '../../context/AppCreateContext';

import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import styles from './ToolTip.module.css'


const ToolTip: FC = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { isDarkMode, user, isConnected, nbShow, setNbShow, stations: { results: { length } } } = useAppCreateContext();

    const handleChange = (e) => {
        setNbShow(e.target.value)
    }

    return (
        <span className={styles.fabButton}>
            {isOpen && (
                <Paper className={`${styles.paper} ${isDarkMode ? styles.dark : styles.transparent}`}
                    variant="outlined"
                    square>
                    <User user={user} />
                    <span>Stations to show : {nbShow}</span>
                    <span className={styles.slider}>
                        <Typography >0</Typography>
                        <Slider
                            valueLabelDisplay="auto"
                            aria-label="custom thumb label"
                            value={nbShow}
                            onChange={handleChange}
                            step={25}
                            max={length ?? 0}
                        />
                        <Typography >{length ?? 0}</Typography>
                    </span>
                    <LoginOrRegister isConnected={isConnected} />
                </Paper>)}
            <Fab onClick={() => setIsOpen(!isOpen)} variant="extended" sx={{ m: 2 }}>
                <SettingsIcon sx={{ mr: 1 }} />
                Settings
            </Fab>
        </span>
    )
}
export default ToolTip;