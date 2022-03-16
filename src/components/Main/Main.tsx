
import { FC } from 'react'
import { useAppCreateContext } from '../../context/AppCreateContext';
import { Stations } from '../../types/Stations';
import MapContainer from '../Map/MapContainer';
import LoginOrRegister from '../Modal/Modal';
import ToolTip from '../ToolTip/ToolTip';
import Footer from './Footer/Footer';
import styles from './Main.module.css'

const Main: FC<{
  stations: Stations
}> = ({
  stations
}) => {
    const { user, isDarkMode } = useAppCreateContext();
    return (
      <div className={styles.grid} >
        {user?.name ? <>
          <MapContainer data={stations} />
          <ToolTip />
        </> : <>
          <div className={styles.notConnected}>
            <LoginOrRegister isConnected={false} />
            <Footer isDarkMode={isDarkMode} />
          </div>
        </>}
      </div >
    )
  };

export default Main;
