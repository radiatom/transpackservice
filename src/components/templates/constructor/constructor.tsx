import React from 'react'
import { useParams } from 'next/navigation'
import { useAllPagesSuspenseQuery } from '@/graphql/generated'

const pagesVariables = {
  proNasStatistika: 'pro-nas-statistika',
  mainSlider: 'main-slider',
  catalog: 'katalog-texniki',
}

const Constructor = () => {
  const { slug } = useParams()
  const { data } = useAllPagesSuspenseQuery({
    variables: { first: 25, page: 1 },
  })

  const blocks = data?.allPages?.data?.find((el) => el?.slug === (slug ? slug : 'main'))?.blocks

  return (
    <>
      {blocks?.map((el) => {
        // if (el.slug === pagesVariables.mainSlider) {
        //   return (
        //     <Fragment key={`${el.slug}-${el.id}-banner`}>
        //     </Fragment>
        //   )
        // }
        // if (el.slug === pagesVariables.proNasStatistika) {
        //   return (
        //     <Fragment key={`${el.slug}-${el.id}-about-info`}>
        //     </Fragment>
        //   )
        // }
      })}
    </>
  )
}

export default Constructor
