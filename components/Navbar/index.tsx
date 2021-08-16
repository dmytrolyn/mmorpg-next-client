import styles from './styles/styles.module.css'
import { useState, useEffect } from 'react'
import Unauthorized from './components/Unauthorized'
import Authorized from './components/Authorized'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

interface NavLink {
    id: number,
    text: string,
    page?: string,
    active?: boolean,
    subMenu?: Array<NavLink>
}

const items: Array<NavLink> = [
    { id: 1, text: "Homepage", page: "/" },
    { id: 2, text: "Downloads", page:"/downloads" },
    { id: 3,text: "Info", page: '/info'},
    { id: 4, text: "About us", active: false, subMenu: [
        { id: 5, text: "Drop List", page: "/droplist" },
        { id: 6, text: "About server", page: "/about" },
    ]}
]

const Navbar = () => {
    const [isScrolled, setState] = useState(false);
    const [menu, setMenuState] = useState(items);

    useEffect(() => {
        let onScroll = function() {
            if(document.documentElement.scrollTop !== 0) {
                setState(true);
            }
            else setState(false)
        }
        window.addEventListener('scroll', onScroll);

        return function cleanup() {
            window.removeEventListener('scroll', onScroll);
        }
    })

    const manageSubMenu = (id: number) => {
        setMenuState(prev => prev.map(item => {
            if(item.id === id) return {...item, active: !item.active };
            else return item;
        }))
    }

    return (
        <div className={cn(styles.navbarWrap, isScrolled && styles.navBarScrolled)}>
            <nav className={styles.navbar}>
                <div className={styles.navWrap}>
                    <Link href="/">
                        <a className={styles.navbarBrand}>
                            <Image src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/logo-mini.png`} 
                            loader={() =>`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/logo-mini.png`} 
                            alt="logo" 
                            width={90} 
                            height={90} />
                        </a>
                    </Link>
                    <ul className={styles.navList}>
                        {menu.map(item => <li key={item.text} className={styles.navItem}>
                            {item.page ? <Link href={item.page}>
                                <a className={styles.navLink}>{item.text}</a>
                            </Link> : <div className={styles.navLink} onClick={() => manageSubMenu(item.id)}>
                                <span className={styles.dropdownTitle}>{item.text}</span>
                                <ul className={cn(styles.navDropdown, item.active && styles.dropdownActive)}>
                                    {item.subMenu?.map(sub => <li key={sub.text} className={cn(styles.navSubItem, styles.navItem)}>
                                        <Link href={sub.page as string}><a className={styles.navLink}>{sub.text}</a></Link>
                                    </li>)}
                                </ul>
                            </div>}
                        </li>)}
                    </ul>
                </div>
                <Unauthorized />
            </nav>
        </div>
    )
}

export default Navbar;