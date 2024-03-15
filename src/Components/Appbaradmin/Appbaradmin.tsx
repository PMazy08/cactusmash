import imglogo from "../../assets/cactus-line.png"
import time from "../../assets/time-line.png"
import logout from "../../assets/logout-circle-r-line.png"

import { Link } from "react-router-dom";

function Appbaradmin() {
    return ( 
        <>
        <div style={{ backgroundColor: 'black', position: 'static', height: '56px', display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0 20px' }}>
                
                <div style={{display: 'flex', alignItems: 'center',width: '300px', height: '56px'}}>
                    <img style={{width: '30px'}} src={imglogo} alt="" />
                    <h2 className="textlogo" style={{ color: 'white', marginLeft: '5px'}}>Cactusmash</h2>
                </div>
                <div style={{display: 'flex', alignItems: 'center',justifyContent: 'end',width: '300px' }}>
                    <div style={{display: 'flex', marginRight: '10px'}}>
                        <img style={{width: '30px'}} src={time} alt="" />
                    </div>
                    <Link to="/register">
                        <img style={{width: '30px', display: 'flex'}} src={logout} alt="" />
                    </Link>       
                </div>
            </div>
        </div>
        </>
     );
}

export default Appbaradmin;