import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

const Principal = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['login']);
    return(
        <>
        <h2 onClick={()=>{
           removeCookie('login');
        }}>Principal</h2>
        </>
        
    );
}

export default Principal;