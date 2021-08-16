import styles from '../../styles/styles.module.css';
import Slider from '../../../Slider';
import { DiscordLink, YoutubeLink } from '../../styled/components';
import cn from 'classnames';

const Info = () => {
    return (
        <div className={styles.infoWrap}>
            <Slider />
            <div className={styles.linksWrap}>
                <DiscordLink href="/sdf">
                    <div>
                        <p>Discord</p>
                        <span>Discussion Chat</span>
                    </div>
                </DiscordLink>
                <YoutubeLink href="/sdf">
                    <div>
                        <p>YouTube</p>
                        <span>Official Channel</span>
                    </div>
                </YoutubeLink>
            </div>
        </div>
    )
}

export default Info;