import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Cocktail, IAppContextInterface } from "../utils/types";
import { useDebounce } from "../hooks/useDebounce";
import { getCocktails } from "../api/cocktails";

const AppContext = createContext<IAppContextInterface>({
  loading: false,
  searchTerm: "",
  cocktails: [],
});

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  const debouncedTerm = useDebounce(searchTerm);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);

    getCocktails(debouncedTerm)
      .then((res) => {
        const newCocktails = res.drinks?.map((item) => {
          const {
            idDrink: id,
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strGlass: glass,
          } = item;

          return {
            id,
            name,
            image,
            info,
            glass,
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
