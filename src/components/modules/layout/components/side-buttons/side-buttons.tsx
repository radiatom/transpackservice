'use client'

import React, { FC, useEffect, useState } from 'react'

import styles from './side-buttons.module.scss'
import { IcoDoubleArrow } from '@/constants/icons'

const SideButtons: FC = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const scrollHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    })
  }, [])

  return (
    <div className={styles.side_buttons}>
      <button
        className={`${styles.side_buttons__up} ${!visible && styles.side_buttons__up__close}`}
        onClick={scrollHandler}
      >
        <IcoDoubleArrow />
      </button>
    </div>
  )
}

export default SideButtons
