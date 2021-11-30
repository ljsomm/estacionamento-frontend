import { useCookies } from "react-cookie";
import { Navigate } from "react-router";

const Private = ({children}) => {
    const [cookies] = useCookies(['login']);
    return cookies['login'] ? children : <Navigate to='/'/>
}

export default Private;