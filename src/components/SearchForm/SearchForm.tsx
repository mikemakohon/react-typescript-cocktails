import { useGlobalContext } from "../../context/AppContext";
import { SyntheticEvent, useCallback, ChangeEvent } from "react";
import { TextField } from "@mui/material";
import { useDebounce } from "../../hooks/useDebounce";

export const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  // const debounced = useDebounce(searchTerm);

  // const handleChange = useCallback(
  //   (event: SyntheticEvent<HTMLInputElement>) => {
  //     if (setSearchTerm && typeof setSearchTerm === "function") {
  //       setSearchTerm(event.currentTarget.value);
  //     }
  //   },
  //   [setSearchTerm]
  // );

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
      {/* <input type="text" value={searchTerm} onChange={handleChange} /> */}
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
