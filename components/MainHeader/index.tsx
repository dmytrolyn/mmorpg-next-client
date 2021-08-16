import styles from './styles/styles.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { ContentWrap } from '../common/styled/components';

const Header = () => {
    return (
        <ContentWrap>
            <header className={styles.header}>
                <div className={styles.ray}></div> 
                <div className={styles.rainbow}></div>
                <div className={styles.flame}>
                    <div className={styles.flame_1}></div>
                    <div className={styles.flame_2}></div>
                    <div className={styles.flame_3}></div>
                    <div className={styles.flame_4}></div>
                    <div className={styles.flame_5}></div>
                </div>
                <div className={styles.sparks}>
                    <div className={styles.spark_1}></div>
                    <div className={styles.spark_2}></div>
                    <div className={styles.spark_3}></div>
                    <div className={styles.spark_4}></div>
                    <div className={styles.spark_5}></div>
                </div>
                <div className={styles.logo}>
                    <Link href="/">
                        <a className={styles.logoLink}>
                            <Image loader={() => `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/logo.png`} 
                                src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/logo.png`} 
                                width={370}
                                height={164}
                                alt="logo"
                            />
                        </a>
                    </Link>
                </div>
                <div className={styles.online}>
                    <p>Players online now:</p>
                    <span>3456</span>
                </div>
                <div className={styles.download}>
                    <Link href="/downloads">
                        <a className={styles.downloadLink}>
                            DOWNLOAD
                            <span>GAME CLIENT</span>
                        </a>
                    </Link>
                    <div className={styles.preferedFaction}>
                        Aliance of Light need new players!
                    </div>
                </div>
            </header>
        </ContentWrap>
    )
}

export default Header;