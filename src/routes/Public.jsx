import { useCookies } from "react-cookie";
import { Navigate } from "react-router";

const Private = ({children}) => {
    const [cookies] = useCookies(['login']);
    return cookies['login'] ? <Navigate to='/principal'/>: children
}

export default Private;