import {useRef } from "react";
import "./Register.css"
import { useNavigate } from "react-router-dom";
import { CactusServices } from "../../services/CactusServices";

function LoginPage() {

    const navigate = useNavigate();
    const cactusservise = new CactusServices();

    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordconfirmRef = useRef<HTMLInputElement>(null);


    async function register(username: string, email: string, password: string, passwordcon: string) {
        const emailRegex = /@gmail\.com$/; // รูปแบบที่ต้องการให้มี @gmail.com
        if (!emailRegex.test(email)) {
            alert("Invalid Email");
            return;
        }
       
        if(password === passwordcon){

            const res = await cactusservise.register(username, email, password);
            if (res !== null && res !== undefined) {
                navigate('/login')
            }
            
        }else{
            alert("Invalid Password")
        }
    }



    return ( 
        <>
        <div className="body">
            <h1 className="textlogo" style={{color: '#74BC38', marginBottom: '20px', cursor : "pointer"}}
            onClick={() => navigate('/')}>
                Cactusmash
            </h1>
            <div className="boxLog">
                <div className="boxL">
                <p style={{display: 'flex', justifyContent: 'center',marginTop: '20px', fontWeight: "bold"}}>Create a new account</p>
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
                    <input type="password" placeholder="Password Comfirm" ref={passwordconfirmRef}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                register(usernameRef.current!.value, emailRef.current!.value, passwordRef.current!.value, passwordconfirmRef.current!.value); 
                            }
                        }} 
                    />
                </div>
                <div className="button-box">
                    <button style={{backgroundColor:'#74BC38', fontWeight: "bold"}} onClick={() => register(usernameRef.current!.value, emailRef.current!.value, passwordRef.current!.value, passwordconfirmRef.current!.value)} type="submit">Create Account</button>  
                </div>

                <div style={{display: 'flex', justifyContent: 'center'}}>
                <hr style={{margin: '20px 0 0px', width: '310px'}} />
                </div>
                <div className="button-box" onClick={() => navigate('/login')}>
                    <p  style={{marginTop: '20px', color: '#C28E48', marginBottom: '20px', cursor: "pointer", fontWeight: "bold"}}>Already have a accoount</p>
                </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default LoginPage;