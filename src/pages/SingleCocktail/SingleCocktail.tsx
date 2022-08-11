import { useParams, Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { spacing } from "@mui/system";
import { GlassTypeWrapper } from "../../components/Cocktail/styled";
import { AlcoholWrapper } from "../../components/Cocktail/styled";
import { IngredientWrapper } from "./styled";

export const SingleCocktail = () => {
  const { id } = useParams();
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data, error, loading } = useFetch(url, "drinks");

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <h1>😞 Something went wrong</h1>;
  }

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
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
  console.log(ingredients);

  return (
    <>
      <Card
        sx={{
          maxWidth: 400,
          margin: "35px auto",
          padding: "10px",
        }}
      >
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
                <IngredientWrapper key={index}> {item}</IngredientWrapper>
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
          <Button style={{ marginBottom: "15px" }} variant="outlined">
            Return
          </Button>
        </Link>
      </Card>
    </>
  );
};
