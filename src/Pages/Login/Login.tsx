import {useRef } from "react";
import "./Login.css"
import axios from "axios";
import { Link } from "react-router-dom";

function LoginPage() {

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);




    return ( 
        <>
        <div className="body">
            <h1 className="textlogo" style={{color: '#74BC38', marginBottom: '20px', }}>Cactusmash</h1>
            <div className="boxLog">
                <div className="boxL">
                <p style={{display: 'flex', justifyContent: 'center',marginTop: '20px'}}>Log in to Cactusmash</p>
                <div className="input-box">
                    <input type="text" placeholder="Username" ref={usernameRef} />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" ref={passwordRef} />
                </div>
                <div className="button-box">
                    <button onClick={() => getu(usernameRef.current!.value, passwordRef.current!.value)} type="submit">Login</button>  
                </div>

                <div style={{display: 'flex', justifyContent: 'center'}}>
                <hr style={{margin: '20px 0 0px', width: '310px'}} />
                </div>

                <Link to="/register" style={{textDecoration: 'none' }}>
                    <div className="button-box">
                        <button className="buttonC" type="submit" >Create new account</button>  
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