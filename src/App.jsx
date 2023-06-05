import React from 'react'
import './App.css'
import Homee from './components/home/Homee';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';


function App() {
  return (
    <main className='main'>
      <Header />
      <Homee />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />

    </main>

  )
}
export default App
