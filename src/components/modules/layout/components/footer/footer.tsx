'use client'

import React, { FC } from 'react'

import styles from './footer.module.scss'
import {
  IcoDomino,
  IcoInstagram,
  IcoMainLogo,
  IcoTelegram,
  IcoViber,
  IcoWhatsapp,
} from '@/constants/icons'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { useAllSettingsSuspenseQuery, useAllTextsInSiteSuspenseQuery } from '@/graphql/generated'
import { useParams, usePathname } from 'next/navigation'
import { getAddress, getEmail, getTelephones, getTimeWork } from '@/services/get-info'

const keyToIcon: Record<string, string> = {
  telegram: IcoTelegram,
  viber: IcoViber,
  whatsapp: IcoWhatsapp,
  instagram: IcoInstagram,
}

const Footer: FC = () => {
  const { lang, slug } = useParams()
  const t = useTranslations('footer')
  const pathname = usePathname()

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
  const timeWork = getTimeWork(text, lang as string)

  return (
    <footer className={styles.footer}>
      <div className={'container'}>
        <div className={styles.footer__inner}>
          <div className={styles.footer__socials}>
            <Link
              href={`${lang === 'en' ? `/${lang}` : ''}${slug ? `/${slug}` : ''}`}
              style={{
                pointerEvents: pathname === '/' || pathname === '/en' ? 'none' : 'auto',
                zIndex: '9',
              }}
            >
              <IcoMainLogo className={styles.footer__main_logo} />
            </Link>

            <div className={styles.footer__links_container}>
              {socialsWithIcons?.map(({ icon: Icon, value, key }) => (
                <Link
                  href={value ?? ''}
                  className={`${
                    key === 'telegram'
                      ? styles.footer__links_container__icon_telegram
                      : styles.footer__links_container__icon
                  }`}
                  key={`${key}--socials-footer`}
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.footer__categories}>
            <div
              className={`${styles.footer__categories__item} ${styles.footer__categories__full_size}`}
            >
              <div className={styles.footer__category}>{t('contacts')}</div>
              <div className={styles.footer__category__block}>
                {address && (
                  <Link
                    style={{
                      pointerEvents: 'none',
                    }}
                    href={address}
                    className={`${styles.footer__category__items} ${styles.footer__category__item_large}`}
                  >
                    {address}
                  </Link>
                )}
                {timeWork && (
                  <Link
                    style={{
                      pointerEvents: 'none',
                    }}
                    href={timeWork}
                    className={`${styles.footer__category__items} ${styles.footer__category__item_large}`}
                  >
                    {timeWork}
                  </Link>
                )}
              </div>

              <div className={styles.footer__category__block}>
                {email?.map((item, index) => (
                  <Link
                    key={`${index}--email--footer`}
                    href={`mailto:${email}`}
                    className={`${styles.footer__category__items} ${styles.footer__category__item_large}`}
                  >
                    {item}
                  </Link>
                ))}

                {telephones?.map((item, index) => (
                  <Link
                    key={`${index}--telephones--footer`}
                    href={`tel:${item?.telephone}`}
                    className={`${styles.footer__category__items} ${styles.footer__category__item_large}`}
                  >
                    {item?.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer__made_by}>
          {t('madeBy')}
          <IcoDomino className={styles.footer__made_by__icon} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
