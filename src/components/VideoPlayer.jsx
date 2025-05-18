// import React, { useRef, useState } from "react";
// import ReactPlayer from "react-player";
// import { motion } from "framer-motion";
// import {
//     PlayIcon,
//     PauseIcon,
//     StepForwardIcon,
//     StepBackIcon,
//     VolumeXIcon,
//     Volume2Icon,
//     FullscreenIcon, TheaterIcon, LaptopMinimalIcon
// } from "lucide-react";
// import {TbVolume3} from "react-icons/tb";
// const VideoPlayer = () => {
//     const playerRef = useRef(null);
//     const [playing, setPlaying] = useState(false);
//     const [volume, setVolume] = useState(0.8);
//     const [playbackRate, setPlaybackRate] = useState(1);
//     const [quality, setQuality] = useState("720p");
//
//     const handlePlayPause = () => setPlaying(!playing);
//
//     const handleForward = () => {
//         if (playerRef.current) {
//             playerRef.current.seekTo(playerRef.current.getCurrentTime() + 15);
//         }
//     };
//
//     const handleReverse = () => {
//         if (playerRef.current) {
//             playerRef.current.seekTo(playerRef.current.getCurrentTime() - 15);
//         }
//     };
//
//     const handleVolumeChange = (e) => setVolume(parseFloat(e.target.value));
//     const handlePlaybackRateChange = (e) => setPlaybackRate(parseFloat(e.target.value));
//     const handleQualityChange = (e) => setQuality(e.target.value);
//
//     const handleFullScreen = () => {
//         document.fullscreenElement
//             ? document.exitFullscreen()
//             : playerRef.current.wrapper.requestFullscreen();
//     };
//
//     const handleTheaterMode = () => {
//         // Add custom theater mode functionality here
//         alert("Theater mode activated!");
//     };
//
//     return (
//         <div className="h-screen w-4/5">
//         <div className="bg-gray-900 text-white p-6 rounded-lg shadow-xl w-full mx-auto">
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1 }}
//                 className="relative"
//             >
//                 <ReactPlayer
//                     ref={playerRef}
//                     url="https://www.youtube.com/watch?v=VIDEO_ID"
//                     playing={playing}
//                     controls={false}
//                     volume={volume}
//                     playbackRate={playbackRate}
//                     width="100%"
//                     height="100%"
//                     className="rounded-lg overflow-hidden"
//                 />
//
//                 {/* Controls */}
//                 <div className="mt-4 flex items-center justify-between gap-4">
//                     <button
//                         onClick={handleReverse}
//                         className="bg-gray-500 hover:bg-orange-800 hover:text-white shadow-xl hover:shadow-orange-500/50 text-white py-2 px-4 rounded-lg"
//                     >
//                         <StepBackIcon size={24} className="text-white"/>
//                     </button>
//                     <button
//                         onClick={handlePlayPause}
//                         className="bg-gray-500 hover:bg-orange-800 hover:text-white shadow-xl hover:shadow-orange-500/50  text-white py-2 px-4 rounded-lg"
//                     >
//                         {playing ? <PauseIcon size={24} className="text-white" /> : <PlayIcon size={24} className="text-white"/>}
//                     </button>
//
//                     <button
//                         onClick={handleForward}
//                         className="bg-gray-500 hover:bg-orange-800 hover:text-white shadow-xl hover:shadow-orange-500/50 text-white py-2 px-4 rounded-lg"
//                     >
//                         <StepForwardIcon size={24} className="text-white"/>
//                     </button>
//                     <select
//                         onChange={handlePlaybackRateChange}
//                         className="bg-gray-800 text-white py-2 px-4 rounded-lg"
//                     >
//                         <option value={1}>1x</option>
//                         <option value={1.5}>1.5x</option>
//                         <option value={2}>2x</option>
//                     </select>
//                     <select
//                         onChange={handleQualityChange}
//                         className="bg-gray-800 text-white py-2 px-4 rounded-lg"
//                     >
//                         <option value="720p">720p</option>
//                         <option value="1080p">1080p</option>
//                     </select>
//                     <button
//                         onClick={handleFullScreen}
//                         className="bg-gray-500 hover:bg-orange-800 hover:text-white shadow-xl hover:shadow-orange-500/50 py-2 px-4 rounded-lg"
//                     >
//                         <FullscreenIcon size={24} className="text-white"/>
//                     </button>
//                     <button
//                         onClick={handleTheaterMode}
//                         className="bg-gray-500 hover:bg-orange-800 hover:text-white shadow-xl hover:shadow-orange-500/50 py-2 px-4 rounded-lg"
//                     >
//                         <LaptopMinimalIcon size={24} className="text-white"/>
//                     </button>
//                     <Volume2Icon size={24} className="text-white"/>
//                     <input
//                         type="range"
//                         min={0}
//                         max={1}
//                         step={0.1}
//                         value={volume}
//                         onChange={handleVolumeChange}
//                         className="bg-orange-800  cursor-pointer hover:bg-orange-800 shadow-xl hover:shadow-orange-500/50 py-2 px-4 rounded-lg "
//                     />
//                 </div>
//             </motion.div>
//         </div>
//         </div>
//     );
// };
//
// export default VideoPlayer;




import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import {
    PlayIcon,
    PauseIcon,
    StepForwardIcon,
    StepBackIcon,
    VolumeXIcon,
    Volume2Icon,
    FullscreenIcon,
    TheaterIcon,
    LaptopMinimalIcon,
} from "lucide-react";
import { TbVolume3 } from "react-icons/tb";
import {videoData} from "./videoData.js";
import {useParams} from "react-router-dom";

const VideoPlayer = () => {
    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.8);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [quality, setQuality] = useState("720p");

    const handlePlayPause = () => setPlaying(!playing);

    const handleForward = () => {
        if (playerRef.current) {
            playerRef.current.seekTo(playerRef.current.getCurrentTime() + 15);
        }
    };

    const handleReverse = () => {
        if (playerRef.current) {
            playerRef.current.seekTo(playerRef.current.getCurrentTime() - 15);
        }
    };

    const handleVolumeChange = (e) => setVolume(parseFloat(e.target.value));
    const handlePlaybackRateChange = (e) => setPlaybackRate(parseFloat(e.target.value));
    const handleQualityChange = (e) => setQuality(e.target.value);

    const handleFullScreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            playerRef.current.wrapper.requestFullscreen();
        }
    };

    const handleTheaterMode = () => {
        alert("Theater mode activated!");
    };
    const { id } = useParams();
    const video = videoData.find((v) => v.id === parseInt(id));

    if (!video) {
        return <h2 className="text-center mt-4">Video not found</h2>;
    }


    return (
        <div className="h-screen w-4/5 ml-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{video.title}</h1>
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-xl w-full mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    <ReactPlayer
                        ref={playerRef}
                        // url="https://www.youtube.com/watch?v=anhbMmxLSiU&list=PLv-bZWNqSQRtMHeV-DfuOJBrUoujCbvfG"
                        url={video.url}
                        playing={playing}
                        controls={false}
                        volume={volume}
                        playbackRate={playbackRate}
                        width="100%"
                        className="rounded-lg overflow-hidden"
                    />
                   {/*<h1>{video.url}</h1>*/}
                    {/* Controls */}
                    <div className="mt-4 flex items-center justify-between gap-4">
                        <button
                            onClick={handleReverse}
                            className="bg-gray-500 hover:bg-orange-800 hover:text-white shadow-xl hover:shadow-orange-500/50 text-white py-2 px-4 rounded-lg"
                        >
                            <StepBackIcon size={24} className="text-white" />
                        </button>
                        <button
                            onClick={handlePlayPause}
                            className="bg-gray-500 hover:bg-orange-800 hover:text-white shadow-xl hover:shadow-orange-500/50 text-white py-2 px-4 rounded-lg"
                        >
                            {playing ? (
                                <PauseIcon size={24} className="text-white" />
                            ) : (
                                <PlayIcon size={24} className="text-white" />
                            )}
                        </button>

                        <button
                            onClick={handleForward}
                            className="bg-gray-500 hover:bg-orange-800 hover:text-white shadow-xl hover:shadow-orange-500/50 text-white py-2 px-4 rounded-lg"
                        >
                            <StepForwardIcon size={24} className="text-white" />
                        </button>
                        <select
                            onChange={handlePlaybackRateChange}
                            className="bg-gray-800 text-white py-2 px-4 rounded-lg"
                        >
                            <option value={1}>1x</option>
                            <option value={1.5}>1.5x</option>
                            <option value={2}>2x</option>
                        </select>
                        <select
                            onChange={handleQualityChange}
                            className="bg-gray-800 text-white py-2 px-4 rounded-lg"
                        >
                            <option value="720p">720p</option>
                            <option value="1080p">1080p</option>
                        </select>
                        <button
                            onClick={handleFullScreen}
                            className="bg-gray-500 hover:bg-orange-800 hover:text-white shadow-xl hover:shadow-orange-500/50 py-2 px-4 rounded-lg"
                        >
                            <FullscreenIcon size={24} className="text-white" />
                        </button>
                        <button
                            onClick={handleTheaterMode}
                            className="bg-gray-500 hover:bg-orange-800 hover:text-white shadow-xl hover:shadow-orange-500/50 py-2 px-4 rounded-lg"
                        >
                            <LaptopMinimalIcon size={24} className="text-white" />
                        </button>
                        <Volume2Icon size={24} className="text-white" />
                        <input
                            type="range"
                            min={0}
                            max={1}
                            step={0.1}
                            value={volume}
                            onChange={handleVolumeChange}
                            className="bg-orange-800 cursor-pointer hover:bg-orange-800 shadow-xl hover:shadow-orange-500/50 py-2 px-4 rounded-lg"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default VideoPlayer;
