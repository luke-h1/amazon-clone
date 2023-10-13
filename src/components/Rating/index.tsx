import StarIcon from "@mui/icons-material/Star";
import React from "react";
import { Container } from "./styles";

interface RatingProps {
  ratingNumber: number;
}

const Rating = ({ ratingNumber }: RatingProps) => {
  return (
    <Container>
      {Array(ratingNumber)
        .fill(<StarIcon className="product__star" />)
        .map((item) => (
          <p key={item}>{item}</p>
        ))}
    </Container>
  );
};

export default Rating;