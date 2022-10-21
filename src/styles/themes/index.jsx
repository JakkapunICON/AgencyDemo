// material-ui
import { CssBaseline, ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material';

// project import theme
import Typography from './typography';
import Breakpoints from './breakpoints';
import Palette from './palette';

// project import overrides
import GlobalStyles from '../../GlobalStyles';
import Container from '../overrides/container';
import Button from '../overrides/button';
import AppBar from '../overrides/appbar';

// ==============================|| DEFAULT THEME - MAIN  ||============================== //

function ThemeCustomization({ children }) {
    // Setting responsive deign & theme & color & font & mode & variant
    let theme = createTheme({
        breakpoints: Breakpoints(0, 640, 960, 1200, 1440),
        palette: Palette('light'),
        typography: Typography()
    });

    // Setting muicomponents overrides
    theme.components = createTheme(theme, {
        MuiCssBaseline: GlobalStyles(),
        MuiContainer: Container(theme),
        MuiButton: Button(theme),
        MuiAppBar: AppBar(theme)
    });

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default ThemeCustomization;
