import React from 'react'
// import { Navbar } from 'react-bootstrap'
import AfterNav from '../components/AfterNav/AfterNav'
import Bvolunteer from '../components/Bvolunteer/Bvolunteer'
import Footer from '../components/Footer/Footer'
import Heading from '../components/Headings/Heading'
import NavBar from '../components/NavBar/NavBar'

const LatestCause = () => {
  return (
    <>
    <NavBar/>
    <AfterNav title="Latest Causes"/>
    <Heading/>
    <Bvolunteer/>
    <Footer/>
    </>
  )
}

export default LatestCause