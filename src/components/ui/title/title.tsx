import React, { FC } from 'react'
import styles from './title.module.scss'

interface IProps {
  text: string
  size?: 'small' | 'large'
}

const Title: FC<IProps> = ({ text, size = 'large' }) => {
  return (
    <div
      className={`${styles.title__text} ${
        size === 'large' ? styles.title__text__large : styles.title__text__small
      }`}
    >
      {text}
    </div>
  )
}

export default Title
