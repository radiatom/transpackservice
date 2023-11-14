'use client'

import { FC, memo } from 'react'

import { useRootStore } from '@/store/zustand'

import styles from './burger-btn.module.scss'

//component
const BurgerBtn: FC = () => {
  const isMobileMenuActive = useRootStore((state) => state.isMobileMenuActive)
  const handleChangeStore = useRootStore((state) => state.handleChangeStore)

  //return
  return (
    <div
      className={`${styles.burger_btn} ${isMobileMenuActive ? styles.burger_btn_active : ''} `}
      onClick={() => handleChangeStore({ isMobileMenuActive: !isMobileMenuActive })}
    >
      <div
        className={`${styles.burger_btn__line} ${
          isMobileMenuActive ? styles.burger_btn__line_active : ''
        }`}
      ></div>
    </div>
  )
}
export default memo(BurgerBtn)
