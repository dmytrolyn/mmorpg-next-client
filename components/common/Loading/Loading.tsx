import React from 'react';
import spinner from './assets/spinner.svg';
import styles from './styles/styles.module.css';

import Image from 'next/image';

const Loading = ({ show = true, ...props }) => {
    return (
        show ? <div className={styles.loadingWrap}>
            <Image className={styles.loading} {...props} src={spinner} alt="spinner" />
        </div> : null
    )
}

export default Loading;