import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useState, useEffect } from 'react'
import './App.css'
import $ from 'jquery'

function App() {
  const [isMobile, setIsMobile] =  useState(false);
  useEffect( () => {
    Aos.init({
      duration: 2000
    })
    $(window).on("scroll", function () {
      Aos.init({
        duration: 2000
      })
    });
    //si width menor a 600 isMobile = true
    if(window.screen.width < 600)
      setIsMobile(true)
    else
      setIsMobile(false)
  },[])
  return (
    <div className="app">
      <Header isMobile={isMobile}/>
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;