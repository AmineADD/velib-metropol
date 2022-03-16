import { FC } from 'react'
import useStyles from './styles'

const Footer: FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
    const classes = useStyles();
    return (
        <div className={`${classes.description} ${isDarkMode ? classes.dark : classes.transparent}`}>
            <code className={classes.code}>User interface Generation (NOHILE ( SOCIÉTÉ NJG CONNECT)) : Efrei</code>
            <code className={classes.code}>WEBDMFS1 - Groupe DF2</code>
        </div >
    )
}

export default Footer;