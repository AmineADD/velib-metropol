
import { FC } from 'react'
import { useAppCreateContext } from '../../context/AppCreateContext';
import { Stations } from '../../types/Stations';
import MapContainer from '../Map/MapContainer';
import LoginOrRegister from '../Modal/Modal';
import ToolTip from '../ToolTip/ToolTip';
import Footer from './Footer/Footer';
import useStyles from './styles'

const Main: FC<{
  stations: Stations
}> = ({
  stations
}) => {
    const { user, isDarkMode } = useAppCreateContext();
    const classes = useStyles();
    return (
      <div className={classes.grid} >
        {user?.name ? <>
          <MapContainer data={stations} />
          <ToolTip />
        </> : <>
          <div className={classes.notConnected}>
            <LoginOrRegister isConnected={false} />
            <Footer isDarkMode={isDarkMode} />
          </div>
        </>}
      </div >
    )
  };

export default Main;
