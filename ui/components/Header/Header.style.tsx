import { styled } from "@mui/material";


//const paddingSize = '5rem';
//padding: ${paddingSize};

export const HeaderContainer = styled('header')`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #f0f0f0;
    padding: ${({theme}) => theme.spacing(8)};
`;

export const Logo = styled('img')`
    width: 18rem;
`;