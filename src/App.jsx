import React from 'react'
import Category from './components/Category'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import RecentProperties from './components/RecentProperties'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <RecentProperties />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
