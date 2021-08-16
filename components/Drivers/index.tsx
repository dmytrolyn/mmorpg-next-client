import styles from './styles/styles.module.css';
import Image from 'next/image';

const Drivers = () => {
    return (
        <div className={styles.wrap}>
            <Image src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/driver_1.jpg`} alt="driver" width={355} height={180} />
            <Image src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/driver_2.jpg`} alt="driver" width={355} height={180} />
            <Image src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/driver_3.jpg`} alt="driver" width={355} height={180} />
        </div>
    )
}

export default Drivers;