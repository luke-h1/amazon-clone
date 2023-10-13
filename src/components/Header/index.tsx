import { auth } from '@frontend/lib/firebase';
import { useAppDispatch, useAppSelector } from '@frontend/store/hooks';
import { signOutFromAccount } from '@frontend/store/reducers/userReducer';
import { ShoppingCartOutlined } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Option,
  Logo,
  Nav,
  OptionBottomLine,
  OptionTopLine,
  SearchBox,
  SearchIconButton,
  SearchInput,
  SignInLink,
} from './styles';

const Header = () => {
  const user = useAppSelector(state => state.user.user);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleSignIn = () => {
    if (user !== null) {
      auth.signOut();
      dispatch(signOutFromAccount());
    } else {
      router.push("/login");
    }
  };

  return (
     <Nav>
      <Link href="/">
        <Logo
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
          width={100}
          height={100}
        />
      </Link>

      <SearchBox>
        <SearchInput type="text" />
        <SearchIconButton />
      </SearchBox>

      <SignInLink>
        <Option>
          <OptionTopLine>Hello {user?.email}</OptionTopLine>
          <OptionBottomLine onClick={() => handleSignIn()}>
            {user !== null ? "Sign Out" : "Sign in"}
          </OptionBottomLine>
        </Option>
      </SignInLink>

      <Option>
        <OptionTopLine>Returns</OptionTopLine>
        <OptionBottomLine>& Orders</OptionBottomLine>
      </Option>
    </Nav>
  );
};

export default Header;
