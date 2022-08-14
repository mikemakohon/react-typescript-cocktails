import { useGlobalContext } from "../../context/AppContext";
import { Grid } from "@mui/material";
import CocktailListItem from "./components/CocktailListItem/CocktailListItem";
import { Spinner } from "../common/Spinner";
import { StyledContainer } from "./styled";

export const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (!cocktails.length) return <h2> ☹ No cocktails found </h2>;

  return (
    <StyledContainer>
      {loading && <Spinner />}
      {cocktails && !loading && (
        <Grid container>
          {cocktails.map((cocktail, index) => (
            <Grid sx={{ px: 2, py: 2 }} item xs={12} md={6} lg={4} key={index}>
              <CocktailListItem key={cocktail.id} {...cocktail} />
            </Grid>
          ))}
        </Grid>
      )}
    </StyledContainer>
  );
};
