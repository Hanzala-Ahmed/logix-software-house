import React from 'react'
import FeaturedWorks from '../Sections/FeaturedWorks/FeaturedWorks'
import Header from '../Sections/Header/Header'
import Services from '../Sections/Services/Services'
import HomeSlider from "../Sections/Slider/Slider"
import WhyUs from '../Sections/WhyUs/WhyUs'

const Home = () => {
  return (
    <>
      <HomeSlider />
      <Header />
      <Services />
      <WhyUs />
      <FeaturedWorks />
    </>
  )
}

export default Home