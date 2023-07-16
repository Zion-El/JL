import React, { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Carousel = ({children: slides, autoSlide=false, autoSlideInterval=3000}) => {

    const [curr, setCurr] = useState(0)

    const prevHandler = () =>{
        setCurr((curr)=>(curr === 0 ? slides.length - 1 : curr - 1))
    }
    const nextHandler = () =>{
        setCurr((curr)=>(curr === 0 ? slides.length + 1 : curr + 1))
    }

    useEffect(()=>{
        if(!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    })

  return (
    <div className='relative overflow-hidden'>
      <div className='flex transition-transform ease-out duration-500' style={{transform: `translateX(-${curr * 100}%)`}}>{slides}</div>
      {/* left button */}
      <div className="">
        <button onClick={prevHandler}>
            <ArrowBackIosIcon/>
        </button>
      </div>

      {/* right button */}
    <div className="">
        <button onClick={nextHandler}>
            <ArrowForwardIosIcon/>
        </button>
      </div>

      <div>
        <div className='flex items-center justify-center'>
            {slides.map((item, index)=>{
                <div className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? 'p-2': 'bg-opacity-50'}`} ></div>
            })}
        </div>
      </div>
    </div>
  )
}

export default Carousel