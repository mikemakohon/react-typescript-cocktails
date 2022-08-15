import { useGlobalContext } from "../../context/AppContext";
import { useCallback, ChangeEvent } from "react";
import { TextField } from "@mui/material";

export const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (setSearchTerm && typeof setSearchTerm === "function") {
        setSearchTerm(event.currentTarget.value);
      }
    },
    [setSearchTerm]
  );

  return (
    <>
      <TextField
        id="search-title"
        label="Cocktail"
        variant="outlined"
        value={searchTerm}
        onChange={handleChange}
        style={{ marginTop: "20px" }}
        sx={{
          "& .MuiOutlinedInput-root:hover": {
            "& > fieldset": {
              borderColor: "#1cebed",
            },
          },
        }}
      />
    </>
  );
};
