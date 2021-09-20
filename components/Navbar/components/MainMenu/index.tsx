import Link from 'next/link'
import { NavLink } from '../..'
import styles from '../../styles/styles.module.css'
import cn from 'classnames'

const MainMenu: React.FC<{ menu: Array<NavLink>, manageSubMenu: (id: number) => void }> = ({ menu, manageSubMenu }) => {
    return (
        <ul className={styles.navList}>
            {menu.map(item => (
                <li key={item.text} className={styles.navItem}>
                    {item.page ? 
                    <Link href={item.page}>
                        <a className={styles.navLink}>{item.text}</a>
                    </Link> : 
                    <div className={styles.navLink} onClick={() => manageSubMenu(item.id)}>
                        <span className={styles.dropdownTitle}>{item.text}</span>
                        <ul className={cn(styles.navDropdown, item.active && styles.dropdownActive)}>
                            {item.subMenu?.map(sub => (
                                <li key={sub.text} className={cn(styles.navSubItem, styles.navItem)}>
                                    <Link href={sub.page as string}>
                                        <a className={styles.navLink}>{sub.text}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>}
                </li>
            )
            )}
        </ul>
    )
}

export default MainMenu