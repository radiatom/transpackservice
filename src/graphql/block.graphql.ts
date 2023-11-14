import { gql } from '@apollo/client'

gql`
  query Block($id: ID!) {
    block(id: $id) {
      content
      galleries {
        gallery {
          original
          thumb
          thumb2
        }
      }
    }
  }
`
