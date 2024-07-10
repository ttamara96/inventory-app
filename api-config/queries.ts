import { gql } from '@apollo/client';

export const GET_PRODUCTS_QRY = gql`
  query {
    products {
      id
      name
      price
    }
  }
`;