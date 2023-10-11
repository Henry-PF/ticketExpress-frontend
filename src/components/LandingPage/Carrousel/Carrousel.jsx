import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

import styles from './carrousel.module.css'

const Carrousel = () => {
    return (
        <>
            <div className={styles.carrousel_container}>

                <h1 className='m-5'>DESTINOS MAS BUSCADOS</h1>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={0}
                    watchSlidesProgress={true}
                    centeredSlides={true}
                    loop={true}
                    grabCursor={true}

                    navigation={true}
                    modules={[Navigation, Pagination, Keyboard]}
                    className={styles.carrousel}
                >
                    <SwiperSlide className={styles.item}>Slide 1</SwiperSlide>
                    <SwiperSlide className={styles.item}>Slide 2</SwiperSlide>
                    <SwiperSlide className={styles.item}>Slide 3</SwiperSlide>
                    <SwiperSlide className={styles.item}>Slide 4</SwiperSlide>
                    <SwiperSlide className={styles.item}>Slide 5</SwiperSlide>
                    <SwiperSlide className={styles.item}>Slide 6</SwiperSlide>
                    <SwiperSlide className={styles.item}>Slide 7</SwiperSlide>
                    <SwiperSlide className={styles.item}>Slide 8</SwiperSlide>
                    <SwiperSlide className={styles.item}>Slide 9</SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Carrousel