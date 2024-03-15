import {useRef } from "react";
import "./Register.css"
import axios from "axios";
import { Link } from "react-router-dom";

function LoginPage() {

    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordconfirmRef = useRef<HTMLInputElement>(null);


    return ( 
        <>
        <div className="body">
            <h1 className="textlogo" style={{color: '#74BC38', marginBottom: '20px'}}>Cactusmash</h1>
            <div className="boxLog">
                <div className="boxL">
                <p style={{display: 'flex', justifyContent: 'center',marginTop: '20px'}}>Create a new account</p>
                <div className="input-box">
                    <input type="text" placeholder="Username" ref={usernameRef} />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Email" ref={emailRef} />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" ref={passwordRef} />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password Comfirm" ref={passwordconfirmRef} />
                </div>
                <div className="button-box">
                    <button style={{backgroundColor:'#74BC38'}} onClick={() => getu(usernameRef.current!.value, passwordRef.current!.value)} type="submit">Login</button>  
                </div>

                <div style={{display: 'flex', justifyContent: 'center'}}>
                <hr style={{margin: '20px 0 0px', width: '310px'}} />
                </div>

                <Link to="/login" style={{textDecoration: 'none' }}>
                    <div className="button-box">
                        <p style={{marginTop: '20px', color: '#C28E48', marginBottom: '20px'}}>Already have a accoount</p>
                    </div>
                </Link>
                </div>
            </div>
        </div>
        </>
     );

     async function getu(umae: string, psw: string) {
        console.log(umae+psw);
        
        const url = `http://localhost:3000/user/${umae}/${psw}`;
        const response = await axios.get(url);
        console.log(response.data);
        return response.data;
      }
}

export default LoginPage;