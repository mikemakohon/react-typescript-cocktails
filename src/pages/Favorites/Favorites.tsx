import { SyntheticEvent, useCallback, useState } from "react";
import { Cocktail } from "../../utils/types";
import { Checkbox, Grid } from "@mui/material";
import CocktailListItem from "../../components/CocktailList/components/CocktailListItem/CocktailListItem";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { StyledGrid } from "./styled";
import { FAVORITE_LOCAL_KEY } from "../../utils/constants";

const Favorites = () => {
  const [localItems, setLocalItems] = useState(() => {
    return JSON.parse(
      localStorage.getItem(FAVORITE_LOCAL_KEY) || "[]"
    ) as Cocktail[];
  });

  const removeFromFavorite = useCallback(
    (event: SyntheticEvent<HTMLInputElement>) => {
      if (event.currentTarget.checked) {
        return;
      }

      const name = event.currentTarget.dataset.name;

      if (!name) {
        return;
      }

      const items = localItems.filter((item) => item.name !== name);
      setLocalItems(items);
      localStorage.setItem("favorites", JSON.stringify(items ?? []));
    },
    [localItems]
  );

  return (
    <>
      <Grid container alignItems="center" justifyContent="center">
        {localItems.map((cocktail, index) => (
          <StyledGrid item xs={12} md={6} lg={4} key={index}>
            <Checkbox
              inputProps={
                {
                  "data-name": cocktail.name,
                } as Record<string, string>
              }
              onChange={removeFromFavorite}
              icon={<FavoriteBorder />}
              checked={true}
              checkedIcon={<Favorite />}
            />
            <CocktailListItem key={cocktail.id} {...cocktail} />
          </StyledGrid>
        ))}
      </Grid>
    </>
  );
};

export default Favorites;
