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
            <button className='bg-black text-white w-[200px] rounded-md font-medium  mx-auto md:mx-0 py-3'>Get Started</button>

        </div>
    </div>
  )
}
