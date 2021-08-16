import Image from 'next/image'
import styles from '../../styles/styles.module.css'
import ava from '../../assets/ava.png';

const Unauthorized = () => {
    return (
        <div className={styles.userAuth}>
            <div className={styles.userBlock}>
                Sign in
                <div className={styles.userAuthImage}>
                    <Image src={ava} width={27} height={27} alt="ava" />
                </div>
            </div>
        </div>
    )
}

export default Unauthorized