import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: rgb(178, 177, 236);
  display: block;
  &.active {
    color: rgb(255, 255, 255);
  }
`;

const AuthNav = () => {
  return (
    <nav className={css.nav__container}>
      <StyledLink to="/" className={css.navigation__link}>
        Home
      </StyledLink>

      <StyledLink to="/registration" className={css.navigation__link}>
        Registration
      </StyledLink>

      <StyledLink to="/login" className={css.nav__login}>
        Login
      </StyledLink>
    </nav>
  );
};

export default AuthNav;
