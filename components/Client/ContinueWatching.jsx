"use client"
import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import '@/styles/slider.res.css';

// import required modules
import { Pagination } from 'swiper/modules';
import EpisodeCardClient from '../UI/EpisodeCardClient';

export default function ContinueWatching() {

  const [data] = useState(() => {
    let xdata;
    try {
      xdata = JSON.parse(localStorage.lastwatched);
    } catch (error) {
      xdata = [];
      localStorage.lastwatched = [];
    }
    return xdata;
  });
  
  const [show, setShow] = useState(localStorage.showcont === 'true' ? true : false);
  useEffect(() => {
    localStorage.showcont = show;
  }, [show]);
  


  return (
    <div className='slderres px-2'>
      {
        show?(
          <>
          {
            data.length?(

          <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="bg-base-100"
          style={{zIndex: 0}}
        >
          {
            data.toReversed().map((item, i)=>(
              <>
                <SwiperSlide className='rounded-box my-8'>
                  <EpisodeCardClient data={item} key={i} />
                </SwiperSlide>
              </>
            ))
          }
          {/* <SwiperSlide className='text-base-content'>Slide 9</SwiperSlide> */}
        </Swiper>
            ):(
              <div className='bg-base-300 rounded-box p-4 my-2 w-full flex flex-wrap items-cemter justify-center'>
                <span className='text-xl font-medium text-base-content m-2'>ابدأ بالمشاهدة لترى أخر المشاهدات هنا</span>
              </div>
            )
          }
        </>
        ):""
      }
      <button onClick={()=>{setShow(!show)}} className='btn btn-sm btn-block bg-transparent rounded-none'>
        <svg
          className='fill-base-content'
          width={18}
          height={18}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          xmlSpace="preserve"
        >
          <path d="M20 24H4c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h16c2.2 0 4 1.8 4 4v16c0 2.2-1.8 4-4 4zM4 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4z" />
          <path d="M23 9H1c-.6 0-1-.4-1-1s.4-1 1-1h22c.6 0 1 .4 1 1s-.4 1-1 1zM15 18c-.3 0-.5-.1-.7-.3l-3-3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l3 3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z" />
          <path d="M9 18c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l3-3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-3 3c-.2.2-.4.3-.7.3z" />
        </svg>
        أكمل المشاهدة
      </button>
    </div>
  );

}