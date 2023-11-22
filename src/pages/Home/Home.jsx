import React from 'react'
import Header from '../../components/Layout/Header'
import Begin from '../../components/Maroonbegin/Begin'
import Carousel from '../../components/carousel/Carousel'
import Advertisement from '../../components/advertisement/Advertisement'
import Individual from '../../components/individual/Individual'
import Offer from '../../components/offer/Offer'
import Gallery from '../../components/galery/Gallery'
import Contact from '../../components/contact/Contact'

export default function Home() {
  return (
    <>
    <Header/>
   <Begin/>
   <Carousel/>
   <Advertisement/>
   <Individual/>
   <Offer/>
   <Gallery/>
   <Contact/>
    
    </>
  )
}
