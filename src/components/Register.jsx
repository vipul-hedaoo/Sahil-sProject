import React, { useState } from "react";
import { motion } from "framer-motion";
import {User, Mail, Lock, File, Calendar, PhoneIcon} from "lucide-react";

const Register = () => {
    const [avatarError, setAvatarError] = useState("");

    const validateAvatar = (file) => {
        const validTypes = ["image/jpeg", "image/png", "application/pdf"];
        const maxSize = 3 * 1024 * 1024; // 3MB
        if (!validTypes.includes(file.type)) {
            return "Only JPG, PNG, or PDF files are allowed.";
        }
        if (file.size > maxSize) {
            return "File size must be less than 3MB.";
        }
        return "";
    };

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        const error = validateAvatar(file);
        if (error) {
            setAvatarError(error);
        } else {
            setAvatarError("");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <motion.div
                className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-2xl font-bold text-orange-500 text-center mb-6">
                    Registration
                </h2>
                <form>
                    <div className="mb-4 flex items-center gap-3">
                        <User className="text-orange-500" />
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    <div className="mb-4 flex items-center gap-3">
                        <User className="text-orange-500" />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    <div className="mb-4 flex items-center gap-3">
                        <Calendar className="text-orange-500" />
                        <input
                            type="date"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    <div className="mb-4 flex items-center gap-3">
                        <PhoneIcon className="text-orange-500" />
                        <input
                            type="text"
                            placeholder="Contact No."
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    <div className="mb-4 flex items-center gap-3">
                        <Mail className="text-orange-500" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    <div className="mb-4 flex items-center gap-3">
                        <Lock className="text-orange-500" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    <div className="mb-4 flex items-center gap-3">
                        <Lock className="text-orange-500" />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm">Upload Avatar (JPG, PNG, PDF)</label>
                        <input
                            type="file"
                            accept=".jpg,.jpeg,.png,.pdf"
                            className="w-full text-sm"
                            onChange={handleAvatarChange}
                        />
                        {avatarError && (
                            <p className="mt-2 text-sm text-red-500">{avatarError}</p>
                        )}
                    </div>
                    <motion.div
                        className="text-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                        >
                            Register
                        </button>
                    </motion.div>
                </form>
            </motion.div>
        </div>
    );
};

export default Register;
