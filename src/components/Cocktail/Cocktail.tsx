import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Button,
} from "@mui/material";
import { spacing } from "@mui/system";
import { GlassTypeContainer } from "./styled";
import { FaRegLightbulb } from "react-icons/fa";

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
      <CardActionArea>
        <Link style={{ textDecoration: "none" }} to={`/cocktail/${id}`}>
          <CardMedia component="img" height="250" image={image} alt={name} />
          <CardContent>
            <Typography sx={{ minHeight: 65 }} variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {info}, glass:
              <GlassTypeContainer color={glass.toLowerCase()}>
                {glass.toLowerCase()}
              </GlassTypeContainer>
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};
