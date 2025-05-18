import React from "react";
import { motion } from "framer-motion";

const VideoCard = ({ image, title, description }) => {
    return (
        <motion.div
            className="relative w-[320px] h-[180px] bg-gray-800 rounded-lg  overflow-hidden cursor-pointer shadow-xl hover:shadow-orange-500/50"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            {/* Image Section */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover rounded-lg"
            />

            {/* Overlay for Text */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3 text-white">
                <h2 className="text-lg font-bold truncate">{title}</h2>
                <p className="text-sm text-gray-300 truncate">{description}</p>
            </div>
        </motion.div>
    );
};

export default VideoCard;
