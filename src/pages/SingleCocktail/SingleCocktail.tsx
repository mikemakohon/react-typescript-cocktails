import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { CardMedia, CardContent, Typography } from "@mui/material";
import { Button } from "../../components/common/Button";
import { GlassTypeWrapper } from "../../components/CocktailList/components/CocktailListItem/styled";
import { AlcoholWrapper } from "../../components/CocktailList/components/CocktailListItem/styled";
import { IngredientWrapper, StyledCard } from "./styled";
import { Error } from "../../components/common/Error";
import { getCocktail } from "../../api/cocktails";
import { Cocktail } from "../../utils/types";

export const SingleCocktail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState<Cocktail>();

  useEffect(() => {
    if (id) {
      getCocktail(id).then((data) => {
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
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const drink = { name, image, info, glass, instructions, ingredients };
        setCocktail(drink);
      });
    }
  }, [id]);

  // if (loading) {
  //   return <CircularProgress />;
  // }

  // if (error) {
  //   return <Error />;
  // }

  if (cocktail) {
    console.log(cocktail);
    return (
      <StyledCard>
        <CardMedia
          component="img"
          height="450"
          image={cocktail.image}
          alt={cocktail.name}
        />
        <CardContent>
          <Typography variant="h5" component="div" color="secondary">
            {cocktail.name}
          </Typography>
          <Typography variant="body1" color="text.primary">
            <AlcoholWrapper alcoholInfo={cocktail.info}>
              {" "}
              {cocktail.info}
            </AlcoholWrapper>
          </Typography>
          <Typography sx={{ py: 1 }} variant="body2">
            Ingredients:
            {cocktail.ingredients?.map((item: string, index: number) => {
              return item ? (
                <IngredientWrapper key={index}>{item}</IngredientWrapper>
              ) : null;
            })}
          </Typography>
          <Typography variant="body1">
            <GlassTypeWrapper glassType={cocktail.glass.toLowerCase()}>
              {cocktail.glass.toLowerCase()}
            </GlassTypeWrapper>
          </Typography>
          <Typography sx={{ py: 1 }} variant="body2" color="text.secondary">
            {cocktail.instructions}
          </Typography>
        </CardContent>
        <Link style={{ textDecoration: "none" }} to={`/`}>
          <Button title="Return" />
        </Link>
      </StyledCard>
    );
  }
};
