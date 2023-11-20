'use client'
import React, { FC } from 'react'
import s from './card.module.scss'
import { IcoArrowRight } from '@/constants/icons'
import Image from 'next/image'
import Link from 'next/link'
import { shimmer } from '@/services'

interface IProps {
  el: { id: string; image: any; title: string; date: string }
}

const Card: FC<IProps> = ({ el }) => {
  return (
    <div className={s.card}>
      <div className={s.card__image}>
        <Image
          src={el.image}
          fill
          alt='banner new'
          placeholder={'blur'}
          blurDataURL={shimmer(100, 100)}
        />
      </div>
      <div className={s.card__title}>{el.title}</div>
      <div className={s.card__details_container}>
        <div className={s.card__date}>{el.date}</div>
        <Link href={'/new'} className={s.card__button}>
          Деталі <IcoArrowRight className={s.card__arrow} />
        </Link>
      </div>
    </div>
  )
}

export default Card
