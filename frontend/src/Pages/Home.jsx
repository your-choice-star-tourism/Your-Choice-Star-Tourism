import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import PopularTours from '../components/PopularTours'
import Features from '../components/Features'
import Footer from '../components/Footer'
import MostBooked from "../components/MostBooked"
import OutdoorActivity from '../components/OutdoorActivity'

const Home = () => {
  return (
    <>
    <Hero />
    <OutdoorActivity />
    <MostBooked />
    <About />
    <PopularTours />
    <Features />
    <div className='max-padd-container bg-white'>
    <Footer />
    </div>
    </>
  )
}

export default Home
