import Image from 'next/image';
import { RankItemSchema } from 'utils/contentTypes';
import styles from './styles/styles.module.css';

import firstPlace from './assets/first-icon.png';
import secondPlace from './assets/second-icon.png';
import thirdPlace from './assets/third-icon.png';

import { classes } from 'components/common/Table/utils/links';

const sources = [
    firstPlace,
    secondPlace,
    thirdPlace
]

interface TopProps {
    players: Array<RankItemSchema>
}

const Top3: React.FC<TopProps> = ({ players }) => {
    return (
        <div className={styles.wrap}>
            {players.map((p, index) => <div key={p.CharName} className={styles.topBlock}>
                <div className={styles.topPlaceWrap}><Image src={sources[index]} alt="first-place-icon" /></div>
                <div className={styles.topInfo}>
                    <div className={styles.cIcon}>
                        <Image src={classes[p.Job]} className={styles.cIcon} alt="class-icon-top" width={50} height={50} />
                    </div>
                    <div className={styles.topInfoText}>
                        <div className={styles.topInfoName}>
                            <p>{p.CharName}</p>
                            <span>({p.Level})</span>
                        </div>
                        <div className={styles.topInfoDesc}>
                            {p.GuildName !== null && <span>{p.GuildName} |</span>}
                            <span>{p.K1}</span>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default Top3;