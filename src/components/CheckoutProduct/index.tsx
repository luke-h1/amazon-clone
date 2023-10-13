import { useAppDispatch } from '@frontend/store/hooks';
import { AmazonButton, Title } from '@frontend/styles/shared';
import Image from 'next/image';
import React from 'react';
import Price from '../Price';
import { Container, Info, TitleContainer } from './styled';

interface IProps {
  id: string;
  title: string;
  image: string;
  price: number;
}

const CheckoutProduct = ({ id, title, image, price }: IProps) => {
  const dispatch = useAppDispatch();

  const removeFromBasket = () => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <Container>
      <Image src={image} alt={title} width={180} height={180} />

      <Info>
        <TitleContainer>
          <Title>{title}</Title>
          <Price itemPrice={price} />
        </TitleContainer>

        <AmazonButton onClick={() => removeFromBasket()}>
          Remove from basket
        </AmazonButton>
      </Info>
    </Container>
  );
};

export default CheckoutProduct;
