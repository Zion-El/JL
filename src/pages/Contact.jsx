import React from 'react'
import Account from '../components/Account/Account'
import AfterNav from '../components/AfterNav/AfterNav'
import Bvolunteer from '../components/Bvolunteer/Bvolunteer'
import Contactc from '../components/Contact/Contactc'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'

const Contact = () => {
  return (
    <div>
        <NavBar/>
        <AfterNav title="Contact Us"/>
        <Contactc/>
        <Account/>
        <Bvolunteer/>
        <Footer/>
      
    </div>
  )
}

export default Contact
