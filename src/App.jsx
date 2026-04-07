import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Pricing from './components/Pricing'
import Trainers from './components/Trainers'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Amenities from './components/Amenities'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Pricing />
        <Trainers />
        <Gallery />
        <Testimonials />
        <Amenities />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
