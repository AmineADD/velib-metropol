import { FC, useState } from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Styles from './Form.module.css'
import { Status } from '../../../types/Status';
import { user } from '../../../types/User';


const Form: FC<Status> = ({ isConnected }) => {

    const [user, setUser] = useState<user>({
        name: '',
        password: '',
        url: 'https://i.ibb.co/qWB7xcq/Octocat-removebg-preview.png',
    });

    const refresh = () => window.location.reload();
    const handleClick = () => {
        if (!isConnected) {
            //validation
            if (user.name !== '' && user.password !== '') {
                localStorage.setItem('user', JSON.stringify(user))
                refresh();
                return;
            }
        }
        localStorage.removeItem('user');
        refresh();
    }

    return (<Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
    >
        <div className={Styles.container}>
            {
                !isConnected && (<>
                    <TextField
                        required
                        id="outlined-required"
                        label="Your Name"
                        size="small"
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                    />

                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        size="small"
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />

                    <TextField
                        id="outlined-required"
                        label="Link to your picture"
                        defaultValue={"https://i.ibb.co/qWB7xcq/Octocat-removebg-preview.png"}
                        onChange={(e) => setUser({ ...user, url: e.target.value })}
                    />
                </>)
            }

            <Button variant="contained" onClick={handleClick}>{isConnected ? 'Disconnect' : 'Connect'}</Button>

        </div>
    </Box>)
}

export default Form;