import React from 'react'
import Bvolunteer from '../components/Bvolunteer/Bvolunteer'
import Donate from '../components/Donate/Donate'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Mission from '../components/Mission/Mission'
import Mission2 from '../components/Mission2/Mission2'
import NavBar from '../components/NavBar/NavBar'
import Payment from '../components/Payment/Payment'
import SocialEvent from '../components/SocialEvent/SocialEvent'
import Volunter from '../components/Volunters/Volunter'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <Mission/>
        <Mission2/>
        <Donate/>
        <SocialEvent/>
        <Volunter/>
        <Bvolunteer/>
        <Payment/>
        <Footer/>
    </div>
  )
}

export default Home