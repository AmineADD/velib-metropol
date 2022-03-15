import { FC } from 'react'
import Styles from './Status.module.css'

type props = {
    status: boolean;
}

const Status: FC<props> = ({ status }) => (<span className={`${Styles.root} ${status ? Styles.connected : Styles.notConnected}`}></span>)

export default Status;