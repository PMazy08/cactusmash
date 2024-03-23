import imglogo from "../../assets/cactus-line.png"
import imgacc from "../../assets/account-circle-fill.png"
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css"
import { useState } from "react";

function Appbar() {
    const navigate = useNavigate();
    const role = localStorage.getItem("role");
    const avatar = localStorage.getItem("avatar");
    const [isAccVisible, setIsAccVisible] = useState(false);


    function logout() {
        if (confirm('Do you want to log out?')) {
            localStorage.clear();
            navigate("/");
            setIsAccVisible(!isAccVisible);
          }
    }


    const handlePoacClick = () => {
        setIsAccVisible(!isAccVisible);
    };

    return ( 
        <>
        <div className="navbar">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0 20px' }}>
                
                <div style={{display: 'flex', alignItems: 'center',width: '300px', height: '56px', cursor: "default"}}>
                    <img style={{width: '30px'}} src={imglogo} alt="" />
                    <h2 className="textlogo-nav" style={{ color: 'white', marginLeft: '5px'}}>Cactusmash</h2>
                </div>
                <div className="select-p">
                    <div style={{width: '80px', display: 'flex', justifyContent: 'center',marginRight: "5px"}}>
                        <NavLink className="select-nav" to="/vs"><h3>VS</h3></NavLink>
                    </div>
                    <div style={{width: '80px', display: 'flex', justifyContent: 'center', marginLeft: "5px" }}>
                        <NavLink className="select-nav" to={"/top-10"}><h3>Top 10</h3></NavLink>
                    </div>

                    {role === "admin" && (
                        <div style={{width: '80px', display: 'flex', justifyContent: 'center', marginLeft: "10px"}}>
                            <NavLink className="select-nav" to={"/alluser"}><h3>All Users</h3></NavLink>
                        </div>   
                    )}


                </div>
                <div className="profile-bar" style={{display: 'flex', alignItems: 'center',justifyContent: 'end',width: '300px' }}>
                    {role ? (
                        <img className="poac" style={{cursor: "pointer", width: '40px', height: "40px", display: 'flex', borderRadius: "50%", objectFit: "cover" }} src={avatar|| ''} alt="avatar"onClick={handlePoacClick}/>
                    ) : (
                        <a href="/login">
                            <img style={{ width: '40px', display: 'flex' }} src={imgacc} alt="" />
                        </a>
                    )} 
                </div>
                {isAccVisible && (
                    <div className="acc">
                        <div className="ac1">
                            <Link to={"/profile"}>
                                <p>Account</p>
                            </Link>
                        </div>
                        <hr style={{width: "100px"}} />
                        <div className="ac2" onClick={() => logout()}>
                            <p>Logout</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </>
     );
}

export default Appbar;