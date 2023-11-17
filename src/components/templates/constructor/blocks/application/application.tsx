import React, { FC } from 'react'
import s from './application.module.scss'
import Image from 'next/image'
import { UkraineImg } from '@/constants/images'
import { IcoAppStore, IcoGooglePlay } from '@/constants/icons'
import Link from 'next/link'

interface IProps {
  id: string
}

const Application: FC<IProps> = ({id}) => {
  return (
    <div className={s.application}>
      <div className='container'>
        <div className={s.application__container}>
          <Image alt={'ukraine'} src={UkraineImg} width={533} />
          <div className={s.application__body}>
            <div className={s.application__body__item}>
              <h3 className={s.application__body__title}>Мобільний додаток ТРАНСПАКСЕРВІС</h3>
              <p className={s.application__body__text}>
                Купуйте квитки онлайн на автобус. Розклади рейсів і ваші квитки тепер завжди під
                рукою.
              </p>
            </div>
            <div className={s.application__body__item}>
              <p className={s.application__body__text}>Все швидко і просто!</p>
              <div className={s.application__body__icons_container}>
                <Link href={'https://apps.apple.com/ru/app/%D1%82%D1%80%D0%B0%D0%BD%D1%81%D0%BF%D0%B0%D0%BA%D1%81%D0%B5%D1%80%D0%B2%D1%96%D1%81/id1481333998'}>
                  <IcoAppStore className={s.application__body__icon}/>
                </Link>
                <Link href={'https://play.google.com/store/apps/details?id=com.devseonet.transpackservice'}>
                  <IcoGooglePlay className={s.application__body__icon}/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Application
