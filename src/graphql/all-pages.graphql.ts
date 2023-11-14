import { gql } from '@apollo/client'

gql`
  query AllPages($first: Int, $page: Int) {
    allPages(input: { first: $first, page: $page }) {
      data {
        meta_descriptionAll
        meta_titleAll
        id
        slug
        blocks {
          content
          id
          slug
        }
      }
    }
  }
`
