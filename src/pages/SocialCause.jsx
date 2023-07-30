import React from 'react'
import AfterNav from '../components/AfterNav/AfterNav'
import Donate from '../components/Donate/Donate'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import SocialEvent from '../components/SocialEvent/SocialEvent'

const SocialCause = () => {
  return (
    <>
    <NavBar/>
    <AfterNav title="Social Causes"/>
    <SocialEvent/>
    <Donate/>
    <Footer/>
      
    </>
  )
}

export default SocialCause
