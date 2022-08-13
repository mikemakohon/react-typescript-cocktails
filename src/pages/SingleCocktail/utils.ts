import { getCocktail } from "./../../api/cocktails";
import { Cocktail } from "../../utils/types";

export const fetchCocktail = (id: string) => {
  getCocktail(id).then((data) => {
    const {
      strDrink: name,
      strDrinkThumb: image,
      strAlcoholic: info,
      strGlass: glass,
      strInstructions: instructions,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
    } = data.drinks[0];
    const ingredients = [
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
    ];
    return { name, image, info, glass, instructions, ingredients };
  });
};
