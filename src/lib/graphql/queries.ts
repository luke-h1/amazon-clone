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

export const productQuery = gql`
  query Product($id: ID!) {
    product(where: { id: $id }) {
      id
      name
      description
      price
      categories {
        id
        name
      }
      images {
        width
        height
        fileName
        url
      }
      reviews {
        id
        rating
        email
        name
        headline
        content
      }
    }
  }
`;
