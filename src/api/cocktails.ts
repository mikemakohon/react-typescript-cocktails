import client from "./client";

export const getCocktails = async (term?: string) => {
  try {
    if (term) {
      const cocktails = await client.get(`/search.php?s=${term}`);
      return cocktails;
    }
    const cocktails = await client.get("/search.php?s=");
    return cocktails;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getCocktail = async (id: string) => {
  try {
    const cocktail = await client.get(`/lookup.php?i=${id}`);
    return cocktail;
  } catch (error) {
    return Promise.reject(error);
  }
};
