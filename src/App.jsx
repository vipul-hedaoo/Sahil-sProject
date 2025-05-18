import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar.jsx'
import VideoPlayer from "./components/VideoPlayer.jsx";
import Para from "./components/Carousel.jsx"
import Slider from "./components/Slider.jsx"
import Carousel from "./components/Carousel.jsx";
import VideoCard from "./components/VideoCard.jsx";
import Course from "./components/Course.jsx";
import Login from "./components/Login.jsx";
import Startup from "./components/Startup.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<Sidebar/>*/}
      {/*  <VideoPlayer/>*/}
      {/*  <Carousel/>*/}
      {/*  <Slider/>*/}
      {/*  <VideoCard/>*/}
      {/*  <Course/>*/}
      {/*  <Login/>*/}
      {/*  <Startup/>*/}
    </>
  )
}

export default App
