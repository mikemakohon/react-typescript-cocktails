import { CocktailList } from "../../components/CocktailList";
import { SearchForm } from "../../components/SearchForm";

export const Home = () => {
  return (
    <>
      <SearchForm />
      <CocktailList />
    </>
  );
};

export default Home;