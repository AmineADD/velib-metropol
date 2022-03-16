import { FC } from 'react'
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import useStyles from './styles';
import { useAppCreateContext } from '../../../context/AppCreateContext';

const Mode: FC = () => {
    const { isDarkMode, setIsDarkMode } = useAppCreateContext();
    const classes = useStyles();
    return (
        <RadioGroup name="use-radio-group" className={classes.root}>
            <FormControlLabel className={isDarkMode ? classes.dark : classes.transparent} value="Light" checked={!isDarkMode} label="Light" control={<Radio onChange={() => setIsDarkMode(false)} />} />
            <FormControlLabel className={isDarkMode ? classes.dark : classes.transparent} value="Dark" label="Dark" checked={isDarkMode} control={<Radio onChange={() => setIsDarkMode(true)} />} />
        </RadioGroup>
    )
}

export default Mode;