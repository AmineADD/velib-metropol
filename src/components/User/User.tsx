import { FC } from 'react'
import { user } from '../../types/User';
import { Avatar, Typography } from '@mui/material';

import useStyles from './styles'

const User: FC<{
    user: user,
    nbFavorite: number
}> = ({ user: { name, url }, nbFavorite }) => {

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Avatar alt="profil" src={url} sx={{ width: 80, height: 80 }} />
            <div className={classes.stats}>
                <Typography variant='subtitle1'>{name}</Typography>
                <Typography variant='subtitle2'>Stations Favoris : {nbFavorite} </Typography>
            </div>
        </div>
    )
}

export default User;