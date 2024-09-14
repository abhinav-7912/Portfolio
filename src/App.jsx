import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
    <div className='dark:bg-slate-800 dark:text-white'>
    <Navbar />
    <Home />
    <About />
    <Education />
    <Portfolio />
    <Contact />
    <Footer />
    </div>
    <Toaster />
    </>
  )
}

export default App;
