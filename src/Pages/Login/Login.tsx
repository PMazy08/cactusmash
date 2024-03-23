import {useRef} from "react";
import "./Login.css"
import { useNavigate} from "react-router-dom";
import { CactusServices } from "../../services/CactusServices";
function LoginPage() {
    const navigate = useNavigate();
    const cactusservise = new CactusServices();

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    return ( 
        <>
        <div className="body">
            <h1 className="textlogo" style={{color: '#74BC38', marginBottom: '20px',cursor : "pointer" }}
            onClick={() => navigate('/')}>
                Cactusmash
            </h1>
            <div className="boxLog">
                <div className="boxL">
                <p style={{display: 'flex', justifyContent: 'center',marginTop: '20px', fontWeight: "bold"}}>Log in to Cactusmash</p>
                <div className="input-box">
                    <input type="email" placeholder="Email" ref={usernameRef} />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" ref={passwordRef} 
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                login(usernameRef.current!.value, passwordRef.current!.value); 
                            }
                        }}
                    />
                </div>
                <div className="button-box">
                    <button onClick={() => login(usernameRef.current!.value, passwordRef.current!.value)} type="submit">Login</button>  
                </div>

                <div style={{display: 'flex', justifyContent: 'center'}}>
                <hr style={{margin: '20px 0 0px', width: '310px'}} />
                </div>

                <div className="button-box">
                    <button onClick={() => navigate('/register')} className="buttonC" type="submit" >Create new account</button>  
                </div>
                </div>
            </div>
        </div>
        </>
     );

     async function login(email: string, password: string) {
        const res = await cactusservise.getUser(email, password)
        if (res) {
            navigate("/vs");
        } 
      }
}

export default LoginPage;