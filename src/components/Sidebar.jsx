import { useState } from "react";
import { motion } from "framer-motion";
import {Home, Book, User, Video, Menu, X, LogInIcon, LogOutIcon} from "lucide-react";
import {NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Sidebar = () => {
    // { isLoggedIn, handleLogout } yea upar jayega
    // const navigate = useNavigate();
    //
    // // Navigate to login if not logged in after animation
    // React.useEffect(() => {
    //     if (!isLoggedIn) {
    //         const timer = setTimeout(() => {
    //             navigate("/login");
    //         }, 1000); // 1 second animation duration
    //         return () => clearTimeout(timer);
    //     }
    // }, [isLoggedIn, navigate]);



    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <div className="flex">
            {/* Hamburger Menu for Mobile */}
            <button
                className="fixed hover:bg-orange-800 hover:text-white shadow-xl hover:shadow-orange-500/50 top-4 left-4 bg-gray-800 p-2 rounded-full z-50 block md:hidden "
                onClick={toggleSidebar}
            >
                {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>

            {/* Sidebar */}
            <motion.div
                animate={{ x: isOpen ? 0 : "-100%" }}
                className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-4 flex flex-col gap-6 shadow-xl backdrop-blur-lg bg-opacity-80 transition-transform duration-100"
            >
                {/*<button*/}
                {/*    className="absolute top-4 right-4 bg-gray-800 p-2 rounded-full md:hidden"*/}
                {/*    onClick={toggleSidebar}*/}
                {/*>*/}
                {/*    <X size={24} className="text-white" />*/}
                {/*</button>*/}
                <ul className="mt-12 space-y-6 ">
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex m-4 hover:bg-orange-800 hover:text-white shadow-xl hover:shadow-orange-500/50 items-center gap-4 p-3 rounded-lg cursor-pointer relative overflow-hidden group transition-all duration-300"
                    >
                        {/*<NavLink >*/}
                        <Home size={24} />
                        <span className="text-lg ">Home</span>
                       {/*</NavLink>*/}
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex m-2 hover:bg-orange-800 hover:text-white shadow-xl hover:shadow-orange-500/50 items-center gap-4 p-3 rounded-lg cursor-pointer relative overflow-hidden group transition-all duration-300"
                    >
                        <Book size={24} />
                        <span className="text-lg">Course</span>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex m-4 hover:bg-orange-800 hover:text-white shadow-xl hover:shadow-orange-500/50 items-center gap-4 p-3 rounded-lg cursor-pointer relative overflow-hidden group transition-all duration-300"
                    >
                        <User size={24} />
                        <span className="text-lg">Profile</span>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex m-2 hover:bg-orange-800 hover:text-white shadow-xl hover:shadow-orange-500/50 items-center gap-4 p-3 rounded-lg cursor-pointer relative overflow-hidden group transition-all duration-300"
                    >
                        <Video size={24} />
                        <span className="text-lg">Video Player</span>
                    </motion.li>
                </ul>
            </motion.div>
        </div>

        {/*    big screen*/}
        <div className="hidden md:block justify-evenly items-center">

            <motion.div
                // animate={{ x: isOpen ? 0 : "-100%" }}
               // className="fixed border-r-4 border-transparent hover:border-orange-500/50 w-1/5 top-0 left-0 h-screen bg-gray-900 text-white p-4 flex rounded-r-full items-center gap-6 shadow-xl backdrop-blur-lg bg-opacity-80 transition-transform duration-100"
            className="fixed border-r-4 border-transparent hover:border-orange-800 hover:shadow-orange-500/50 w-1/5 top-0 left-0 h-screen bg-gray-900 text-white p-4 flex rounded-r-full items-center gap-6 shadow-xl backdrop-blur-lg bg-opacity-80 transition duration-200"
            >
                {/*<button*/}
                {/*    className="absolute top-4 right-4 bg-gray-800 p-2 rounded-full md:hidden"*/}
                {/*    onClick={toggleSidebar}*/}
                {/*>*/}
                {/*    <X size={24} className="text-white" />*/}
                {/*</button>*/}
                <ul className="mt-12 space-y-6 ">
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex mx-4 hover:bg-orange-800 hover:text-white shadow-xl hover:shadow-orange-500/50 items-center gap-4 p-3 rounded-lg cursor-pointer relative overflow-hidden group transition-all duration-300"
                    >
                        <NavLink to="/home" className={({isActive})=>`{isActive ? "bg-orange-800 text-white shadow-orange-500/50" :"text-white"}`}>
                           <div className="flex items-center"> <Home size={24} />
                            <span className="text-lg mx-4">Home</span></div>
                    </NavLink>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex mx-2 hover:bg-orange-800 hover:text-white shadow-xl hover:shadow-orange-500/50 items-center gap-4 p-3 rounded-lg cursor-pointer relative overflow-hidden group transition-all duration-300"
                    >
                        <NavLink to="/course" className={({isActive})=>`{isActive ? "bg-orange-800 text-white shadow-orange-500/50" :"text-white"}`}>
                            <div className="flex items-center"> <Book size={24} />
                                <span className="text-lg mx-4">Course</span></div>
                        </NavLink>

                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex mx-4 hover:bg-orange-800 hover:text-white shadow-xl hover:shadow-orange-500/50 items-center gap-4 p-3 rounded-lg cursor-pointer relative overflow-hidden group transition-all duration-300"
                    >
                        <NavLink to="/profile" className={({isActive})=>`{isActive ? "bg-orange-800 text-white shadow-orange-500/50" :"text-white"}`}>
                            <div className="flex items-center"> <User size={24} />
                                <span className="text-lg mx-4">Profile</span> </div>
                        </NavLink>

                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex mx-2 hover:bg-orange-800 hover:text-white shadow-xl hover:shadow-orange-500/50 items-center gap-4 p-3 rounded-lg cursor-pointer relative overflow-hidden group transition-all duration-300"
                    >
                        <NavLink to="/video-player" className={({isActive})=>`{isActive ? "bg-orange-800 text-white shadow-orange-500/50" :"text-white"}`}>
                            <div className="flex items-center"> <Video size={24} />
                                <span className="text-lg mx-4">Video Player</span> </div>
                        </NavLink>

                    </motion.li>

                    {/*<button onClick={isLoggedIn ? handleLogout : () => navigate("/login")} className="flex mx-4 hover:bg-orange-800 hover:text-white shadow-xl hover:shadow-orange-500/50 items-center gap-4 p-3 rounded-lg cursor-pointer relative overflow-hidden group transition-all duration-300">*/}
                    {/*    {isLoggedIn ? <div><LogOutIcon size={24}/><span className="text-lg mx-4">Logout</span></div> : <div><LogInIcon size={24}/><span className="text-lg mx-4">Login</span>}*/}

                    {/*    */}
                    {/*</button>*/}
                </ul>
            </motion.div>
        </div>
        </>
    );
};

export default Sidebar;