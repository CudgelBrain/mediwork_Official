import React from 'react'

const FastSolutions = () => {
    const arr = [
        {
          img: "./home/icons/profile.png",
          alt:"Icon",
          title: "Choose Solution",
          desc: "Choose a specialist according to your disease complaints",
        },
        {
          img: "./home/icons/calendar.png",
          alt:"Icon",
          title: "Make a Schedule",
          desc: "Make a schedule with the doctor concerned so you can start the examination",
        },
        {
          img: "./home/icons/star.png",
          alt:"Icon",
          title: "Get your Solutions",
          desc: "After conducting an examination with a specialist we can help find the right healing method",
        },
      ];
  return (
    <div className='mt-16'>
        <div>
        <h3 className="text-yellow text-center mt-3">Fast Solutions</h3>
        <h4 className="text-3xl font-bold text-white text-center mt-2">
          <span className="text-yellow">Step By Step</span> to get your solutions
        </h4>
      </div>
      <div className="flex items-center justify-center align-middle mt-10">
        {arr.map((data) => (
          <div className="bg-white rounded-b-md px-10 py-12 mx-3 border-t-[3px] border-yellow w-72">
            <img src={data.img} alt={data.alt} height={40} width={40}/>
            <h3 className="text-sm font-semibold mt-3">{data.title}</h3>
            <p className="text-xs text-grey mt-3 w-3/4">{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FastSolutions