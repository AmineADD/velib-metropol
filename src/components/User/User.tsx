import { FC } from 'react'
import { user } from '../../types/User';
import { Avatar, Typography } from '@mui/material';

import styles from './User.module.css'

const User: FC<{
    user: user,
    nbFavorite: number
}> = ({ user: { name, url }, nbFavorite }) => {


    return (
        <div className={styles.container}>
            <Avatar alt="profil" src={url} sx={{ width: 80, height: 80 }} />
            <div className={styles.stats}>
                <Typography variant='subtitle1'>{name}</Typography>
                <Typography variant='subtitle2'>Stations Favoris : {nbFavorite} </Typography>
            </div>
        </div>
    )
}

export default User;