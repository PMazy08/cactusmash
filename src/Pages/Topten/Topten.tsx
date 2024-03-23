import "./Topten.css"
import Navbar from "../../Components/Navbar/Navbar";
// import user from "../../assets/account-circle-fill.png"
import { useEffect, useState } from "react";
import { CactusServices } from "../../services/CactusServices";
import { PhototoptenGetResponse } from "../../models/PhototoptenGetResponse";
import { Link } from "react-router-dom";



function ToptenPage() {
    const role = localStorage.getItem("role");
    const cactusservice = new CactusServices();
    const [data, setData] = useState<PhototoptenGetResponse[]>([]);


    useEffect(() => {
        async function fetchData() {
            const res = await cactusservice.getToptenphoto();
            setData(res);
            // console.log(res); 
        }
        fetchData();
    }, []);

    
    return ( 
        <>
        <Navbar/>
            <div className="bo-top">
                <div className="botop-center">
                    {data.map((item, index) => (
                        <div className='top-img' key={index}>
                            <div className='rank'>
                                <h1 style={{fontWeight: "bold"}}># {index+1}</h1>
                            </div>

                            <div className='topcac-img'>
                                <img src={item.filename} alt="" />
                            </div>

                            <div className='top-user'>
                                <div className='top-usernsme'>
                                    <div style={{marginLeft: "5px",display: "flex", alignItems: "center", width: "60%"}}>
                                        {role !== null ? (
                                            <Link  to={`/profile/${item?.userId}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center'}}>
                                                <img src={item?.avatar} alt="" />
                                                <p>{item?.username}</p>
                                            </Link>
                                        ) : (
                                            <Link to={`/login`}>
                                                <div style={{display: "flex", alignItems: "center"}}>
                                                    <img src={item?.avatar} alt="" />
                                                    <p>{item?.username}</p>
                                                </div>
                                            </Link>
                                        )}


                                    </div>
                                    <div style={{marginRight: "25px",display: "flex", alignItems: "center", width: "40%", justifyContent: "end"}}>
                                        <p>Score: {item.elo}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
     );
}

export default ToptenPage;