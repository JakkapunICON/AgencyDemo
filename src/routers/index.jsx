import { useRoutes } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';

// ==============================|| ROUTING RENDER ||============================== //

function ThemeRoutes() {
    return useRoutes([MainRoutes, LoginRoutes]);
}

export default ThemeRoutes;
