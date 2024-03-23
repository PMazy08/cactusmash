import "./Profile.css"
import Navbar from "../../Components/Navbar/Navbar"
import add from "../../assets/add-circle-fill.png"
// import ar_up from "../../assets/arrow-up-circle-fill.png"
import ar_dw from "../../assets/arrow-down-circle-fill.png"
import edit from "../../assets/image-edit-fill.png"
import bin from "../../assets/delete-bin-2-fill.png";

import { useNavigate } from "react-router-dom";
import { CactusServices } from "../../services/CactusServices";
import { useEffect, useState } from "react";
import { UserphotoGetResponse } from "../../models/UserphotoGetResponse";
// import ar_dw from "../../assets/arrow-down-circle-fill.png"



function ProfilePage() {
    const navigate = useNavigate();
    const avatar = localStorage.getItem("avatar");
    const username = localStorage.getItem("username");
    const u_id = localStorage.getItem("userId");
    const role = localStorage.getItem("role");

    const cactusservice = new CactusServices();

    const [data, setData] = useState<UserphotoGetResponse[]>([]);

    function logout() {
        if (confirm('Do you want to log out?')) {
            localStorage.clear();
            navigate("/");
    
          }
    }

    useEffect(() => {
        async function fetchData() {
            if (u_id !== null) {
                const res = await cactusservice.getPhoto_u(u_id);
                setData(res);
                // console.log(res);
            }
        }
        fetchData();
    }, []);

    return ( 
        <>
        <Navbar/>
        <div className="bo-pro">
            
            <div className="bopro-center">
                <div className="pro-img">
                    <div className="p1">
                        {avatar !== null && <img style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} src={avatar} alt="" />}
                    </div>

                    <div className="p2">
                        <h1 style={{fontWeight: "bold", marginBottom: "20px",color: "white", margin: "30px 0 30px 15px"}}>{username}</h1>  
                        <div style={{display: "flex", width: "200px",flexDirection: "column", alignItems: "center"}}>
                            <button style={{cursor: "pointer", backgroundColor: "#74BC38", color: "white", width: "100px", height: "30px", borderRadius: "5px", border: "none"}}>Edit Profile</button> 
                            <p style={{color: "red", marginTop: "10px", cursor: "pointer"}}>Change Passeord</p>
                        </div>
                    </div>

                    <div className="p3">
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center",height: "100%", justifyContent: "center"}}>
                           <button onClick={logout} style={{cursor: "pointer", backgroundColor: "red", color: "white", width: "70px", height: "30px", borderRadius: "5px", border: "none"}}>Log Out</button> 
                        </div>
                    </div>
                </div>


                <div className="photo-profile">
                {
                    data.map((item, index) => (
                    <div className="photo" key={index}>
                        {/* img */}

                        <div className="containerimge" >
                            <img className="imagepho" src={item.filename} alt="" />
                            <div className="middle">
                                <div className="button">
                                    <img src={edit} alt="" />
                                    <img src={bin} alt="" />
                                </div>
                            </div>
                        </div>  

                        {/* data */}
                        <div style={{color: "white",margin: "10px",borderRadius: "5px",backgroundColor: "rgba(31, 31, 31, 0.7)", width: "150px", height: "250px", display: "flex", flexDirection: "column"}}>
                            <div className="i1" style={{height: "50%", display: "flex", alignItems: "center", marginLeft: "20px"}}>
                            <p>Ranking</p>
                                <h1 style={{marginLeft: "10px"}}>#{item.id}</h1>
                            </div>

                            <div className="i2" style={{height: "50%",display: "flex", alignItems: "center", marginLeft: "20px"}}>
                                <div style={{display: "flex", flexDirection: "column"}}>
                                <p>Yesterday</p>
                                <div style={{display: "flex", alignItems: "center"}}>
                                    <p style={{marginRight: "5px"}}>#6 (+2)</p> 
                                    <img style={{width: "30px"}} src={ar_dw} alt="" />
                                </div>
                                </div>
                            </div>
                        </div>

                        {/* graph */}
                        <div style={{borderRadius: "5px",backgroundColor: "rgba(31, 31, 31, 0.7)", width: "400px", height: "250px", display: "flex",}}>
                            graph
                        </div>

                    </div>

                    ))
                }
                {role === "user" && data.length < 5 && (
                    <div className="add-img">
                        <img style={{ cursor: "pointer", width: "100%" }} src={add} alt="" />
                    </div>
                )}

                </div>



            </div>
        </div>
        </>
     );
}

export default ProfilePage;
