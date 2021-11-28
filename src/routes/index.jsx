import Configuracao from "../screens/Configuracao";
import Historico from "../screens/Historico";
import Login from "../screens/Login";
import Principal from "../screens/Principal";

const routes = [
    {
        path: '/',
        element: Login
    },
    {
        path: '/principal',
        element: Principal,
        needsLogin: true
    },
    {
        path: '/historico',
        element: Historico,
        needsLogin: true
    },
    {
        path: '/configuracao',
        element: Configuracao,
        needsLogin: true
    }
];
export default routes;