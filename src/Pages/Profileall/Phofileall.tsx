import { useParams } from "react-router-dom";
import "./Profileall.css"

import Navbar from "../../Components/Navbar/Navbar"

import { CactusServices } from "../../services/CactusServices";
import { useEffect, useState } from "react";
import { UserallphotoGetResponse } from "../../models/UserallphotoGetResponse";
import { UserprofileGetRasponse } from "../../models/UserprofileGetResponse";


function ProfileallPage() {
    const params = useParams();
    const uId = params.uId;


    // const avatar = localStorage.getItem("avatar");

    const cactusservice = new CactusServices();

    const [data, setData] = useState<UserallphotoGetResponse[]>([]);
    const [dataP, setDataP] = useState<UserprofileGetRasponse[]>([]);

    useEffect(() => {
        async function fetchData() {
            const res = await cactusservice.getUserPhoto(String(uId));
            setData(res);

            const resP = await cactusservice.getUserpro(String(uId));
            setDataP(resP);
        }
        fetchData();
    }, [uId]);

    return ( 
        <>
        <Navbar/>
        <div className="bo-phoU">
            
            <div className="boproU-center">

                <div className="proU-img">
                    <div className="pu1">
                    <img style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} src={dataP[0]?.avatar} alt="" />
                    </div>

                    <div className="pu2">
                        <h1 style={{fontWeight: "bold", color: "white"}}>{dataP[0]?.username}</h1>  
                    </div>
                </div>


                <div className="photoU-profile">
                {
                    data.map((item, index) => (
                    <div className="photoU" key={index}>
                        <div className="containerimgeU" >
                            <img className="imagephoU" src={item.filename} alt="" />
                        </div>  
                    </div>

                    ))
                }

                </div>

            </div>
        </div>
        </>
    );
}

export default ProfileallPage;
