import React from 'react'
import {Outlet} from 'react-router-dom'
import'./App.css';
import Sidebar from "./components/Sidebar.jsx";
import Vlearnnav from "./components/Vlearnnav.jsx";
function Layout(){
    return (
        <>
            <Sidebar/>
            {/*<Vlearnnav/>*/}
            <Outlet/>
        </>
    )
}
export default Layout