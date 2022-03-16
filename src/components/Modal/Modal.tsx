import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import useStyles from './styles'
import Form from './Form/Form';
import { Status } from '../../types/Status';

const LoginOrRegister: FC<Status> = ({ isConnected }) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const classes = useStyles();

    return (
        <div>
            <Button onClick={handleOpen}>{isConnected ? 'Disconnect' : 'Login'}</Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={{
                    position: 'absolute' as 'absolute',
                    bgcolor: 'background.paper',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    p: 4,
                }} className={classes.box}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        {!isConnected && (<span>Login or Create your first account</span>)}
                    </Typography>
                    <Form isConnected={isConnected} />
                </Box>
            </Modal>
        </div>
    );
}

export default LoginOrRegister;