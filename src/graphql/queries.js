import { gql } from 'apollo-boost'

export const GET_REPOSITORIES = gql`
    query {
        repositories {
            edges {
              node {
                fullName
                reviewCount
                forksCount
                stargazersCount
                description
                language
                ownerAvatarUrl
              }
            }
        }
    }
`

export const AUTHORIZED_USER = gql`
    query {
      authorizedUser {
        id
        username
      }
    }
`