import Link from 'next/link'
import { NewsType } from '../../styled/components'
import styles from '../../styles/styles.module.css'

import * as types from '../../utils/newsTypes'
import { categoryToIndex, indexToCategory } from '../../utils/newsCategories'
import { NewsItemSchema } from 'utils/contentTypes'

const News = ({ news }: { news: Array<NewsItemSchema> }) => {
    const nextEvent = news.find(n => n.Category === categoryToIndex[types.EVENT])
    const mainNews = nextEvent || news[0]

    const transformDate = (dateString: string) => 
        new Date(dateString).toLocaleDateString().split('.').slice(0, 2).join('/')
    
    const buildMainTitle = (title: string) => title.length > 30 ? `${title.slice(0, 30)}...` : title

    return (
        <div className={styles.newsWrap}>
            <h3 className={styles.newsHeader}>News</h3>
            {mainNews && <Link href={`/news/${mainNews.RowID}`}>
                <a className={styles.mainEvent}>
                    <p>[ Last news ]</p>
                    <span>{buildMainTitle(mainNews.Title)}</span>
                </a>
            </Link>}
            <ul className={styles.newsList}>
                {news.slice(1, 5).map(item => {
                    let type = indexToCategory[item.Category]

                    return (
                        <li key={item.RowID} className={styles.newsItem}>
                            <Link href={`/news/${item.RowID}`}>
                                <a>
                                    <NewsType type={type}>[ {type} ]</NewsType>
                                    <h3 className={styles.newsTitle}>{item.Title}</h3>
                                    <span className={styles.newsDate}>{transformDate(item.Date)}</span>
                                </a>
                            </Link>
                        </li>
                    )
                }
                )}
            </ul>
            <Link href="/news/all"><a className={styles.moreNews}><div>[ More news ]</div></a></Link>
        </div>
    )
}

export default News;