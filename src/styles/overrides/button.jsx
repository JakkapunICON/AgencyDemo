// ==============================|| OVERRIDES - BUTTON ||============================== //

const Button = (theme) => {
    return {
        styleOverrides: {
            root: {
                borderRadius: 50
            },
            sizeSmall: {
                height: 21
            },
            sizeMedium: {
                height: 24
            },
            sizeLarge: {
                height: 30
            }
        }
    };
};

export default Button;
