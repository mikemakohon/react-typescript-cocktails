import { Dispatch, SetStateAction } from "react";

export interface IAppContextInterface {
  loading: boolean;
  cocktails: Cocktail[];
  searchTerm: string;
  setSearchTerm?: Dispatch<SetStateAction<string>>;
}

export interface ServerCocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
}

export interface Cocktail {
  image: string;
  name: string;
  id?: string;
  info: string;
  glass: string;
  ingredients?: any[];
  instructions?: string;
}

export interface CocktailsResponse {
  drinks: ServerCocktail[];
}
