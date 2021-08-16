import { Hero } from './styled/components';
import styles from './styles/styles.module.css';

const PageHeader = () => {
    return (
        <header className={styles.header}>
            <Hero />
        </header>
    )
}

export default PageHeader;