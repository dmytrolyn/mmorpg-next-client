import { ContentWrap } from '../common/styled/components';
import { GameCenterWrap } from './styled/components';
import Link from 'next/link';
import Image from 'next/image';

import styles from './styles/styles.module.css';

const GameCenter = () => {
    return (
        <GameCenterWrap>
            <ContentWrap>
                <h2 className={styles.gameCenterTitle}>
                    Game <span>Center</span>
                </h2>
                <div className={styles.gcContainer}>
                    <div className={styles.gcBlock}>
                        <h3>Wiki</h3>
                        <p>Info and guides</p>
                        <Link href="/go"><a className={styles.goBtn}>Go</a></Link>
                        <div className={styles.gcIcon}>
                            <Image alt="icon" src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/game-icon.png`} height={100} width={100} />
                        </div>
                    </div>
                    <div className={styles.gcBlock}>
                        <h3>Wiki</h3>
                        <p>Info and guides</p>
                        <Link href="/go"><a className={styles.goBtn}>Go</a></Link>
                        <div className={styles.gcIcon}>
                            <Image alt="icon" src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/game-icon.png`} height={100} width={100} />
                        </div>
                    </div>
                    <div className={styles.gcBlock}>
                        <h3>Wiki</h3>
                        <p>Info and guides</p>
                        <Link href="/go"><a className={styles.goBtn}>Go</a></Link>
                        <div className={styles.gcIcon}>
                            <Image alt="icon" src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/game-icon.png`} height={100} width={100} />
                        </div>
                    </div>
                    <div className={styles.gcBlock}>
                        <h3>Wiki</h3>
                        <p>Info and guides</p>
                        <Link href="/go"><a className={styles.goBtn}>Go</a></Link>
                        <div className={styles.gcIcon}>
                            <Image alt="icon" src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/game-icon.png`} height={100} width={100} />
                        </div>
                    </div>
                    <div className={styles.gcBlock}>
                        <h3>Wiki</h3>
                        <p>Info and guides</p>
                        <Link href="/go"><a className={styles.goBtn}>Go</a></Link>
                        <div className={styles.gcIcon}>
                            <Image alt="icon" src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/game-icon.png`} height={100} width={100} />
                        </div>
                    </div>
                </div>
            </ContentWrap>
        </GameCenterWrap>
    )
}

export default GameCenter;