// // components/StartupAnimation.jsx
// // components/FamiexLogoAnimation.jsx
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
//
// const Startup = () => {
//     const [isVisible, setIsVisible] = useState(true);
//
//     // Auto-hide after 3 seconds
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsVisible(false);
//         }, 3000);
//         return () => clearTimeout(timer);
//     }, []);
//
//     // Container animation
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.1,
//                 delayChildren: 0.2,
//             },
//         },
//         exit: { opacity: 0, transition: { duration: 0.5 } },
//     };
//
//     // Letter animation for individual characters
//     const letterVariants = {
//         hidden: { opacity: 0, y: 50, rotate: -10 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             rotate: 0,
//             transition: {
//                 type: 'spring',
//                 stiffness: 120,
//                 damping: 20,
//             },
//         },
//     };
//
//     // Subtext animation
//     const subtextVariants = {
//         hidden: { opacity: 0, y: 20 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: { duration: 0.6, ease: 'easeOut' },
//         },
//     };
//
//     return (
//         <>
//             {isVisible && (
//                 <motion.div
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     className="fixed inset-0 z-50 min-h-screen bg-gradient-to-tr from-gray-900 via-indigo-900 to-purple-900 flex items-center justify-center"
//                 >
//                     <div className="text-center">
//                         {/* Logo Animation with Capital Letters */}
//                         <motion.div className="flex justify-center space-x-1 mb-6">
//                             {'V-learn'.split('').map((letter, index) => (
//                                 <motion.span
//                                     key={index}
//                                     variants={letterVariants}
//                                     className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg"
//                                 >
//                                     {letter}
//                                 </motion.span>
//                             ))}
//                         </motion.div>
//
//                         {/* Subtext */}
//                         <motion.p
//                             variants={subtextVariants}
//                             className="text-lg md:text-xl text-white/80 font-medium"
//                         >
//                             Connecting Families, Empowering Lives
//                         </motion.p>
//
//                         {/* Loading Circle */}
//                         <motion.div
//                             className="mt-8 w-16 h-16 mx-auto border-4 border-t-transparent border-white rounded-full"
//                             initial={{ rotate: 0 }}
//                             animate={{ rotate: 360 }}
//                             transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
//                         />
//                     </div>
//                 </motion.div>
//             )}
//         </>
//     );
// };
//
// export default Startup;



// components/GrokStartupAnimation.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Startup = () => {
    const [isVisible, setIsVisible] = useState(true);

    // Auto-hide after 3.5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3500);
        return () => clearTimeout(timer);
    }, []);

    // Container animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
        exit: { opacity: 0, transition: { duration: 0.7 } },
    };

    // Letter animation for "Grok"
    const letterVariants = {
        hidden: { opacity: 0, scale: 0.5, rotate: 90 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                type: 'spring',
                stiffness: 150,
                damping: 15,
            },
        },
    };

    // Orbiting particle animation
    const particleVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 0.6,
            transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: 'reverse',
            },
        },
    };

    // Tagline animation
    const taglineVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    return (
        <>
            {isVisible && (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed inset-0 z-50 min-h-screen  bg-gradient-to-b from-black via-gray-900 to-indigo-900 flex items-center justify-center overflow-hidden"
                >
                    {/* Orbiting Particles for Cosmic Effect */}
                    <motion.div
                        variants={particleVariants}
                        className="absolute w-2 h-2 bg-blue-400 rounded-full"
                        animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                        variants={particleVariants}
                        className="absolute w-3 h-3 bg-purple-400 rounded-full"
                        animate={{ x: [0, -80, 0], y: [0, 80, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    <div className="text-center relative z-10">
                        {/* Grok Logo Animation */}
                        <motion.div className="flex justify-center space-x-2 mb-6">
                            {'V-Learn'.split('').map((letter, index) => (
                                <motion.span
                                    key={index}
                                    variants={letterVariants}
                                    className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            variants={taglineVariants}
                            className="text-xl md:text-2xl text-blue-200 font-medium tracking-wide"
                        >
                            Unlock Your Future.
                        </motion.p>

                        {/* Pulsing Core Effect */}
                        <motion.div
                            className="mt-8 w-12 h-12 mx-auto bg-blue-500 rounded-full"
                            initial={{ scale: 0.8, opacity: 0.5 }}
                            animate={{ scale: 1.2, opacity: 0.2 }}
                            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                        />
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default Startup;

// import { useState } from "react";
// import { AnimatePresence } from "framer-motion";
// import StartupAnimation from "./components/StartupAnimation";
// import Home from "./pages/Home";
//
// function App() {
//   const [animationComplete, setAnimationComplete] = useState(false);
//
//   return (
//     <>
//       <AnimatePresence>
//         {!animationComplete && <StartupAnimation onComplete={() => setAnimationComplete(true)} />}
//       </AnimatePresence>
//       {animationComplete && <Home />}
//     </>
//   );
// }
//
// export default App;
