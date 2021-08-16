import { useRef, useEffect }  from 'react';
import styles from './styles/styles.module.css';

const ScrollTop = () => {
    const ref = useRef<HTMLDivElement>(null);

    const scrollToTop = () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        const checkScroll = () => {
            if(ref.current) {
                if (document.documentElement.scrollTop > 90) {
                    ref.current.style.display = "block";
                } else {
                    ref.current.style.display = "none";
                }
            }
        }

        window.addEventListener('scroll', checkScroll);

        return function cleanup() {
            window.removeEventListener('scroll', checkScroll);
        }
    })

    return (
        <div onClick={scrollToTop} ref={ref} className={styles.scroll}></div>
    ) 
}

export default ScrollTop;