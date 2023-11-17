"use client"
import React, { FC } from 'react'
import s from './card.module.scss'
import { IcoArrowRight } from '@/constants/icons'

interface IProps {
    id:string,
    image:string
    title: string
    data: string
}

const Card: FC<IProps> = ({el}) => {
  return (
    <div className={s.card}>
      <div className={s.card__image}></div>
      <div className={s.card__title}>{el.title}</div>
      <div className={s.card__details_container}>
        <div className={s.card__date}>{el.date}</div>
        <div className={s.card__button}>Деталі <IcoArrowRight className={s.card__arrow}/></div>
      </div>
    </div>
  )
}

export default Card
