import styles from '../../styles/styles.module.css';
import Link from 'next/link';
import { NewsType } from '../../styled/components';
import * as types from '../../utils/newsTypes';

const News = () => {
    return (
        <div className={styles.newsWrap}>
            <h3 className={styles.newsHeader}>News</h3>
            <Link href="/">
                <a className={styles.mainEvent}>
                    <p>[ Main event ]</p>
                    <span>Castle defence</span>
                </a>
            </Link>
            <ul className={styles.newsList}>
                <li className={styles.newsItem}>
                    <Link href="/news/1">
                        <a>
                            <NewsType type={types.NEWS}>[ {types.NEWS} ]</NewsType>
                            <h3 className={styles.newsTitle}>New launcher Client 2020</h3>
                            <span className={styles.newsDate}>10/03</span>
                        </a>
                    </Link>
                    <Link href="/news/1">
                        <a>
                            <NewsType type={types.EVENT}>[ {types.EVENT} ]</NewsType>
                            <h3 className={styles.newsTitle}>New launcher Client 2020</h3>
                            <span className={styles.newsDate}>10/04</span>
                        </a>
                    </Link>
                    <Link href="/news/1">
                        <a>
                            <NewsType type={types.NEWS}>[ {types.NEWS} ]</NewsType>
                            <h3 className={styles.newsTitle}>New launcher Client 2020</h3>
                            <span className={styles.newsDate}>10/05</span>
                        </a>
                    </Link>
                    <Link href="/news/1">
                        <a>
                            <NewsType type={types.UPDATE}>[ {types.UPDATE} ]</NewsType>
                            <h3 className={styles.newsTitle}>New launcher Client 2020</h3>
                            <span className={styles.newsDate}>10/06</span>
                        </a>
                    </Link>
                </li>
            </ul>
            <Link href="/news/all"><a className={styles.moreNews}><div>[ More news ]</div></a></Link>
        </div>
    )
}

export default News;