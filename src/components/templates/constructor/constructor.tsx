import React, { Fragment } from 'react'
import { useParams } from 'next/navigation'
import { useAllPagesSuspenseQuery } from '@/graphql/generated'
import { Application } from '@/components/templates/constructor/blocks/application'

const pagesVariables = {
  proNasStatistika: 'pro-nas-statistika',
  mainSlider: 'main-slider',
  catalog: 'katalog-texniki',
  application: 'application',
}

const Constructor = () => {
  const { slug } = useParams()
  const { data } = useAllPagesSuspenseQuery({
    variables: { first: 25, page: 1 },
  })

  // const blocks = data?.allPages?.data?.find((el) => el?.slug === (slug ? slug : 'main'))?.blocks
  const blocks = [{ id: '1', slug: 'application' }]
  return (
    <>
      {blocks?.map((el) => {
        if (el.slug === pagesVariables.application) {
          return (
            <Fragment key={`${el.slug}-${el.id}-aplication`}>
              <Application id={el.id} />
            </Fragment>
          )
        }
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
