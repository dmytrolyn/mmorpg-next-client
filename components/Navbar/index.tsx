import styles from './styles/styles.module.css'
import { useState, useEffect } from 'react'
import Unauthorized from './components/Unauthorized'
import Authorized from './components/Authorized'
import MainMenu from './components/MainMenu'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

import { useTypedSelector, useTypedDispatch } from 'store/hooks'
import { logout } from 'store/auth/auth.actions'
import { getInfo } from 'store/profile/profile.selectors'

export interface NavLink {
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

const Navbar: React.FC = () => {
    const [isScrolled, setState] = useState(false)
    const [menu, setMenuState] = useState(items)

    const user = useTypedSelector(getInfo)
    const dispatch = useTypedDispatch()

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
    }, [])

    const manageSubMenu = (id: number) => {
        setMenuState(prev => prev.map(item => {
            if(item.id === id) return {...item, active: !item.active };
            else return item;
        }))
    }

    const logout = () => dispatch(logout)

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
                    <MainMenu menu={menu} manageSubMenu={manageSubMenu} />
                </div>
                {!user ? <Unauthorized /> : <Authorized user={user} /> }
            </nav>
        </div>
    )
}

export default Navbar;