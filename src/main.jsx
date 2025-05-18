//
// import './index.css';
// import App from './App.jsx';
// import ReactDOM from 'react-dom/client';
// import {createBrowserRouter, createRoutesFromElements,Route, RouterProvider} from "react-router-dom";
// import Layout from "./Layout.jsx";
// import Course from "./components/Course.jsx";
//
// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>,
// // )
// const router = createBrowserRouter(
//     createRoutesFromElements(
//
//         <Route path="/" element={<Layout/>}>
//             {/*<Route path="Home" element={<Home />}>/>*/}
//             <Route path="Course" element={<Course />}>/>
//
//         </Route>
//     ))
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <RouterProvider router={router} />
//     </React.StrictMode>,
// )


import './index.css'
import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import Layout from "./Layout.jsx";
import {Component} from "lucide-react";
import Course from "./components/Course.jsx";
import Profile from "./components/Profile.jsx";
import VideoPlayer from "./components/VideoPlayer.jsx";
import Slider from "./components/Slider.jsx";
import Register from "./components/Register.jsx";



const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<Layout/>}>
            <Route path="home" element={<Slider/>}/>
            <Route path="course" element={<Course/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="video-player/:id" element={<VideoPlayer/>}/>

        </Route>

    ))
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
