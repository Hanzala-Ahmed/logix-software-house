import React from 'react'
import AboutJawan from '../Sections/AboutJawan/AboutJawan'
import FeaturedWorks from '../Sections/FeaturedWorks/FeaturedWorks'
import MyFooter from '../Sections/Footer/MyFooter'
import Header from '../Sections/Header/Header'
import Services from '../Sections/Services/Services'
import HomeSlider from "../Sections/Slider/Slider"
import WhyUs from '../Sections/WhyUs/WhyUs'
import WorkForm from '../Sections/WorkForm/WorkForm'

const Home = () => {
  return (
    <>
      <Header />
      <HomeSlider />
      <Services />
      <WhyUs />
      <FeaturedWorks />
      <AboutJawan />
      <WorkForm />
      <MyFooter />
    </>
  )
}

export default Home