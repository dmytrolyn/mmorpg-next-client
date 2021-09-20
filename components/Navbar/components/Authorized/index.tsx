import Image from 'next/image'
import Link from 'next/link'

import { NavLink } from '../..'
import { UserSchema } from 'utils/contentTypes'

import styles from '../../styles/styles.module.css'
import cn from 'classnames'

import userAva from '../../assets/user-ava.png'
import logoutIcon from '../../assets/logout-icon.png'

interface DecoratedNavLink extends NavLink {
    icon?: StaticImageData | string
}

interface UserSubMenuSection {
    section: number
    items: Array<DecoratedNavLink>
}

const Authorized: React.FC<{ user: UserSchema }> = ({ user }) => {

    const userSubMenu: Array<UserSubMenuSection> = [
        { section: 1, items: [
            { id: 1, text: 'Profile', page: '/profile' },
            { id: 2, text: 'Donate', page: '/donate' },
            { id: 3, text: 'Shop', page: '/shop' }
        ]},
        { section: 2, items: [
            { id: 4, text: 'Logout', page: '/', icon: logoutIcon }
        ]}
    ]

    return (
        <div className={styles.userAuth}>
            <div className={styles.userBlock}>
                <span className={styles.nickname}>{user.UserID}</span>
                <div className={styles.userAuthImage}>
                    <Image src={userAva} width={27} height={27} alt="ava" />
                </div>
            </div>
            <ul className={cn(styles.navDropdown, item.active && styles.dropdownActive)}>
                {item.subMenu?.map(sub => (
                    <li key={sub.text} className={cn(styles.navSubItem, styles.navItem)}>
                        <Link href={sub.page as string}>
                            <a className={styles.navLink}>{sub.text}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Authorized