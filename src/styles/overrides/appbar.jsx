// ==============================|| OVERRIDES - APPBAR ||============================== //

const AppBar = (theme) => {
    return {
        defaultProps: {
            position: 'static',
            color: 'inherit'
        },
        styleOverrides: {
            root: {
                backgroundColor: theme.palette.background.main
            }
        }
    };
};

export default AppBar;
