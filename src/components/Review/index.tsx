import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import { Review as ReviewType } from '../../types/product';
import Rating from '../Rating';
import {
  BottomRow,
  Container,
  HelpfulBtn,
  MiddleRow,
  TopRow,
  VerifiedText,
} from './styled';

interface IProps {
  productReview: ReviewType;
  rating: number;
}

const Review = ({ productReview, rating }: IProps) => {
  return (
    <Container key={productReview.id}>
      <TopRow>
        <AccountCircleIcon />
        <p>{productReview.name}</p>
      </TopRow>
      <MiddleRow>
        <Rating ratingNumber={rating} />
        <p>{productReview.headline}</p>
      </MiddleRow>
      <VerifiedText>Verified Purchase</VerifiedText>
      <p>{productReview.content}</p>
      <p style={{ color: '#565959' }}>3 people found this helpful</p>
      <BottomRow>
        <HelpfulBtn>Helpful</HelpfulBtn>
        <p style={{ color: '#565959', fontSize: '14px' }}>Report abuse</p>
      </BottomRow>
    </Container>
  );
};

export default Review;
