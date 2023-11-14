'use client'

import React, { FC, ReactNode, useEffect } from 'react'
import { Header } from '@/components/modules/layout/components/header'
import { Footer } from '@/components/modules/layout/components/footer'
import { SideButtons } from '@/components/modules/layout/components/side-buttons'
import { SideBar } from '@/components/modules/layout/components/side-bar'
import styles from './layout.module.scss'
import { useRootStore } from '@/store/zustand'
import { usePathname } from 'next/navigation'

interface ILayout {
  children: ReactNode
  lang: string
}

const Layout: FC<ILayout> = ({ children }) => {
  const pathname = usePathname()
  const isMobileMenuActive = useRootStore((state) => state.isMobileMenuActive)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <div className={`${styles.layout} ${isMobileMenuActive && styles.layout__burger} `}>
      <Header />
      <SideButtons />
      <SideBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
