import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

//Imagenes
import cordoba from '../../../assets/cordoba.jpg'
import buenosAires from '../../../assets/buenos_aires.jpg'
import mendoza from '../../../assets/mendoza.webp'
import rioNegro from '../../../assets/rio_negro.jpg'
import sanJuan from '../../../assets/san_juan.jpg'
import tucuman from '../../../assets/tucuman.jpg'

import Card from 'react-bootstrap/Card';
import styles from './carrousel.module.css'

const Carrousel = () => {
    return (
        <>
            <div className={styles.carrousel_container}>

                <h1 className='text-center m-5'>DESTINOS MAS BUSCADOS</h1>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={5}
                    watchSlidesProgress={true}
                    centeredSlides={true}
                    loop={true}
                    grabCursor={true}

                    navigation={true}
                    modules={[Navigation, Pagination, Keyboard]}
                    className={styles.carrousel}
                >
                    <SwiperSlide className={styles.item}>
                        <Card style={{ width: '100%', height: '100%', borderRadius: 'none', border: 'none' }}>
                            <Card.Img variant="top" className={styles.img} src={cordoba} />
                            <Card.Body className={styles.card_body}>
                                <Card.Title className='text-center'>CORDOBA</Card.Title>
                                <Card.Text className={styles.cities}>
                                    <a href="#">Villa Carlos Paz</a>
                                    <a href="#">Cosquin</a>
                                    <a href="#">Villa General Belgrano</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className={styles.item}>
                        <Card style={{ width: '100%', height: '100%', borderRadius: 'none', border: 'none' }}>
                            <Card.Img variant="top" className={styles.img} src={buenosAires} />
                            <Card.Body className={styles.card_body}>
                                <Card.Title className='text-center'>BUENOS AIRES</Card.Title>
                                <Card.Text className={styles.cities}>
                                    <a href="#">Mar del Plata</a>
                                    <a href="#">La Boca</a>
                                    <a href="#">La Plata</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className={styles.item}>
                        <Card style={{ width: '100%', height: '100%', borderRadius: 'none', border: 'none' }}>
                            <Card.Img variant="top" className={styles.img} src={mendoza} />
                            <Card.Body className={styles.card_body}>
                                <Card.Title className='text-center'>MENDOZA</Card.Title>
                                <Card.Text className={styles.cities}>
                                    <a href="#">Luján de Cuyo</a>
                                    <a href="#">Las Heras</a>
                                    <a href="#">San Rafael</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className={styles.item}>
                        <Card style={{ width: '100%', height: '100%', borderRadius: 'none', border: 'none' }}>
                            <Card.Img variant="top" className={styles.img} src={rioNegro} />
                            <Card.Body className={styles.card_body}>
                                <Card.Title className='text-center'>RIO NEGRO</Card.Title>
                                <Card.Text className={styles.cities}>
                                    <a href="#">San Carlos de Bariloche</a>
                                    <a href="#">El Bolsón</a>
                                    <a href="#">Viedma</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className={styles.item}>
                        <Card style={{ width: '100%', height: '100%', borderRadius: 'none', border: 'none' }}>
                            <Card.Img variant="top" className={styles.img} src={sanJuan} />
                            <Card.Body className={styles.card_body}>
                                <Card.Title className='text-center'>SAN JUAN</Card.Title>
                                <Card.Text className={styles.cities}>
                                    <a href="#">Rodeo</a>
                                    <a href="#">Las Flores</a>
                                    <a href="#">Bella Vista</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className={styles.item}>
                        <Card style={{ width: '100%', height: '100%', borderRadius: 'none', border: 'none' }}>
                            <Card.Img variant="top" className={styles.img} src={tucuman} />
                            <Card.Body className={styles.card_body}>
                                <Card.Title className='text-center'>TUCUMÁN</Card.Title>
                                <Card.Text className={styles.cities}>
                                    <a href="#">Famaillá</a>
                                    <a href="#">Yerba Buena</a>
                                    <a href="#">Concepción</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    )
}

export default Carrousel