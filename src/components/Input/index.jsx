import './styles.css'
import usernameIcon from  '../../assets/icons/username.png';
import passwordIcon from  '../../assets/icons/password.png';

const Input = (props) => {
    return(
        
        <div className="inp-container">
            {
                (()=>{
                    if(props.id === 'inp-username'){
                       return <img className="inp-icon mesc" alt="icone de login" src={usernameIcon}/> 
                    }
                    else if(props.id === 'inp-password'){
                        return <img className="inp-icon" alt="icone de login" src={passwordIcon}/> 
                    }
                })()
            }
            <input {...props} />
        </div>
        
    );
}

export default Input;