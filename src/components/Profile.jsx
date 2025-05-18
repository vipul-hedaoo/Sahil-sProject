import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Profile = () => {
    const [user, setUser] = useState({
        name: "Sahil Donode",
        email: "default@example.com",
        bio: "This is a default bio. Update the data by connecting to the server!",
        imgsrc:"./avtar.jpg",
    });

    const fetchUserData = async () => {
        try {
            // Replace the URL with your API endpoint
            const response = await fetch("https://api.example.com/user");
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error("Failed to fetch user data. Using default data.", error);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <motion.div
                className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-center">
                    <motion.img
                        src={user.imgsrc}
                        alt="User Avatar"
                        className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-orange-500"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    />
                    <h2 className="text-2xl font-semibold text-orange-500">{user.name}</h2>
                    <p className="text-gray-300">{user.email}</p>
                    <p className="mt-4 text-gray-400">{user.bio}</p>
                </div>
                <motion.div
                    className="mt-6 flex justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition">
                        Edit Profile
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Profile;




// components/ProfilePage.jsx
//
