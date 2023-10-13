import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.navBg};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  margin: 0;
  padding: 10px 15px;
  z-index: 1000;
`;

export const Logo = styled(Image)`
  margin: 0 2px;
  height: 50px;
  cursor: pointer;
  object-fit: contain;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const SearchInput = styled.input`
  display: flex;
  height: 22px;
  padding: 10px;
  border: none;
  width: 100%;
`;

export const SearchIconButton = styled(SearchIcon)`
  background-color: #febd68;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.white};
`;

export const OptionTopLine = styled.span`
  font-size: 10px;
`;

export const OptionBottomLine = styled.span`
  font-size: 13px;
  font-weight: 800;
`;
