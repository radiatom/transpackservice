import { gql } from '@apollo/client'

gql`
  query AllProductCategories {
    allProductCategories(input: {}) {
      data {
        title_h2All
        title_h1All
        slug
        children {
          contentAll
          slug
          title_h1All
          title_h2All
          banner {
            original
            thumb
            thumb2
          }
          products {
            nameAll
            id
            images {
              thumb
              thumb2
              original
            }
          }
          image {
            original
            thumb
            thumb2
          }
        }
      }
    }
  }
`
