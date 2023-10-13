import Advert from '@frontend/components/Advert';
import { useAppSelector } from '@frontend/store/hooks';
import {
  selectCartItems,
  selectCartItemsCount,
} from '@frontend/store/reducers/cartReducer';
import {
  CheckoutBody,
  CheckoutContainer,
  CheckoutTitle,
} from '@frontend/styles/checkout';
import { Container, Main } from '@frontend/styles/shared';
import { Cart } from '@frontend/types/cart';
import CheckoutProduct from '../components/CheckoutProduct';
import SubTotal from '../components/SubTotal';

export default function Checkout() {
  const basket = useAppSelector(selectCartItems);
  const basketCount = useAppSelector(selectCartItemsCount);

  return (
    <Container>
      <Main>
        <Advert />
        <CheckoutBody>
          <CheckoutContainer>
            {basket.length === 0 ? (
              <div>
                <h2>Your Shopping Basket is empty</h2>
              </div>
            ) : (
              <div>
                <CheckoutTitle>
                  Your Shopping Basket - {basketCount}{' '}
                  {basketCount > 1 ? 'items' : 'item'} in basket
                </CheckoutTitle>
                {basket.map((item: Cart, index: number) => (
                  <CheckoutProduct
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                  />
                ))}
              </div>
            )}
          </CheckoutContainer>
          {basket?.length > 0 && <SubTotal />}
        </CheckoutBody>
      </Main>
    </Container>
  );
}
