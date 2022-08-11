import { Button as MaterialButton } from "@mui/material";

type ButtonProps = {
  title: string;
};

export const Button = ({ title }: ButtonProps) => {
  return <MaterialButton variant="outlined">{title}</MaterialButton>;
};
