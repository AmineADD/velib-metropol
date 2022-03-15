import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Styles from './NavBar.module.css'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Status from './Status/Status';
import Mode from './Mode/Mode';
import { useAppCreateContext } from '../../context/AppCreateContext';
import { Typography } from '@mui/material';


const NavBar: FC = () => {
    const { isConnected, isDarkMode } = useAppCreateContext();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={`${Styles.AppBar} ${isDarkMode ? Styles.dark : Styles.transparent}`}>
                <Mode />
                <Typography variant='h5' className={`${Styles.title} ${isDarkMode ? Styles.dark : Styles.transparent}`}>Vélib' API</Typography>
                <Toolbar className={Styles.toolTip}>
                    <Stack direction="row">
                        <Chip className={`${isDarkMode ? Styles.Chipdark : Styles.Chiptransparent}`} avatar={<Status status={isConnected} />} label={isConnected ? 'connected' : 'not connected'} />
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default NavBar; 