import { FooterContentWrap } from './styled/components';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/styles.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <FooterContentWrap className={styles.contentWrap}>
                <div className={styles.menu}>
                    <div className={styles.menuBlock}>
                        <h4>Fast navigation</h4>
                        <ul>
                            <li><Link href="/"><a className={styles.menuLink}>Home</a></Link></li>
                            <li><Link href="/"><a className={styles.menuLink}>Events</a></Link></li>
                            <li><Link href="/"><a className={styles.menuLink}>Rankings</a></Link></li>
                            <li><Link href="/"><a className={styles.menuLink}>Forum</a></Link></li>
                            <li><Link href="/"><a className={styles.menuLink}>Wiki</a></Link></li>
                            <li><Link href="/"><a className={styles.menuLink}>Contacts</a></Link></li>
                            <li><Link href="/"><a className={styles.menuLink}>Game rules</a></Link></li>
                        </ul>
                    </div>
                    <div className={styles.menuBlock}>
                    <h4>Other</h4>
                        <ul>
                            <li><Link href="/"><a className={styles.menuLink}>Registration</a></Link></li>
                            <li><Link href="/"><a className={styles.menuLink}>Download</a></Link></li>
                            <li><Link href="/"><a className={styles.menuLink}>Referal system</a></Link></li>
                            <li><Link href="/"><a className={styles.menuLink}>VIP panel</a></Link></li>
                        </ul>
                    </div>
                    <div className={styles.menuBlock}>
                        <h4>Social media</h4>
                        <ul>
                            <li><Link href="/"><a className={styles.menuLink}>Facebook</a></Link></li>
                            <li><Link href="/"><a className={styles.menuLink}>Youtube</a></Link></li>
                            <li><Link href="/"><a className={styles.menuLink}>Discord</a></Link></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.payments}>
                        <Image src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/payments-icon.png`} alt="payments" width={322} height={22} />
                    </div>
                    <div className={styles.copyright}>
                        <a href="http://1.com">Terms of service</a>
                        <a href="http://1.com">Privacy policy</a>
                        <span>© 2020 Glory2.com. All rights reserved</span>
                    </div>
                </div>
            </FooterContentWrap>
        </footer>
    )
}