import { useGlobalContext } from "../../context/AppContext";

export const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  console.log(loading, cocktails);

  return <div>CocktailList</div>;
};
