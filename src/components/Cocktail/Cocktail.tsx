import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { GlassTypeContainer } from "./styled";

type CocktailProps = {
  image: string;
  name: string;
  id: string;
  info: string;
  glass: string;
};

export const Cocktail = ({ image, name, id, info, glass }: CocktailProps) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia component="img" height="150" image={image} alt={name} />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {info}, glass:
          <GlassTypeContainer color={glass.toLowerCase()}>
            {glass.toLowerCase()}
          </GlassTypeContainer>
        </Typography>
      </CardContent>
    </Card>
  );
};
