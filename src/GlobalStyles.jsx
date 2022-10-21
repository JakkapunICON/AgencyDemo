// ==============================|| DEFAULT THEME - MUICSSBASELINE (GlobalStyles)  ||============================== //

const GlobalStyles = () => ({
    MuiCssBaseline: {
        styleOverrides: {
            html: {
                fontFamily: `'Open Sans','Noto Sans Thai',sans-serif`
            },
            body: {
                margin: 0,
                padding: 0,
                boxSizing: 'border-box'
            }
        }
    }
});

export default GlobalStyles;
