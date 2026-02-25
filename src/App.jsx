import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ConverterCard from './components/ConverterCard'
import Herosection from './components/HeroSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      
      <Navbar />

      {/* Main Content */}
      <main className="grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-10 py-10 md:py-20 items-center">
          <Herosection />
          <ConverterCard />
        </div>
      </main>

      {/* Footer at Bottom */}
      <Footer />

    </div>
  )
}

export default App
