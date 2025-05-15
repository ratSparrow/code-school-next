import React, { Fragment } from 'react'
import Banner from '../../components/common/Banner'
import WhatYouWillLearn from '../../components/home/WhatYouWillLearn'
import WhoThisCourseIsFor from '../../components/home/WhoThisCourseIsFor'
import CourseFeatures from '../../components/home/CourseFeatures'

const Homepage = () => {
  return (
    <Fragment>
      <Banner/>
      <WhatYouWillLearn/>
      <WhoThisCourseIsFor/>
      <CourseFeatures/>
    </Fragment>
  )
}

export default Homepage
