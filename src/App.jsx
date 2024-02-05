import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Trust from './components/TrustedBy/Trust'
import Home from './components/Home/Home'
import Services, { Solution } from './components/Services/Services'
import Rate, { Banner } from './components/Rate/Rate'
import Software, { Awards, Partners } from './components/Software/Software'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <About />
      {/* <Trust /> */}
      <Home />
      <Services />
      {/* <Rate /> */}
      {/* <Banner title={'Construction Management \nSoftware for Green Construction'}
        desc={"Manage processes for net-zero initiatives, ultimately contributing to the UN Sustainable Development Goals"}
        imglink={"https://assets-global.website-files.com/63ef1dedb6792e58267b1f52/65391fd374d87fce480f7a7a_Green-Construction-p-800.jpg"} /> */}
      <Solution />
      <Banner title={'Gain unbeatable visibility \non your mega-projects'}
        desc={"Keep track of key areas in your construction projects and share the right information with all stakeholders"}
        imglink={"https://assets-global.website-files.com/63ef1dedb6792e58267b1f52/6539dbe74a1fdf0f9d91f4cd_Gain-Visibility-on-Your-Mega-Projects-p-800.jpg"} />
      <Software />
      {/* <Partners /> */}
      {/* <Awards /> */}
      <Footer />
    </>
  )
}

export default App
