import { FC } from 'react'
import { useAppCreateContext } from '../../context/AppCreateContext';
import LoginOrRegister from '../Modal/Modal';
import User from '../User/User';
import styles from './Main.module.css'

const Main: FC = () => {
  const { user, isDarkMode } = useAppCreateContext();
  return (
    <div className={`${styles.description} ${isDarkMode ? styles.dark : styles.transparent}`}>
      <div className={styles.description}>
        <code className={styles.code}>WEBDMFS1 - Groupe DF2 - User interface Generation (NOHILE ( SOCIÉTÉ NJG CONNECT)) : Efrei</code>
        <LoginOrRegister isConnected={user?.name !== undefined} />
      </div>
      {
        console.log(process.env)
      }
      <div className={styles.grid}>
        {user?.name && (<User user={user} />)}
      </div>
    </div>)
};

export default Main;