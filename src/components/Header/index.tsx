import { ShoppingCartOutlined } from '@mui/icons-material';
import Link from 'next/link';
import {
  Option,
  Logo,
  Nav,
  OptionBottomLine,
  OptionTopLine,
  SearchBox,
  SearchIconButton,
  SearchInput,
  Basket,
  BasketCounter,
  SignInLink,
  CheckoutLink,
} from './styles';

const Header = () => {
  return (
    <Nav>
      <Link href="/">
        <Logo
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
          width={75}
          height={75}
        />
      </Link>
      <SearchBox>
        <SearchInput type="text" />
        <SearchIconButton />
      </SearchBox>
      <SignInLink>
        <Option>
          <OptionTopLine>Hello</OptionTopLine>
          <OptionBottomLine>Sign in</OptionBottomLine>
        </Option>
      </SignInLink>
      <Option>
        <OptionTopLine>Returns</OptionTopLine>
        <OptionBottomLine>& Orders</OptionBottomLine>
      </Option>
      <CheckoutLink href="/checkout">
        <Basket>
          <ShoppingCartOutlined />
          <BasketCounter>0</BasketCounter>
        </Basket>
      </CheckoutLink>
    </Nav>
  );
};

export default Header;
