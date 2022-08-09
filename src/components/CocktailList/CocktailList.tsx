import { useGlobalContext } from "../../context/AppContext";
import { CircularProgress, Container, Grid } from "@mui/material";
import { spacing } from "@mui/system";
import { Cocktail } from "../Cocktail";

export const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  console.log(loading, cocktails);

  if (loading) return <CircularProgress style={{ fontSize: "40px" }} />;

  if (cocktails.length < 1)
    return (
      <h2>
        <span style={{ color: "#f44336", fontSize: "60px" }}>☹</span> No
        cocktails found
      </h2>
    );

  return (
    <Container style={{ marginTop: "20px" }}>
      <Grid container>
        {cocktails.map((cocktail, index) => (
          <Grid sx={{ px: 2, py: 2 }} item xs={12} md={6} lg={4} key={index}>
            <Cocktail
              key={cocktail.id}
              id={cocktail.id}
              name={cocktail.name}
              image={cocktail.image}
              glass={cocktail.glass}
              info={cocktail.info}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
