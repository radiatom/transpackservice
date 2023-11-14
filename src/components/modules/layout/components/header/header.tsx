'use client'

import React, { FC } from 'react'

import styles from './header.module.scss'
import { IcoMainLogo } from '@/constants/icons'
import { SearchInput } from '@/components/ui/search-input'
import Link from 'next/link'

import { useSidebarSuspenseQuery } from '@/graphql/generated'
import { useTranslations } from 'next-intl'
import { useParams, usePathname } from 'next/navigation'
import { BurgerBtn } from '@/components/ui/burger-button'
import { useRootStore } from '@/store/zustand'

const Header: FC = () => {
  const { lang, slug } = useParams()
  const pathname = usePathname()
  const t = useTranslations('header')
  const { data } = useSidebarSuspenseQuery({
    variables: {
      id: 1,
    },
  })

  const isMobileMenuActive = useRootStore((state) => state.isMobileMenuActive)
  return (
    <header className={`${styles.header} ${isMobileMenuActive && styles.header_active}`}>
      <div className={`${styles.header__inner} container`}>
        <Link
          href={`/${lang === 'en' ? `${lang}` : ''}`}
          style={{
            pointerEvents: pathname === '/' || pathname === '/en' ? 'none' : 'auto',
            zIndex: '9',
          }}
        >
          <IcoMainLogo className={styles.header__logo} />
        </Link>
        <div className={styles.header__links_container}>
          <Link
            href={`/${lang === 'en' ? 'en/' : ''}equipments`}
            className={`${styles.header__link} ${
              slug === 'equipments' && styles.header__link_active
            }`}
          >
            {t('equipment')}
          </Link>
          {data?.sidebar?.pages?.map((el, index) => {
            const item = el?.titleAll && JSON.parse(el.titleAll)
            return (
              <Link
                key={`${index}-header`}
                href={
                  el?.slug === 'main'
                    ? `/${lang === 'en' ? 'en' : ''}`
                    : `/${lang === 'en' ? 'en/' : ''}${el?.slug}`
                }
                className={`${styles.header__link} ${
                  (slug === el?.slug || (el?.slug === 'main' && !slug)) &&
                  styles.header__link_active
                }`}
              >
                {item[`${lang as string}`]}
              </Link>
            )
          })}
          <Link
            href={`/${lang === 'en' ? 'en/' : ''}news`}
            className={`${styles.header__link} ${slug === 'news' && styles.header__link_active}`}
          >
            {t('news')}
          </Link>
        </div>
        <div className={styles.header__menu}>
          <SearchInput place={'header'} />
        </div>
        <div className={styles.header__burger_icon}>
          <BurgerBtn />
        </div>
      </div>
    </header>
  )
}

export default Header
