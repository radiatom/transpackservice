import { gql } from '@apollo/client'

gql`
  mutation RequestCreate($name: String!, $comment: String, $email: String) {
    requestCreate(input: { name: $name, comment: $comment, email: $email }) {
      data {
        comment
        email
        name
      }
    }
  }
`
