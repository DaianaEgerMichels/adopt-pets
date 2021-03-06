import { styled } from "@mui/material";

export const TitleStyled = styled("h1")`
  font-size: 2rem;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(5)};
`;

export const Subtitle = styled("h2")`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  color: ${({ theme }) => theme.palette.text.secondary};
  font-weight: normal;
`;
