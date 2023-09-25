import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const ContactUs = () => {
  return (
    <div className='max-w-7xl mx-auto'>
        <Navbar/>
        <div className="mt-10"><Contact/></div>
        <div className='mt-20'>
            <Footer showMap={true}/>
        </div>
    </div>
  )
}

export default ContactUs