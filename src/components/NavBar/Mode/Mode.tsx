import { FC } from 'react'
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import styles from './Mode.module.css'
import { useAppCreateContext } from '../../../context/AppCreateContext';

const Mode: FC = () => {

    const { isDarkMode, setIsDarkMode } = useAppCreateContext();

    return (
        <RadioGroup name="use-radio-group" className={styles.root}>
            <FormControlLabel value="Light" checked={!isDarkMode} label="Light" control={<Radio onChange={() => setIsDarkMode(false)} />} />
            <FormControlLabel value="Dark" label="Dark" checked={isDarkMode} control={<Radio onChange={() => setIsDarkMode(true)} />} />
        </RadioGroup>
    )
}

export default Mode;