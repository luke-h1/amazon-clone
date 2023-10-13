import { useQuery } from '@apollo/client';
import { productQuery } from '@frontend/lib/graphql/queries';

const useProduct = (id: string) => {
  const { loading, error, data } = useQuery(productQuery, {
    variables: { id },
  });
  return { loading, error, data };
};

export default useProduct;
