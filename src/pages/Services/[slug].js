import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import Headlines from "../components/Headlines";
import Contact from "../components/Contact";
import HelpdeskReception from "../Services/HelpdeskReception";
import Footer from "../components/Footer";
import {useRouter} from 'next/router';
import { services } from '@/constants/services';
import { data } from 'autoprefixer';
 
export default function Page() {
    const router = useRouter()
    const [filteredService, setFilteredService] =useState({})
   
    const slug = router.query.slug;

    useEffect(() =>{
        if(slug){
        let serviceItem = services.filter(el => slug.toLowerCase() === el.heading.toLowerCase())[0]
        setFilteredService(serviceItem)
        }
    }, [slug])

    console.log(filteredService)

    
      const headImg = "/svg/one/doctors-not-css.svg";
      const height = "0";
      const width = "1000";
    
    if(!filteredService){
        return <div> Loading....</div>
    }  
      return (
        <div className="relataive">
          <Navbar />
          <div className="max-w-7xl mx-auto z-0">
            <Headlines
              startHead={filteredService.heading}
              content={filteredService.description}
              showButton={true}
              headImg={headImg}
              height={height}
              width={width}
            />
          </div>
          <HelpdeskReception data={filteredService} />
          <Contact />
          <Footer />
        </div>
      );
    };
    
    
