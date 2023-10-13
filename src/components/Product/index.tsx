import { Title } from '@frontend/styles/shared';
import Price from '../Price';
import Rating from '../Rating';
import { Info, ProductContainer } from './styles';

interface Props {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
}

const Product = ({ id, image, price, rating, title }: Props) => {
  return (
    <ProductContainer>
      <img src={image} alt={title} />
      <Info>
        <Title>{title}</Title>
        <Price itemPrice={price} />
        <Rating ratingNumber={rating} />
      </Info>
    </ProductContainer>
  );
};

export default Product;
