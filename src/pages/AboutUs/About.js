import React from 'react'
import Navbar from '../components/Navbar'
import Headlines from '../components/Headlines'
import FastSolutions from '../Home/FastSolutions'
import DeviceSection from './DeviceSection'
import Icons from '../components/Icons'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const About = () => {
  const arr = [
    {
      img: "../Home/icons/profile.png",
      alt:"Icon",
      title:"Choose Solution",
      desc: "Choose a medical specialist that best matches your specific health concerns and symptoms",
    },
    {
      img: "/about/calendar.png",
      alt:"Icon",
      title: "Make a Schedule",
      desc: "Make a schedule with the doctor concerned so you can start the examination",
    },
    {
      img: "/about/star.png",
      alt:"Icon",
      title: "Get your Solutions",
      desc: "After conducting an examination with a specialist we can help find the right healing method",
    },
  ];
  const startHead = "Who is"
  const spanHead = "MediWorks"
  const endHead = "? We’re so glad you asked." 
  const content = "Health carely is a new way to get health insurance quotes. We offer tools similar to those provided by insurance companies for free and prices are based on donations and not restrictive health plan networks."
  const headImg = "/svg/two/doctors-not-css.svg"
  const height = '500'; // Set your desired height
  const width = '500'; // Set your desired width

  return (
    <div className=''>
        <Navbar/>
        <div className='max-w-7xl mx-auto'>
          <Headlines startHead={startHead} spanHead={spanHead} endHead={endHead} content={content} showButton={false} headImg={headImg} height={height} width={width} />
          </div>
        <div  className='md:mt-16  mt-8'>
          <h3 className="text-yellow text-center mt-3">Fast Solutions</h3>
          <h4 className="text-3xl font-bold text-white text-center mt-2">
            What we are upto?
          </h4>
        </div>
      <div className="flex lg:flex-row flex-col items-center justify-center mt-5 max-w-7xl mx-auto">
        {arr.map((props,index) => (
        <FastSolutions key={index} props={...props}/>
        ))}
      </div>
        <DeviceSection/>
      <Icons/>
      <Contact/>
      <Footer showMap={false}/>
    </div>
  )
}

export default About