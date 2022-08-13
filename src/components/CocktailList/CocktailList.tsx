import { useGlobalContext } from "../../context/AppContext";
import { Container, Grid } from "@mui/material";
import CocktailListItem from "./components/CocktailListItem/CocktailListItem";
import { Spinner } from "../common/Spinner";
import { Error } from "../common/Error";
import { StyledContainer } from "./styled";
// ! ask about export in index

export const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) return <Spinner />;

  if (!cocktails.length) return <Error />;

  return (
    <StyledContainer>
      <Grid container>
        {cocktails.map((cocktail, index) => (
          <Grid sx={{ px: 2, py: 2 }} item xs={12} md={6} lg={4} key={index}>
            <CocktailListItem key={cocktail.id} {...cocktail} />
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
};
