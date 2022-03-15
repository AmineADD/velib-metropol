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


const NavBar: FC = () => {
    const { isConnected } = useAppCreateContext();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={Styles.AppBar}>
                <Mode />
                <Toolbar className={Styles.toolTip}>
                    <Stack direction="row">
                        <Chip avatar={<Status status={isConnected} />} label={isConnected ? 'connected' : 'not connected'} />
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default NavBar;
//https://velib-metropole-opendata.smoove.pro/opendata/Velib_Metropole/station_information.json