import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDebounce } from "../hooks/useDebounce";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

interface IAppContextInterface {
  loading: boolean;
  cocktails: Cocktail[];
  searchTerm: string;
  setSearchTerm?: Dispatch<SetStateAction<string>>;
}

type Cocktail = {
  id: string;
  name: string;
  image: string;
  info: string;
  glass: string;
};

const AppContext = createContext<IAppContextInterface>({
  loading: false,
  searchTerm: "",
  cocktails: [],
});

const AppProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const debouncedTerm = useDebounce(searchTerm);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    fetch(`${url}${debouncedTerm}`)
      .then((res) => res.json())
      .then((res) => {
        const newCocktails = res.drinks?.map((item: any) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails ?? []);
      })
      .catch(console.log)
      .finally(() => setLoading(false));
  }, [debouncedTerm]);

  useEffect(() => {
    void fetchDrinks();
  }, [debouncedTerm, fetchDrinks]);
  return (
    <AppContext.Provider
      value={{ loading, cocktails, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
