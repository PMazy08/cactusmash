import imglogo from "../../assets/cactus-line.png"
import imgacc from "../../assets/account-circle-fill.png"
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

function Appbar() {
    const user: number = 1;
    
    return ( 
        <>
        <div className="navbar">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0 20px' }}>
                
                <div style={{display: 'flex', alignItems: 'center',width: '300px', height: '56px', cursor: "default"}}>
                    <img style={{width: '30px'}} src={imglogo} alt="" />
                    <h2 className="textlogo-nav" style={{ color: 'white', marginLeft: '5px'}}>Cactusmash</h2>
                </div>
                <div className="select-p">
                    <div style={{ width: '60px', display: 'flex', justifyContent: 'center',marginRight: "5px"}}>
                        <NavLink className="select-nav" to="/vs"><h3>VS</h3></NavLink>
                    </div>
                    <div style={{width: '60px', display: 'flex', justifyContent: 'center', marginLeft: "5px" }}>
                        <NavLink className="select-nav" to={"/top-10"}><h3>Top 10</h3></NavLink>
                    </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center',justifyContent: 'end',width: '300px' }}>
                        {user === 1 ? (
                            <Link to="/profile">
                                <img style={{ width: '40px', display: 'flex' }} src={imgacc} alt="" />
                            </Link>
                        ) : (
                            <a href="/login" >
                                <img style={{ width: '40px', display: 'flex' }} src={imgacc} alt="" />
                            </a>
                            
                        )}   
                    {/* <div style={{width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50px'}}></div> */}
                </div>
            </div>
        </div>
        </>
     );
}

export default Appbar;