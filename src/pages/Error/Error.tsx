import { ErrorContainer } from "./styled";
import { Button } from "@mui/material";
import { StyledLink } from "./styled";
import HomeIcon from "@mui/icons-material/Home";

export const Error = () => {
  return (
    <ErrorContainer>
      <h3>Something went wrong!</h3>
      <StyledLink to="/">
        <Button
          startIcon={<HomeIcon />}
          variant="outlined"
          size="large"
          color="error"
        >
          Return
        </Button>
      </StyledLink>
    </ErrorContainer>
  );
};

export default Error;