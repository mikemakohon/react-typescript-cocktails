import styled from "styled-components";
import { Card } from "@mui/material";

export const IngredientWrapper = styled.span`
  display: inline-block;
  padding: 3px;
  margin: 3px;
  font-style: italic;
  font-weight: 600;
  color: #003366;
  background-color: #b6fcd5;
  border-radius: 3px;
  border: 1px solid #81d8d0;
`;

export const StyledCard = styled(Card)`
  margin: 35px auto;
  padding: 10px;
  max-width: 400px;
`;
