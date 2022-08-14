import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Checkbox,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Button } from "../../components/common/Button";
import {
  AlcoholWrapper,
  GlassTypeWrapper,
} from "../../components/CocktailList/components/CocktailListItem/styled";
import { IngredientWrapper, StyledCard } from "./styled";
import { getCocktail } from "../../api/cocktails";
import { Cocktail } from "../../utils/types";
import { youtubeClient } from "../../api/youtube";
import { Error } from "../Error";
import { Spinner } from "../../components/common/Spinner";
import { FAVORITE_LOCAL_KEY } from "../../utils/constants";

export const SingleCocktail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState<Cocktail>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videoURL, setVideoURL] = useState("");

  const [localItems, setLocalItems] = useState(() => {
    return JSON.parse(localStorage.getItem(FAVORITE_LOCAL_KEY) || "[]");
  });

  const isInFavorite = useMemo(() => {
    return localItems.some((item: Cocktail) => {
      return item.name === cocktail?.name;
    });
  }, [localItems, cocktail]);

  const onFavToggle = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.checked) {
      setLocalItems([...localItems, cocktail]);
      localStorage.setItem(
        FAVORITE_LOCAL_KEY,
        JSON.stringify([...localItems, cocktail])
      );
      return;
    }

    const newItems = localItems.filter(
      (item: Cocktail) => item.name !== cocktail?.name
    );

    setLocalItems([...newItems]);
    localStorage.setItem(FAVORITE_LOCAL_KEY, JSON.stringify(newItems));
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    setLoading(true);
    getCocktail(id)
      .then((data) => {
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
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (!cocktail) {
      return;
    }
    youtubeClient
      .get("/search", {
        params: {
          q: `${cocktail?.name} cocktail`,
        },
      })
      .then((data) => {
        setVideoURL(
          `https://www.youtube.com/embed/${data.data.items[0].id.videoId}`
        );
      })
      .catch((err) => console.log(err));
  }, [cocktail]);

  if (loading) {
    return (
      <Container>
        <Box sx={{ p: 2 }}>
          <Spinner />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Box sx={{ p: 2 }}>
          <Error />
        </Box>
      </Container>
    );
  }

  if (!cocktail) {
    return null;
  }

  return (
    <Container>
      <StyledCard>
        <Checkbox
          onChange={onFavToggle}
          icon={<FavoriteBorder />}
          value={isInFavorite}
          checked={isInFavorite}
          checkedIcon={<Favorite />}
        />
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
};

export default SingleCocktail;
