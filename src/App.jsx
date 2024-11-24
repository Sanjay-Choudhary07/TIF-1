import { useState } from 'react'

import Header from './components/LandingPage'
import  AboutUs  from './components/AboutUs'
import ArticleSection from './components/ArticleSection'
import Footer from './components/Footer'
function App() {
  return (
    <div className='text-blueish font-open mx-auto'>
    <Header/>
    <AboutUs/>
    <ArticleSection/>
    <Footer/>
    </div> 
  )
}

export default App

