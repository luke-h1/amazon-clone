import { gql } from '@apollo/client';

export const productsQuery = gql`
  query Products {
    products {
      id
      name
      price
      images {
        id
        url
        width
        height
      }
    }
  }
`;
