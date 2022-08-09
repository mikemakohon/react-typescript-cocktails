import { useGlobalContext } from "../../context/AppContext";
import { CircularProgress } from "@mui/material";

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

  return <div>CocktailList</div>;
};
