import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, CardMedia, CardContent, Typography } from "@mui/material";
import { Button } from "../../components/common/Button";
import { GlassTypeWrapper } from "../../components/CocktailList/components/CocktailListItem/styled";
import { AlcoholWrapper } from "../../components/CocktailList/components/CocktailListItem/styled";
import { IngredientWrapper, StyledCard } from "./styled";
import { Error } from "../../components/common/Error";
import { getCocktail } from "../../api/cocktails";
import { Cocktail } from "../../utils/types";
import { fetchCocktail } from "./utils";
import { youtubeClient } from "../../api/youtube";

export const SingleCocktail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState<Cocktail>();
  const [videoURL, setVideoURL] = useState("");

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

      if (cocktail) {
        youtubeClient
          .get("/search", {
            params: {
              q: `${cocktail?.name} cocktail`,
            },
          })
          .then((data) => {
            setVideoURL(
              `http://www.youtube.com/embed/${data.data.items[0].id.videoId}`
            );
          })
          .catch((err) => console.log(err));
      }
    }
  }, [id]);

  // if (loading) {
  //   return <CircularProgress />;
  // }

  // if (error) {
  //   return <Error />;
  // }

  if (cocktail) {
    return (
      <Container>
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
            <Typography gutterBottom variant="body2">
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
            <Typography gutterBottom variant="body2" color="text.secondary">
              {cocktail.instructions}
            </Typography>
          </CardContent>
          <Link style={{ textDecoration: "none" }} to={`/`}>
            <Button title="Return" />
          </Link>
        </StyledCard>

        {videoURL && (
          <iframe id="ytplayer" width="640" height="360" src={videoURL} />
        )}
      </Container>
    );
  }
};
