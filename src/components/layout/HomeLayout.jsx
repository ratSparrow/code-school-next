import  { Fragment } from 'react'
import Header from '../common/Header'
import { Outlet } from 'react-router'
import Footer from '../common/Footer'

const HomeLayout = () => {
  return (
    <Fragment>
      <Header/>
      <Outlet/>
      <Footer/>
    </Fragment>
  )
}

export default HomeLayout
