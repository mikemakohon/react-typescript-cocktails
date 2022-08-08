import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  font-size: 26px;
  font-weight: 500;
  color: #367aff;
  text-decoration: none;
`;

export const StyledNav = styled.nav`
  height: 50px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  background-color: #35e5a0;
`;

export const StyledNavLink = styled(NavLink)`
  color: #ffffff;
  padding: 20px;
  font-size: 18px;
  &:hover {
    color: #ffffff;
    opacity: 0.9;
  }
  &.active {
    font-weight: 600;
    color: #faffaf;
  }
`;
