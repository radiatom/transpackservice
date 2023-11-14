'use client'

import { useParams } from 'next/navigation'
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion'
import React, { FC, memo } from 'react'
import { useRootStore } from '@/store/zustand'
import styles from './side-bar.module.scss'

// component
const SideBar: FC = () => {
  const { lang } = useParams()

  const isMobileMenuActive = useRootStore((state) => state.isMobileMenuActive)

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode={'wait'}>
        {isMobileMenuActive && (
          <m.div
            key={'sidemenu'}
            variants={variants}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            transition={{ duration: 0.3 }}
            className={styles.side_bar}
          ></m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  )
}
export default memo(SideBar)

const variants = {
  initial: {
    x: '100%',
  },

  animate: {
    opacity: 1,
    x: '0',
  },

  exit: {
    x: '100%',
  },
}
