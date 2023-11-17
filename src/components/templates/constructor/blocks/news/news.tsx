import React, { FC } from 'react'
import s from './news.module.scss'

interface IProps {
  id: string
}

const News: FC<IProps> = ({id}) => {
  return (
    <div className={s.application}>
      <div className='container'>
        <div className={s.application__container}>
          hello
        </div>
      </div>
    </div>
  )
}

export default News
