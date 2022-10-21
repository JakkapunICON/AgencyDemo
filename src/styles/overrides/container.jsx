// ==============================|| OVERRIDES - CONTAINER ||============================== //

const Container = (theme) => {
    return {
        defaultProps: {
            maxWidth: 'xl'
        },
        styleOverrides: {
            root: {
                [theme.breakpoints.up('xs')]: {
                    paddingLeft: 0,
                    paddingRight: 0
                }
            }
        }
    };
};

export default Container;
