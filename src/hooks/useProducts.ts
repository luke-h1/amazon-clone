import { useQuery } from '@apollo/client';
import { productsQuery } from '@frontend/lib/graphql/queries';

const useProducts = () => {
  const { loading, error, data } = useQuery(productsQuery);
  return {
    loading,
    error,
    data,
  };
};
export default useProducts;
