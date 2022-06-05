import { createTheme } from "@mui/material";

const thema = createTheme({
    palette: {
        primary: {
            main: '#AE0FEA',
            light: '#D149EB',
            dark: '#EB821A',
            contrastText:'#FFFFFF',
        },
        secondary: {
            main: '#C5C5C5',
            light: '#EB821A',
        },
        text: {
            primary: '#293845',
            secondary: '#9EADBA',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
    shape: {
        borderRadius: '3px',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '30px',
                    fontWeight: 'normal',
                    background: '#AE0FEA',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 0px 39px rgba(0, 0, 0, 0.05)',
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                InputLabelProps: {
                    required: false,
                },
                required: true,
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    '& .MuiTableCell-root': {
                        fontWeight: 'bold',
                    },
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    border: '1px solid #D8D8D8',
                },
            },
        },
    },
});

export default thema;