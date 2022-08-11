import styled from "styled-components";

type GlassTypeWrapperProps = {
  glassType?: string;
};

const handleColor = (glassType: string | undefined): string => {
  switch (glassType) {
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
    case "whiskey sour glass":
      return "#4aa124";

    default:
      return "#000000";
  }
};

export const GlassTypeWrapper = styled.span<GlassTypeWrapperProps>`
  font-weight: 700;
  color: ${({ glassType }) => handleColor(glassType)};
`;

type AlcoholWrapperProps = {
  alcoholInfo?: string;
};

const handleWeight = (alcoholInfo: string | undefined): number => {
  switch (alcoholInfo) {
    case "Alcoholic":
      return 700;
    case "Non alcoholic":
      return 400;

    default:
      return 500;
  }
};

export const AlcoholWrapper = styled.span<AlcoholWrapperProps>`
  font-weight: ${({ alcoholInfo }) => handleWeight(alcoholInfo)};
`;
