import React, { useState } from "react";
import { motion } from "framer-motion";
import {EyeIcon, EyeClosedIcon} from "lucide-react";
const LoginPage = ({ handleLogin }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <motion.div
                className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-semibold text-orange-500 text-center mb-4">
                    Login
                </h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-xl hover:shadow-orange-500/50"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-sm mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type={passwordVisible ? "text" : "password"}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-xl hover:shadow-orange-500/50"
                            placeholder="Enter your password"
                            required
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-3 flex items-center text-orange-500 "
                            onClick={togglePasswordVisibility}
                        >
                            {passwordVisible ?  <EyeClosedIcon size={24} className="text-orange-900" /> :  <EyeIcon size={24} className="text-orange-900" />}
                        </button>
                    </div>
                    <button
                        onClick={handleLogin}
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition duration-300"
                    >
                        Login
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default LoginPage;
