'use client'
import React, { FC } from 'react'
import s from './news.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './styles.css'

// import required modules
import { Navigation } from 'swiper/modules'
import { NEWS_ITEMS } from './constants'
import { Card } from '@/components/templates/elements/news-card'

interface IProps {
  id: string
}
const el = {
  id: '1',
  image:
    'https://s3-alpha-sig.figma.com/img/71c2/328f/ee3d140cb697195da4ab3eccecc4412a?Expires=1701043200&Signature=qXO3agv2m86AJ9oe3bIPWMoBa~o5Wd5liPcpQw60EjjzpU0uwmce2mFcyb8N67Zq-J5LBeGx3w40EG2AFtg7T684R6DiUtgBx-KauuT1OL5Opm3nW2oMhDtjAILATAbphnS5vR8KtIg-S~xa~4sLECc7W~67M8w5MKYOwUXV5GnChbiqCamC71k~8fsT3BETNJUOg4~mDpdV6uWehpLK~1HCbr9TW5xXxhDGOV1LWfe44sgS0CnVSOnKiTX96pxbw2TVUAXPpUPF06vfas7xIrhRHzWMYdmktJHu~b~HeYC~Q-AZtH3JN5BqjDofIBODsUMsHyCYb1CUAwtHZePP7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  title: 'Акційна ціна Луцьк-Тернопіль',
  date: '09.09.2023 - 09.10.2023',
}
const News: FC<IProps> = ({ id }) => {
  return (
    <div className={s.news}>
      <div className='container'>
        <div className={s.news__container}>
          <h3 className={s.news__title}>слідкуй за пропозиціями</h3>
          <p className={s.news__text}>
            Найкращі акцийни ціни на квитки таНайкращі акцийни ціни на квитки таНайкращі акцийни
            ціни на квитки та
          </p>
          <div className={s.news__cards}>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
              className='mySwiper'
            >
              {NEWS_ITEMS.map((el, index) => {
                return <SwiperSlide key={`${index + 'Slide'}`}><Card el={el}/></SwiperSlide>
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
