import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import useStyles from './styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Status from './Status/Status';
import Mode from './Mode/Mode';
import { useAppCreateContext } from '../../context/AppCreateContext';
import { Typography } from '@mui/material';


const NavBar: FC = () => {
    const { isConnected, isDarkMode } = useAppCreateContext();
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={`${classes.AppBar} ${isDarkMode ? classes.dark : classes.transparent}`}>
                <Mode />
                <Typography variant='h5' className={`${classes.title} ${isDarkMode ? classes.dark : classes.transparent}`}>Vélib&apos; API</Typography>
                <Toolbar className={classes.toolTip}>
                    <Stack direction="row">
                        <Chip className={`${isDarkMode ? classes.Chipdark : classes.Chiptransparent}`} avatar={<Status status={isConnected} />} label={isConnected ? 'connected' : 'not connected'} />
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default NavBar; 