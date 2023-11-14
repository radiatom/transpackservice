import { gql } from '@apollo/client'

gql`
  query Product($id: Int) {
    product(input: { id: $id }) {
      descriptionAll
      id
      nameAll
      status
      images {
        original
        thumb
        thumb2
      }
      price {
        price_dol
        price_grn
      }
    }
  }
`
