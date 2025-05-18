import React from "react";
import { motion } from "framer-motion";
import {videoData} from "./videoData.js";
import VideoCard from "./VideoCard.jsx";
import {Link} from "react-router-dom"

const Course = () => {
    return (
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  gap-4 p-6 min-h-screen w-4/5 ml-auto"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
        >
            {videoData.map((video) => (
                <motion.div
                    key={video.id}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    <Link to={`/video-player/${video.id}`}>
                <VideoCard
                        image={video.image}
                        title={video.title}
                        description={video.description}
                    /></Link>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Course;
