import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import {
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Button } from "../../components/common/Button";
import { GlassTypeWrapper } from "../../components/CocktailList/components/CocktailListItem/styled";
import { AlcoholWrapper } from "../../components/CocktailList/components/CocktailListItem/styled";
import { IngredientWrapper, StyledCard } from "./styled";
import { getCocktail } from "../../api/cocktails";
import { Error } from "../../components/common/Error";

export const SingleCocktail = () => {
  const { id } = useParams();
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data, error, loading } = useFetch(url, "drinks");
  // const [data, setData] = useState<null | any[]>(null);

  // getCocktail(id!).then((data) => setData(data));

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Error />;
  }

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strGlass: glass,
    strInstructions: instructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  } = data[0];
  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  ];

  return (
    <StyledCard>
      <CardMedia component="img" height="450" image={image} alt={name} />
      <CardContent>
        <Typography variant="h5" component="div" color="secondary">
          {name}
        </Typography>
        <Typography variant="body1" color="text.primary">
          <AlcoholWrapper alcoholInfo={info}> {info}</AlcoholWrapper>
        </Typography>
        <Typography sx={{ py: 1 }} variant="body2">
          Ingredients:
          {ingredients.map((item: string, index: number) => {
            return item ? (
              <IngredientWrapper key={index}>{item}</IngredientWrapper>
            ) : null;
          })}
        </Typography>
        <Typography variant="body1">
          <GlassTypeWrapper glassType={glass.toLowerCase()}>
            {glass.toLowerCase()}
          </GlassTypeWrapper>
        </Typography>
        <Typography sx={{ py: 1 }} variant="body2" color="text.secondary">
          {instructions}
        </Typography>
      </CardContent>
      <Link style={{ textDecoration: "none" }} to={`/`}>
        <Button title="Return" />
      </Link>
    </StyledCard>
  );
};
