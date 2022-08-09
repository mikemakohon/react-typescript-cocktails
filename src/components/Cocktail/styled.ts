import styled from "styled-components";

type GlassTypeContainerProps = {
  glassType?: string;
};

const handleColor = (color: string | undefined): string => {
  switch (color) {
    case "collins glass":
      return "#2986cc";
    case "cocktail glass":
      return "#c90076";
    case "shot glass":
      return "#55ff55";
    case "martini glass":
      return "#ff7373";
    case "highball glass":
      return "#b19cd9";
    case "beer mug":
      return "#ebc633";
    case "coffee mug":
      return "#44536d";
    case "old-fashioned glass":
      return "#e20000";

    default:
      return "#000000";
  }
};

export const GlassTypeContainer = styled.span<GlassTypeContainerProps>`
  font-weight: 700;
  color: ${({ color }) => handleColor(color)};
`;
