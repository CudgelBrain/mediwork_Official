import React from 'react'

const DeviceSection = () => {
  return (
    <div className='mt-24 flex text-white p-10'>
        <div className=''>
            <h2 className='text-6xl font-semibold'>We Make <span className='text-yellow'>Healthcare</span> Simple</h2>
            <ul className="list-disc mt-7 ml-5 text-lg leading-loose w-2/3">
                <li>Health carely is a new way to get health insurance quotes. We offer tools similar to those</li>
                <li>provided by insurance companies for free and prices are based on donations and not</li>
                <li>restrictive health plan networks.</li>
            </ul>
        </div>

        <div>
            <img src="/about/device.png" alt="Devices" className='h-[500px] w-[900px]'/>
        </div>
    </div>
  )
}

export default DeviceSection