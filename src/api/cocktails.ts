import client from "./client";
import { CocktailsResponse } from "../utils/types";

export const getCocktails = async (term = ""): Promise<CocktailsResponse> => {
  try {
    return await client.get(`/search.php?s=${term}`);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getCocktail = async (id: string): Promise<CocktailsResponse> => {
  try {
    return await client.get(`/lookup.php?i=${id}`);
  } catch (error) {
    return Promise.reject(error);
  }
};
