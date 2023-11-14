'use client'

import { useParams, useRouter } from 'next/navigation'
import { FC } from 'react'
import styles from './lang-btn.module.scss'
import { montserrat } from '@/constants/fonts'

const LangBtn: FC = () => {
  const router = useRouter()
  const { lang, slug } = useParams()

  return (
    <div className={`${styles.lang_btn} ${montserrat.className}`}>
      <div
        onClick={() => router.push(`/${slug ?? ''}`)}
        className={`${styles.lang_btn__ua} ${lang === 'uk' && styles.lang_btn__ua_active}`}
      >
        UA
      </div>
      <div
        onClick={() => router.push(`/${'en'}/${slug ?? ''}`)}
        className={`${styles.lang_btn__eng} ${styles.lang_btn__burger} ${
          lang === 'en' && styles.lang_btn__eng_active
        }
        }`}
      >
        EN
      </div>
    </div>
  )
}
export default LangBtn
