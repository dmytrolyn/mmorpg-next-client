import styles from '../../styles/styles.module.css'
import Image from 'next/image'

import userAva from '../../assets/user-ava.png'

const Authorized = () => {
    return (
        <div className={styles.userAuth}>
            <div className={styles.userBlock}>
                Sign in
                <div className={styles.userAuthImage}>
                    <Image src={userAva} width={27} height={27} alt="ava" />
                </div>
            </div>
        </div>
    )
}

export default Authorized