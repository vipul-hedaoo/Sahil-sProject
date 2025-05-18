// components/VLearnNavbar.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Vlearnnav = () => {
    // Container animation with delay
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5, // Delay of 0.5 seconds before animation starts
                staggerChildren: 0.1,
            },
        },
    };

    // Letter animation
    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
            },
        },
    };

    return (

            <nav className="absolute top-0 left-1/5 w-full z-50 bg-gradient-to-r from-teal-500 to-blue-600 shadow-md">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex justify-center py-4"
                >
                    <div className="flex space-x-1">
                        {'V-LEARN'.split('').map((letter, index) => (
                            <motion.span
                                key={index}
                                variants={letterVariants}
                                className="text-2xl md:text-3xl font-bold text-white tracking-tight drop-shadow-md"
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </nav>
    );
};

export default Vlearnnav;