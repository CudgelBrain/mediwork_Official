import React from 'react'

const DeviceSection = () => {
  return (
    <div className='mt-32 sm:flex text-white'>
        <div className='pl-16 sm:pl-24 mt-10 w-full'>
            <h2 className='text-6xl font-semibold'>We Make <span className='text-yellow'>Healthcare</span> Simple</h2>
            <ul className="list-disc mt-7 ml-5 text-lg leading-loose sm:w-3/4 text-[#E5E5E5]">
                <li>Health carely is a new way to get health insurance quotes. We offer tools similar to those</li>
                <li>provided by insurance companies for free and prices are based on donations and not</li>
                <li>restrictive health plan networks.</li>
            </ul>
        </div>

        <div className='w-full mt-10'>
            <img src="/about/device.png" alt="Devices" className='h-[600px] w-[900px]'/>
        </div>
    </div>
  )
}

export default DeviceSection