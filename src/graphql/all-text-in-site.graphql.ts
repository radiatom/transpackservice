import { gql } from '@apollo/client'

gql`
  query AllTextsInSite($first: Int, $page: Int) {
    allTextsInSite(input: { first: $first, page: $page }) {
      data {
        key
        textAll
        id
      }
    }
  }
`
