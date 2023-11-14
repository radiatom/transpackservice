import { gql } from '@apollo/client'

gql`
  query Sidebar($id: Int) {
    sidebar(input: { id: $id }) {
      id
      pages {
        id
        meta_descriptionAll
        meta_titleAll
        slug
        titleAll
      }
      title
    }
  }
`
