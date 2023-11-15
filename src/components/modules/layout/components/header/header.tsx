'use client'

import React, { FC } from 'react'

import s from './header.module.scss'
import Link from 'next/link'

import { useParams } from 'next/navigation'
import { useRootStore } from '@/store/zustand'
import { ITEMS, linkType } from './constants'
import { IcoArrowDown, IcoLogo } from '@/constants/icons'
import { BurgerBtn } from '@/components/ui/burger-button'

const Header: FC = () => {
  const { slug } = useParams()

  const isMobileMenuActive = useRootStore((state) => state.isMobileMenuActive)
  return (
    <header className={`${s.header} ${isMobileMenuActive && s.header_active}`}>
      <header className={s.header}>
        <div className={`${s.header__container} container`}>
          <Link href='/'>
            <IcoLogo className={s.header__logo} />
          </Link>
          <div className={s.header__inner}>
            <div className={s.header__links}>
              {ITEMS.map((el: linkType, index: number) => {
                return (
                  <Link key={index} href={el.slug}>
                    {el.title}
                    {el.children && <IcoArrowDown />}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        <div className={s.header__burger_icon}>
          <BurgerBtn />
        </div>
      </header>
      );
    </header>
  )
}

export default Header
