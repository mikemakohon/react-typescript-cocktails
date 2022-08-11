import { Dispatch, SetStateAction } from "react";

export interface IAppContextInterface {
  loading: boolean;
  cocktails: Cocktail[];
  searchTerm: string;
  setSearchTerm?: Dispatch<SetStateAction<string>>;
}

export type Cocktail = {
  image: string;
  name: string;
  id: string;
  info: string;
  glass: string;
};
