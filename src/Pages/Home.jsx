import React from 'react'
import AboutLogix from '../Sections/AboutLogix/AboutLogix'
import FeaturedWorks from '../Sections/FeaturedWorks/FeaturedWorks'
import MyFooter from '../Sections/Footer/MyFooter'
import Header from '../Sections/Header/Header'
import Services from '../Sections/Services/Services'
import HomeSlider from "../Sections/Slider/Slider"
import WhyUs from '../Sections/WhyUs/WhyUs'
import WorkForm from '../Sections/WorkForm/WorkForm'
import RatingSlider from '../Sections/RatingSlider/RatingSlider'

const Home = () => {
  return (
    <>
      <Header />
      <HomeSlider />
      <Services />
      <WhyUs />
      <FeaturedWorks />
      <AboutLogix />
      <RatingSlider />
      <WorkForm />
      <MyFooter />
    </>
  )
}

export default Home