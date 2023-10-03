import React from 'react'
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const Homepage = () => {
  return (
    <div style={{width:"100%"}}>
        <Navbar />
        <Main />
        <Footer />
    </div>
  )
}

export default Homepage