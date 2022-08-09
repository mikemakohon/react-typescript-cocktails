import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

type CocktailProps = {
  image: string;
  name: string;
  id: string;
  info: string;
  glass: string;
};

export const Cocktail = ({ image, name, id, info, glass }: CocktailProps) => {
  return <Card></Card>;
};
