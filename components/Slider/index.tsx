import { SwiperSlide } from 'swiper/react';
import { Swiper } from './styled/components';

import styles from './styles/styles.module.css';
import slide from './images/slider-news.jpg';
import Image from 'next/image';

const Slider = () => {
    return (
        <div className={styles.sliderWrap}>
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{
                    "type": "fraction"
                }}
                centeredSlides 
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                loop
                className={styles.slider}
            >
                <SwiperSlide>
                    <Image layout="fill" src={slide} alt="slide" />
                    <div className={styles.sliderInfo}>
                        <button className={styles.playBtn} />
                        <h3 className={styles.sliderInfoTitle}>Play Now</h3>
                        <p className={styles.sliderInfoDesc}>Watch promo video in YouTube</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image layout="fill" src={slide} alt="slide" />
                    <div className={styles.sliderInfo}>
                        <button className={styles.playBtn} />
                        <h3 className={styles.sliderInfoTitle}>Play Now</h3>
                        <p className={styles.sliderInfoDesc}>Watch promo video in YouTube</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image layout="fill" src={slide} alt="slide" />
                    <div className={styles.sliderInfo}>
                        <button className={styles.playBtn} />
                        <h3 className={styles.sliderInfoTitle}>Play Now</h3>
                        <p className={styles.sliderInfoDesc}>Watch promo video in YouTube</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image layout="fill" src={slide} alt="slide" />
                    <div className={styles.sliderInfo}>
                        <button className={styles.playBtn} />
                        <h3 className={styles.sliderInfoTitle}>Play Now</h3>
                        <p className={styles.sliderInfoDesc}>Watch promo video in YouTube</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider;