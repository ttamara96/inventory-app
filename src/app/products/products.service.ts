
import { GET_PRODUCTS_QRY } from '../../../api-config/queries';
import { Product } from '@inventory/inventory-api/src/gql/graphql';
import gqlClientConnect from '../../../api-config/graphql.config';

interface IApiResponse {
    hasError: boolean,
    data: Product[] | null,
}

export const getProductsHandler = async () => {
  try {
    const response = await gqlClientConnect().query({
      query: GET_PRODUCTS_QRY,
    });
    const { products } = response.data;
    const dataRes: IApiResponse = {
      hasError: false,
      data: products,
    };
    return dataRes;
  } catch (error) {
    const errorRes: IApiResponse = {
      data: null,
      hasError: true,
    };
    return errorRes;
  }
};