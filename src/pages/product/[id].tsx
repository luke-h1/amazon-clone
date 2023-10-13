import ProductDetails from '@frontend/components/ProductDetails';
import useProduct from '@frontend/hooks/useProduct';
import { Container, Main } from '@frontend/styles/shared';
import { useRouter } from 'next/router';
import Advert from '../../components/Advert';

export default function ProductInfo() {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useProduct(id as string);

  if (loading) return <p>Loading</p>;
  if (error) return <p>error</p>;

  const { product } = data;

  return (
    <Container>
      <Main>
        <Advert />
        <ProductDetails product={product} />
      </Main>
    </Container>
  );
}
