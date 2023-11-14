'use client'

import React, { FC } from 'react'
import styles from './search-input.module.scss'
import { IcoSearch } from '@/constants/icons'
import { useParams } from 'next/navigation'

interface IProps {
  place: 'header' | 'side-bar'
}

const SearchInput: FC<IProps> = ({ place }) => {
  const [open, setOpen] = React.useState<boolean>(false)

  const { lang } = useParams()

  const changeHandler = () => {
    setOpen(!open)
  }

  return (
    <>
      {place === 'side-bar' ? (
        <div
          className={`${styles.search_sideBar} ${
            open ? `${styles.search_sideBar_open}` : `${styles.search_sideBar_close}`
          } `}
        >
          {open && (
            <input
              placeholder={lang == 'en' ? 'Enter a word to search for' : 'Введіть слово для пошуку'}
              className={styles.search_sideBar__input}
            />
          )}

          <IcoSearch onClick={changeHandler} />
        </div>
      ) : (
        <div
          className={`${styles.search_header} ${
            open ? `${styles.search_header_open}` : `${styles.search_header_close}`
          } `}
        >
          {open && (
            <input
              placeholder={lang == 'en' ? 'Enter a word to search for' : 'Введіть слово для пошуку'}
              className={styles.search_header__input}
            />
          )}
          <IcoSearch onClick={changeHandler} />
        </div>
      )}
    </>
  )
}

export default SearchInput
