import React from 'react'
import CreateProtal from '@/components/CreatePortal'
import { Icon } from 'antd-mobile';
import styles from './index.css';

export default function Modal(props) {

    const {
        show,
        onClose,
        children
    } = props;

    const handleClose = () => {
        onClose?.()
    }

    return (<>
        {show?<CreateProtal className={styles.modal}>
            <div className={styles.body}>
                {children}
                <Icon type='cross' size='lg' className={styles.close} onClick={handleClose}></Icon>
            </div>
        </CreateProtal>:null}
    </>)
}
