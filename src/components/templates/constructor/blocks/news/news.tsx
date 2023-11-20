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

const News: FC<IProps> = ({ id }) => {
  return (
    <div className={s.news}>
      <div className='container'>
        <div className={s.news__container}>
          <h3 className={s.news__title}>Слідкуй за пропозиціями</h3>
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
                return (
                  <SwiperSlide key={`${index + 'Slide'}`}>
                    <Card el={el} />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
