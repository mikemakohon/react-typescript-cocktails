import { StyledLink, StyledNav, StyledNavLink } from "./styled";
import { FaGlassMartini } from "react-icons/fa";

export const Navigation = () => {
  return (
    <StyledNav>
      <StyledLink to="/">
        <FaGlassMartini /> Mixology
      </StyledLink>
      <span>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
      </span>
    </StyledNav>
  );
};
