import styles from './styles/styles.module.css';
import Info from './components/Info';
import News from './components/News';

const Recent = () => {
    return (
        <div className={styles.recentWrap}>
            <Info />
            <News />
        </div>
    )
}

export default Recent;