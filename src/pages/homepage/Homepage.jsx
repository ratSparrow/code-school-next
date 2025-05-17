import  { Fragment } from 'react'

import WhatYouWillLearn from '../../components/home/WhatYouWillLearn'
import WhoThisCourseIsFor from '../../components/home/WhoThisCourseIsFor'
import CourseFeatures from '../../components/home/CourseFeatures'
import CourseTimeline from '../../components/home/CourseTimeline'
import InstructorSection from '../../components/home/InstructorSection'
import { Testimonial } from '../../components/home/Testimonial'
import { Pricing } from '../../components/home/Pricing'
import { FAQSection } from '../../components/home/FAQSection'
import ProjectSyllabus from '../../components/home/ProjectSyllabus'

const Homepage = () => {
  return (
    <Fragment>

      <WhatYouWillLearn />
      <WhoThisCourseIsFor />
      <CourseFeatures />
      <CourseTimeline />
      <ProjectSyllabus/>
      <InstructorSection/>
      {/* <Testimonial/> */}
      <Pricing/>
      <FAQSection/>
    </Fragment>
  )
}

export default Homepage
