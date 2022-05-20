import React from 'react'
import Bookbar from '../../components/users/home/bookbar/bookbar'
import Slider from '../../components/users/home/slider/slider'
import Testimonals from '../../components/users/common/testimonals/testimonals'
import WhyUs from '../../components/users/common/whyus/whyus'
import Spacer from '../../components/users/common/spacer/spacer'


const HomePage = () => {
  return (
    <>
    <Slider/>
    <Bookbar/>
    <Spacer/>
    <Testimonals/>
    <Spacer height={150}/>
    <WhyUs/>
    <Spacer height={150}/>
    </>
  )
}

export default HomePage