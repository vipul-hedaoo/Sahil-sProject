import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {Autoplay, EffectCoverflow, Pagination} from "swiper/modules";

const Carousel = () => {
    const slides = [
        { id: 1, src: "/src/assets/v2.jpg" },
        { id: 2, src: "/images/image2.jpg" },
        { id: 3, src: "/images/image3.jpg" },
        { id: 4, src: "/images/image4.jpg" },
    ];

    return (
        <div className="h-screen w-4/5 flex items-center justify-center">
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                modules={[EffectCoverflow, Pagination,Autoplay]}
                className="w-full max-w-3xl h-[400px] "
            >
                {slides.map((slide) => (
                    <SwiperSlide
                        key={slide.id}
                        className="bg-white flex justify-center items-center shadow-lg rounded-lg overflow-hidden"
                    >
                        <img
                            src={slide.src}
                            alt={`Slide ${slide.id}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;