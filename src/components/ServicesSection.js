// src/ImageViewer.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ServicesViewer.css';
import ServiceCard from './ServiceCard';

import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules';

const ServicesViewer = () => {
    return (
        <div className="container">
            <h6>Discover</h6>
            <hr style={{ width: '60px', marginLeft: '675px' }} />
            <h3>Our Services</h3>
            <p>As you immerse yourself in this enchanting destination, we invite you to participate in profound self-reflection and practice alongside us.</p>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <ServiceCard
                        imageSrc="https://img.freepik.com/free-photo/happy-young-girl-with-hand-air_23-2148504829.jpg?t=st=1719779315~exp=1719782915~hmac=21247f2a6975605f5fe44361ff7492e881c0d8a33300ad56e0cd944d4b167942&w=1060"
                        topic="Service 01"
                        paragraph="This is not an exercise in concentration but one of relaxation of body and calming the mind. When the body is relaxed and the mind is calm down, attention automatically goes to the breathing."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard
                        imageSrc="https://img.freepik.com/free-photo/woman-cliff-overlooking-sea-makes-greeting-sun_181624-45529.jpg?t=st=1719790463~exp=1719794063~hmac=fe859b7764d604f77e0226d1bb529dae26166350e70e54f74b490dcf35d2bcf4&w=360"
                        topic="Service 02"
                        paragraph="This is not an exercise in concentration but one of relaxation of body and calming the mind. When the body is relaxed and the mind is calm down, attention automatically goes to the breathing."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard
                        imageSrc="https://img.freepik.com/free-photo/beautiful-woman-meditating-full-shot_23-2148347664.jpg?t=st=1719790591~exp=1719794191~hmac=4e6631394c6478eb8627b608dbc2ed239b8d5cdb53f3435cb3604788f861e301&w=360"
                        topic="Service 03"
                        paragraph="This is not an exercise in concentration but one of relaxation of body and calming the mind. When the body is relaxed and the mind is calm down, attention automatically goes to the breathing."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard
                        imageSrc="https://img.freepik.com/free-photo/full-shot-woman-meditating_23-2148347670.jpg?t=st=1719790613~exp=1719794213~hmac=14a3c1856a2df67668c12a5654724da3f661d6eae43a62a991045c3559a34c77&w=360"
                        topic="Service 04"
                        paragraph="This is not an exercise in concentration but one of relaxation of body and calming the mind. When the body is relaxed and the mind is calm down, attention automatically goes to the breathing."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard
                        imageSrc="https://img.freepik.com/free-photo/full-shot-woman-chair-meditating_23-2148897857.jpg?t=st=1719790679~exp=1719794279~hmac=60567ce6989c00bf2b7abeecf6553ad072e5b9b6d928bf43bcadbdf4f126f7b1&w=360"
                        topic="Service 05"
                        paragraph="This is not an exercise in concentration but one of relaxation of body and calming the mind. When the body is relaxed and the mind is calm down, attention automatically goes to the breathing."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard
                        imageSrc="https://img.freepik.com/free-photo/person-doing-yoga-front-waterfall_23-2150847895.jpg?t=st=1719790720~exp=1719794320~hmac=c9f415aff39e8709946afa59fa8d457a3d36a4b3b71517ffdf88c07d1fcc1562&w=360"
                        topic="Service 06"
                        paragraph="This is not an exercise in concentration but one of relaxation of body and calming the mind. When the body is relaxed and the mind is calm down, attention automatically goes to the breathing."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard
                        imageSrc="https://img.freepik.com/free-photo/full-shot-woman-reading-nature_23-2149726428.jpg?t=st=1719790746~exp=1719794346~hmac=5358ec37c0e0c947116851903b931ddaa626917984810b89943e16d58d0963a3&w=360"
                        topic="Service 07"
                        paragraph="This is not an exercise in concentration but one of relaxation of body and calming the mind. When the body is relaxed and the mind is calm down, attention automatically goes to the breathing."
                    />
                </SwiperSlide>
        
                <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
      );
  
}

export default ServicesViewer;
