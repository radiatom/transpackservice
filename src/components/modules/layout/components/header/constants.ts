export type itemsType = Array<linkType>
export type linkType = { title: string; slug: string; children?: ticketsType }
export type ticketsType = Array<{ title: string; slug: string }>

export const ITEMS: itemsType = [
  { title: 'Про нас', slug: '/' },
  { title: 'Підтримка', slug: '/' },
  {
    title: 'Квитки на автобус',
    slug: '/',
    children: [
      { title: 'Луцьк-Рівне', slug: '/' },
      { title: 'Луцьк-Київ', slug: '/' },
      { title: 'Луцьк-Львів', slug: '/' },
    ],
  },
  { title: 'Новини', slug: '/' },
]
