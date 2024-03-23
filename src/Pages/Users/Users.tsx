import "./Users.css"
import Navbar from "../../Components/Navbar/Navbar"

import { CactusServices } from "../../services/CactusServices";
import { useEffect, useState } from "react";
import { UsersGetRasponse } from "../../models/UsersGetResponse";



function UsersPage() {
    

    const role = localStorage.getItem("role");

    const cactusservice = new CactusServices();

    const [data, setData] = useState<UsersGetRasponse[]>([]);

    useEffect(() => {
        async function fetchAlluser() {
            if (role === "admin") {
                const res = await cactusservice.getallusers();
                setData(res);
            }
        }
        fetchAlluser();
    }, [role]);

    return ( 
        <>
        <Navbar/>
        <div className="bo-user">
            <div className="bouser-center">
            {data.map((item, index) => (
                <div className="user-img"key={index}>
                    <div className="u1">
                        <img style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} src={item.avatar} alt="" />
                    </div>
                    <div className="u2">
                        <h1 style={{fontWeight: "bold",color: "white"}}>{item.username}</h1>  
                    </div>
                </div>
                ))}
                <div style={{height: "100px"}}></div>
            </div>
        </div>
        </>
     );
}

export default UsersPage;