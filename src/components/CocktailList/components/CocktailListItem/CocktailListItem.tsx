import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";
import { AlcoholWrapper, GlassTypeWrapper } from "./styled";
import { Cocktail } from "../../../../utils/types";

const CocktailListItem = ({ image, name, id, info, glass }: Cocktail) => {
  return (
    <Card sx={{ maxWidth: 400, margin: "0 auto" }}>
      <CardActionArea disabled={!id}>
        <Link style={{ textDecoration: "none" }} to={`/cocktail/${id}`}>
          <CardMedia component="img" height="250" image={image} alt={name} />
          <CardContent>
            <Typography sx={{ minHeight: 65 }} variant="h5" color="secondary">
              {name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <AlcoholWrapper alcoholInfo={info}> {info}</AlcoholWrapper> <br />{" "}
              glass:
              <GlassTypeWrapper glassType={glass.toLowerCase()}>
                {glass.toLowerCase()}
              </GlassTypeWrapper>
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default CocktailListItem;
