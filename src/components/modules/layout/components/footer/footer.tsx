'use client'

import React, { FC } from 'react'

import s from './footer.module.scss'
import {
  IcoDomino,
  IcoFooterLogo,
  IcoInstagram,
  IcoMastercard,
  IcoTelegram,
  IcoViber,
  IcoVisa,
  IcoWhatsapp,
} from '@/constants/icons'
import Link from 'next/link'

import { useAllSettingsSuspenseQuery, useAllTextsInSiteSuspenseQuery } from '@/graphql/generated'
import { usePathname } from 'next/navigation'
import { getAddress, getEmail, getTelephones } from '@/services/get-info'
import { POPULAR_FLIGHTS, TO_CUSTOMERS } from './constants'

const keyToIcon: Record<string, string> = {
  telegram: IcoTelegram,
  viber: IcoViber,
  whatsapp: IcoWhatsapp,
  instagram: IcoInstagram,
}

const Footer: FC = () => {
  const pathname = usePathname()

  const lang = 'uk'

  const { data: settings } = useAllSettingsSuspenseQuery()
  const { data: text } = useAllTextsInSiteSuspenseQuery({
    variables: {
      first: 10,
      page: 1,
    },
  })

  const elements = ['telegram', 'viber', 'whatsapp', 'instagram']
  const socials = settings?.allSettings?.data?.filter((el) => elements.includes(el?.key ?? ''))
  const socialsWithIcons = socials?.map((el) => {
    return { ...el, icon: keyToIcon[el?.key ?? ''] }
  })

  const telephones = getTelephones(settings, text, lang as string)
  const email = getEmail(settings)
  const address = getAddress(text, lang as string)

  return (
    <footer className={s.footer}>
      <div className={'container'}>
        <div className={s.footer__inner}>
          <div className={s.footer__socials}>
            <Link
              href={'/'}
              style={{
                pointerEvents: pathname === '/' ? 'none' : 'auto',
                zIndex: '9',
              }}
            >
              <IcoFooterLogo className={s.footer__logo} />
            </Link>

            <h2 className={s.footer__motto}>
              Сервіс для швидкого пошуку квитків на автобус у будь-якому напрямку
            </h2>

            <div className={s.footer__links_container}>
              {socialsWithIcons?.map(({ icon: Icon, value, key }) => (
                <Link
                  href={value ?? ''}
                  className={`${
                    key === 'telegram'
                      ? s.footer__links_container__icon_telegram
                      : s.footer__links_container__icon
                  }`}
                  key={`${key}--socials-footer`}
                >
                  <Icon />
                </Link>
              ))}
            </div>

            <div className={s.footer__bottom_left}>
              <h4 className={s.footer__bottom_left__text}>@2023. All rights reserved</h4>
              <IcoVisa className={s.footer__bottom_left__icon_visa} />
              <IcoMastercard className={s.footer__bottom_left__icon_master} />
            </div>
          </div>

          <div className={s.footer__categories}>
            <div className={s.footer__categories__item}>
              <div className={s.footer__category__title}>клієнтам</div>
              {TO_CUSTOMERS?.map((item, index) => (
                <Link
                  key={`${index}--telephones--footer`}
                  href={item.slug}
                  className={s.footer__category__items}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className={s.footer__categories__item}>
              <div className={s.footer__category__title}>популярні рейси</div>
              {POPULAR_FLIGHTS?.map((item, index) => (
                <Link
                  key={`${index}--telephones--footer`}
                  href={item.slug}
                  className={s.footer__category__items}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className={s.footer__categories__item}>
              <div className={s.footer__category__title}>Контакти</div>
              <div className={s.footer__category__contacts}>
                {email?.map((item, index) => (
                  <Link
                    key={`${index}--email--footer`}
                    href={`mailto:${email}`}
                    className={s.footer__category__contacts__items}
                  >
                    {item}
                  </Link>
                ))}

                {telephones?.map((item, index) => (
                  <Link
                    key={`${index}--telephones--footer`}
                    href={`tel:${item?.telephone}`}
                    className={s.footer__category__contacts__items}
                  >
                    {item?.name}
                  </Link>
                ))}

                <div className={`${s.footer__links_container} ${s.footer__links_margin_bottom}`}>
                  {socialsWithIcons?.map(({ icon: Icon, value, key }) => (
                    <Link
                      href={value ?? ''}
                      className={`${
                        key === 'telegram'
                          ? s.footer__links_container__icon_telegram
                          : s.footer__links_container__icon
                      }`}
                      key={`${key}--socials-footer`}
                    >
                      <Icon />
                    </Link>
                  ))}
                </div>

                <Link href={'https://domino-it.agency/'} className={s.footer__made_by}>
                  Розроблено - <IcoDomino className={s.footer__made_by__icon} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
