import { useParams, Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { spacing } from "@mui/system";
import { GlassTypeContainer } from "../../components/Cocktail/styled";

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

  return (
    <>
      <Card
        sx={{
          maxWidth: 400,
          margin: "15px auto",
          padding: "10px",
        }}
      >
        <CardMedia component="img" height="450" image={image} alt={name} />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <GlassTypeContainer color={glass.toLowerCase()}>
              {glass.toLowerCase()}
            </GlassTypeContainer>
          </Typography>
          <Typography variant="body2" color="text.secondary">
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
