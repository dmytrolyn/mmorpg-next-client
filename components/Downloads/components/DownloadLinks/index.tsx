import styles from '../../styles/styles.module.css';
import cn from 'classnames';
import Image from 'next/image';

const DownloadLinks = () => {
    return (
        <div className={styles.dLinks}>
            <a className={cn(styles.dLink, styles.google)}>
                <Image src={`${process.env.NEXT_PUBLIC_STATIC_ICONS}/google-icon.png`} alt="google-disk" width={50} height={43} />
                <p>Google Disk</p>
            </a>
            <a className={cn(styles.dLink, styles.torrent)}>
                <Image src={`${process.env.NEXT_PUBLIC_STATIC_ICONS}/torrent-icon.png`} alt="torrent" width={43} height={43} />
                <p>Torrent</p>
            </a>
            <a className={cn(styles.dLink, styles.dropbox)}>
                <Image src={`${process.env.NEXT_PUBLIC_STATIC_ICONS}/dropbox-icon.png`} alt="dropbox" width={46} height={43} />
                <p>Dropbox</p>
            </a>
        </div>
    )
}

export default DownloadLinks;