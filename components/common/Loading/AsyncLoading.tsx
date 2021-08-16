import Image from 'next/image';
import loading from './assets/async-spinner.svg';
import styles from './styles/styles.module.css';

const AsyncLoading = () => {
    return (
        <Image src={loading} className={styles.async} alt="loading" />
    )
}

export default AsyncLoading;