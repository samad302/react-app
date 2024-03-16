import React from 'react'
import ecommerce from '../components/assets/images/ecommerce.jpg'
import { ReactTyped } from "react-typed";


export default function Banner() {
  return (
    <div className=' w-full py-[100px]' style={{backgroundImage: `url(${ecommerce})`}}>
        <div className="max-w-[1240px] my-[100px] mx-auto text-center font-bold ">
            <div className='text-xl md:text-3xl md:p-[24px] '>
                Learn with us
            </div>
            <h2 className='text-white text-4xl md:text-[80px] md:p-[24px] '>Grow With us</h2>
            <div className='text-[20px] md:text-[50px] md:p-[24px] text-white  '>
                Learn 
                <ReactTyped className='pl-5'
    strings={["Web Development","Ethical Hacking","Digital Marketing"
    ]}
    typeSpeed={100}
    loop={true}
    backSpeed={100}
  />
             

            </div>
            <button class="bg-[#2699fb] relative h-12 w-40 overflow-hidden border border-indigo-600 text-white -600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-[#b3d4f1] hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
      <span class="relative z-10">Center Hover</span>
    </button>
            {/* <button className='bg-[#2699fb] text-white w-[200px] rounded-md font-medium  mx-auto md:mx-0 py-3'>Get Started</button> */}

        </div>
    </div>
  )
}
