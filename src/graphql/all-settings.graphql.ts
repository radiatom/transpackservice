import { gql } from '@apollo/client'

gql`
  query AllSettings {
    allSettings {
      data {
        key
        value
      }
    }
  }
`
