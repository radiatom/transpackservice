import { gql } from '@apollo/client'

gql`
  query Footer($id: Int) {
    footer(input: { id: $id }) {
      id
      title
      pages {
        meta_descriptionAll
        meta_titleAll
        id
        slug
        titleAll
      }
    }
  }
`
