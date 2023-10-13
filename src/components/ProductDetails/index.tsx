import { Title } from '@frontend/styles/shared';
import Image from 'next/image';
import React from 'react';
import { Category, Product, Review as ReviewType } from '../../types/product';
// import Review from "../Review";
import AddToBasketButton from '../AddToBasketButton';
import Price from '../Price';
import Review from '../Review';
import { Container, LeftColumn, RightColumn } from './styled';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <Container>
      <LeftColumn>
        <Image
          src={product.images[0].url}
          alt={product.name}
          width={300}
          height={300}
          priority
        />
      </LeftColumn>
      <RightColumn>
        <Title>{product.name}</Title>
        <Price itemPrice={product.price} />
        {product.categories.map((category: Category) => (
          <p key={category.id}>{category.name}</p>
        ))}
        <p>{product.description}</p>

        <AddToBasketButton
          id={product.id}
          title={product.name}
          price={product.price}
          rating={5}
          image={product.images[0].url}
        />

        {/* Reviews */}
        {product.reviews.length > 0 && (
          <>
            <Title>Top reviews from United Kingdom</Title>
            {product.reviews.map((productReview: ReviewType) => (
              <Review
                productReview={productReview}
                rating={4}
                key={productReview.id}
              />
            ))}
          </>
        )}
      </RightColumn>
    </Container>
  );
};

export default ProductDetails;
