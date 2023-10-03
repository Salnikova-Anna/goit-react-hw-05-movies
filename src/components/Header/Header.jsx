import { HeaderNav, HeaderNavLink, HeaderNavList } from './Header.styled';

const Header = () => {
  return (
    <HeaderNav>
      <HeaderNavList>
        <li>
          <HeaderNavLink to="/">Home</HeaderNavLink>
        </li>
        <li>
          <HeaderNavLink to="movies">Movies</HeaderNavLink>
        </li>
      </HeaderNavList>
    </HeaderNav>
  );
};

export default Header;
