import styles from './styles/styles.module.css'
import DownloadLinks from './components/DownloadLinks';
import { GreenButton } from '../common/Buttons';

const Downloads = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.sources}>
                <h3 className={styles.dBlockTitle}>Full Game Client</h3>
                <p className={styles.dBlockDesc}>Total size unpacked 3.45 GB</p>
                <DownloadLinks />
            </div>
            <div className={styles.unique}>
                <h3 className={styles.dBlockTitle}>Client Updater download</h3>
                <p className={styles.dBlockDesc}>Update and patch your current Game version with our special Client Updater v.1.3.5 to play on our server. It is much faster to start playing without full game downloading.</p>
                <a href="https://asd.com"><GreenButton text="DOWNLOAD" /></a>
            </div>
        </div>
    )
}

export default Downloads;