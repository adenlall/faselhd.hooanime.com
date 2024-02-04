"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '@/styles/slider.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import Link from 'next/link';
import Title from '../UI/Title';


export default function Slider({data}) {
    return(

    <div className="bg-primary py-5 slidercolors">
      <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper rounded-box"
      >
        {data.map((item)=>(
            <SwiperSlide className='w-full h-full flex flex-col items-center justify-center rounded-box space-y-2' style={{background: 'url('+item?.img+')', backgroundPosition: "center", backgroundSize:"cover"}} >
                    <div className='rounded-box p-0 max-w-[80%]'>
                        <h2 className='overflow-ellipsis overflow-hidden bg-base-100 px-2 py-1 rounded-box whitespace-nowrap'><Title text={item?.name}/></h2>
                    </div>
                    <p className=''>
                        {
                            item?.genres?.map((gr)=>(
                                <span className='badge m-1 badge-accent'>{gr}</span>
                            ))
                        }
                    </p>
                    <Link href={item?.url??"/"} className='btn btn-primary'>شاهد الان</Link>
            </SwiperSlide>
        ))}
    </Swiper>
    </div>

    );
}