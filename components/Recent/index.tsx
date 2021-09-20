import styles from './styles/styles.module.css';
import Info from './components/Info';
import News from './components/News';
import { NewsItemSchema } from 'utils/contentTypes';

const Recent = (props: any) => {
    return (
        <div className={styles.recentWrap}>
            <Info />
            <News {...props} />
        </div>
    )
}

export default Recent;