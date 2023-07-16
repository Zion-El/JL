import React, { useEffect, useRef, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Video1 from '../assets/px1.mp4';
import Video2 from '../assets/px2.mp4';
import Video3 from '../assets/px3.mp4';

const Home = () => {
  const slides = [Video1, Video2, Video3];
  const [curr, setCurr] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleEnded = () => {
      nextSlide();
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, [curr]);

  useEffect(() => {
    const video = videoRef.current;
    video.load();
    video.play().catch(error => {
      console.error('Autoplay failed:', error);
    });
  }, [curr]);

  const prevSlide = () => {
    const isFirstSlide = curr === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : curr - 1;
    setCurr(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = curr === slides.length - 1;
    const newIndex = isLastSlide ? 0 : curr + 1;
    setCurr(newIndex);
  };

  return (
    <div className="max-w-[100%] h-screen w-full m-auto relative group">
    <div className="max-w-full h-screen w-full m-auto relative group">
      {slides.map((slide, index) => (
        <video
          key={index}
          ref={videoRef}
          style={{ display: index === curr ? 'block' : 'none', objectFit: 'cover' }}
          autoPlay={index === curr}
          loop
          muted
          className="w-full h-full"
        >
          <source src={slide} type="video/mp4" />
        </video>
      ))}
    </div>
      
      {/* overLay */}

      <div className='w-full h-screen bg-black top-0 left-0 opacity-70 absolute'>

      </div>

      <div className='w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center'>
        <div className="">
          <h1 style={{fontFamily: 'Great Vibes'}} className='text-[#fff] text-[3rem] lg:text-[10rem] '>Just Lunch</h1>
        </div>
        <div>
          <a href="">
            <button className='border px-6 py -3 text-[#fff] rounded-[8px] '>Order Now</button>
          </a>
          
        </div>
      </div>

      {/* left */}
      {/* <div className="hidden group-hover:block ease-in duration-400 absolute top-[50%] -translate-x-0 traslate-y-[50%] left-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ArrowBackIosIcon onClick={prevSlide} size={30} />
      </div>

      <div className="hidden group-hover:block ease-in duration-400 absolute top-[50%] -translate-x-0 traslate-y-[50%] right-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ArrowForwardIosIcon onClick={nextSlide} size={30} />
      </div> */}
    </div>
  );
};

export default Home;
