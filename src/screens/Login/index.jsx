import {  useEffect, useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import Button from '../../components/Button';
import Input from '../../components/Input';
import api from '../../services/api';
import './styles.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookies] = useCookies(['login']);
    const form = useRef();
    const errorBox = useRef();

    useEffect(()=>{
       console.log(form);
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(username === '' || password === ''){
            errorBox.current.innerHTML = "";
            if(username === ''){
                form.current[0].style = '2px solid red';
                errorBox.current.innerHTML += "<li>Preencha ao campo de Usuário corretamente</li>";
            }
            else{
                form.current[0].style = '2px solid white';
                errorBox.current.innerHTML = "";
            }
            if(password === ''){
                form.current[1].style = '2px solid red';
                errorBox.current.innerHTML += "<li>Preencha ao campo de Senha corretamente</li>";
            }
            else{
                form.current[1].style = '2px solid red';
                errorBox.current.innerHTML = "";
            }
        }
        else{
            try{
                form.current[2].innerHTML = 'Entrando...';
                const res = await api.post('/login', { username, password })
                setCookies('login', res.data.token);
            }
            catch(err){
                form.current[2].innerHTML = 'Entrar';
                errorBox.current.innerHTML = "<li>" + err.response.data.err + "</li>";
            }   
        }
        
    }
    
    return(
        <div className="centralizer">
            <div className="login">
                <h3>Login</h3>
                <form ref={form}>
                    <Input id='inp-username' className="inp-sign" placeholder="Usuário" type="text" onChange={e=>setUsername(e.target.value)}/>
                    <Input id='inp-password' className="inp-sign" placeholder="Senha" type="password" onChange={e=>setPassword(e.target.value)}/>
                    <Button className="btn-sign" onClick={handleSubmit}>Entrar</Button>
                </form>
                <ul ref={errorBox} className="erro"></ul>
            </div>
        </div>
    );
}

export default Login;