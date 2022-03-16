import { FC, useState } from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import useStyles from './styles'
import { Status } from '../../../types/Status';
import { user } from '../../../types/User';
import { send } from 'emailjs-com';


const Form: FC<Status> = ({ isConnected }) => {

    const [isError, setIsError] = useState(false)
    const [user, setUser] = useState<user>({
        name: '',
        email: '',
        url: 'https://i.ibb.co/qWB7xcq/Octocat-removebg-preview.png',
    });

    const refresh = () => window.location.reload();
    const handleClick = () => {
        if (!isConnected) {
            //validation
            if (user.name !== '' && user.email !== '') {
                localStorage.setItem('user', JSON.stringify(user));
                notify();
                return refresh();
            } else {
                return setIsError(true);
            }
        }
        localStorage.removeItem('user');
        refresh();
    }

    const notify = () => {
        send(
            process.env.SERVICE_ID,
            process.env.TEMPLATE_ID,
            user,
            process.env.USER_ID
        );
    };
    const classes = useStyles();
    return (<Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
    >
        <div className={classes.container}>
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
                        type="email"
                        id="outlined-required"
                        label="Email"
                        size="small"
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />

                    <TextField
                        id="outlined-required"
                        label="Link to your picture"
                        defaultValue={"https://i.ibb.co/qWB7xcq/Octocat-removebg-preview.png"}
                        onChange={(e) => setUser({ ...user, url: e.target.value })}
                    />

                    {isError && (<Typography color={"InfoText"}>Name & Email required</Typography>)}
                </>)
            }

            <Button variant="contained" onClick={handleClick}>{isConnected ? 'Disconnect' : 'Connect'}</Button>

        </div>
    </Box>)
}

export default Form;