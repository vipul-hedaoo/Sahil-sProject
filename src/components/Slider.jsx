import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const Slider = () => {
    const slides = [
        { id: 1, content: "Slide 1", image: "../avtar.png"},
        { id: 2, content: "Slide 2", image: "https://youtube.com/watch?v=99M7TJvijUk" },
        { id: 3, content: "Slide 3", image: "https://via.placeholder.com/300x150" },
        { id: 4, content: "Slide 4", image: "https://via.placeholder.com/300x150" },
        { id: 5, content: "Slide 5", image: "https://youtube.com/watch?v=99M7TJvijUk" },
    ];

    const variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <div className="w-4/5 rounded-3xl border-2 hover:border-orange-600  bg-gray-900 text-orange-500 ml-auto shadow-2xl hover:shadow-orange-500/50">
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                navigation={true} // Adds navigation arrows
                autoplay={{
                    delay: 30000, // 30 seconds
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
                className="h-screen"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="flex items-center justify-center ">
                        <motion.div
                            // initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={variants}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center "
                        >
                            <img
                                src={slide.image}
                                alt={slide.content}
                                className="h-full w-full object-cover mb-4 rounded-3xl"
                            />
                            {/*<p className="text-xl">{slide.content}</p>*/}
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
