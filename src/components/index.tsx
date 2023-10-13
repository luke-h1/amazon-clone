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
      <Option>
        <OptionTopLine>Returns</OptionTopLine>
        <OptionBottomLine>& Orders</OptionBottomLine>
      </Option>
      <Option>
        <OptionTopLine>Hello</OptionTopLine>
        <OptionBottomLine>Sign in</OptionBottomLine>
      </Option>
    </Nav>
  );
};

export default Header;
