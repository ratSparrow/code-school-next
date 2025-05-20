import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import EventPopup from '../home/EventPopUp'

const Header = () => {
  return (
    <Fragment>
      
        <Navbar />
        <EventPopup/>
        <Banner />

    </Fragment>
  )
}

export default Header
