import React from 'react'
import Bookbar from '../../components/users/home/bookbar/bookbar'
import Slider from '../../components/users/home/slider/slider'
import Testimonals from '../../components/users/common/testimonals/testimonals'
import Spacer from '../../components/users/common/spacer/spacer'
import WhyUs from '../../components/users/common/whyus/whyus'

const HomePage = () => {
  return (
    <>
    <Slider/>
    <Bookbar/>
    <Spacer height={150}/>
    <Testimonals/>
    <Spacer height={150}/>
    <WhyUs/>
    <Spacer height={150}/>
    </>
  )
}

export default HomePage