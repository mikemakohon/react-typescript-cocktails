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
import { AlcoholContainer, GlassTypeContainer } from "./styled";

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
            <Typography sx={{ minHeight: 65 }} variant="h5" color="secondary">
              {name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <AlcoholContainer alcoholInfo={info}> {info}</AlcoholContainer>{" "}
              <br /> glass:
              <GlassTypeContainer glassType={glass.toLowerCase()}>
                {glass.toLowerCase()}
              </GlassTypeContainer>
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};
