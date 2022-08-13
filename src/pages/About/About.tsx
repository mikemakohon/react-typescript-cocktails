import profile from "./img/profile.webp";
import {
  StyledContainer,
  StyledProfilePicture,
  StyledSubtitle,
} from "./styled";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export const About = () => {
  return (
    <StyledContainer>
      <StyledProfilePicture src={profile} alt="profile-pic" />
      <Typography variant="h4" gutterBottom>
        Mykhailo Makohon
      </Typography>
      <Typography variant="body1" gutterBottom>
        <StyledSubtitle>Summary:</StyledSubtitle>~3 years of experience in
        various managerial positions in the IT industry (project
        manager/coordinator, product support manager). Passed The Professional
        Scrum Master certification (PSM -1). Possess fundamental programming
        knowledge (HTML, CSS, JavaScript, Git, React, Node) and keep working on
        improving it.
      </Typography>
    </StyledContainer>
  );
};
