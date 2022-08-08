import { NavLink } from "react-router-dom";
import { StyledNav, StyledNavLink, StyledLink } from "./styled";

export const Navigation = () => {
  return (
    <StyledNav>
      <StyledLink to="/">Logo</StyledLink>
      <span>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
      </span>
    </StyledNav>
  );
};
