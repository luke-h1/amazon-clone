import Product from '@frontend/components/Product';
import useProducts from '@frontend/hooks/useProducts';
import {
  BackgroundImg,
  HomeContainer,
  ProductRows,
} from '@frontend/styles/home';
import { Product as ProductType } from '@frontend/types/product';

export default function Home() {
  const { data, error, loading } = useProducts();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <HomeContainer>
      <BackgroundImg src="https://m.media-amazon.com/images/I/61xnEcip5RL._SX3000_.jpg" />
      <ProductRows>
        {data &&
          data?.products?.map(
            (product: ProductType) => (
              <Product
                key={product.id}
                id={product.id}
                image={product?.images[0].url}
                price={product.price}
                rating={product.rating}
                title={product.title}
              />
            ),
          )}
      </ProductRows>
    </HomeContainer>
  );
}
