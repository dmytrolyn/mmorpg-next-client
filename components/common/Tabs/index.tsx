import styles from './styles/styles.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

type LinkSchema = {
    href: string,
    title: string,
    icon?: string
}

interface TabsProps {
    tabs: Array<LinkSchema>
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const router = useRouter();

    return (
        <div className={styles.wrap}>
            {tabs.map(tab => <Link key={tab.href} href={tab.href}>
                <a className={cn(styles.tab, tab.href === router.pathname && styles.active)}>
                    {tab.title}
                </a>
            </Link>)}
        </div>
    )
}

export default Tabs;