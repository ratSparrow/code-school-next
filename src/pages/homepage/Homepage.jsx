import React, { Fragment } from 'react'
import Banner from '../../components/common/Banner'
import WhatYouWillLearn from '../../components/home/WhatYouWillLearn'
import WhoThisCourseIsFor from '../../components/home/WhoThisCourseIsFor'
import CourseFeatures from '../../components/home/CourseFeatures'
import CourseTimeline from '../../components/home/CourseTimeline'
import InstructorSection from '../../components/home/InstructorSection'

const Homepage = () => {
  return (
    <Fragment>
      <Banner />
      <WhatYouWillLearn />
      <WhoThisCourseIsFor />
      <CourseFeatures />
      <CourseTimeline />
      <InstructorSection/>
    </Fragment>
  )
}

export default Homepage
