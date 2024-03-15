import "./Profile.css"
import Navbar from "../../Components/Navbar/Navbar";
import add from "../../assets/add-circle-fill.png"
import ar_up from "../../assets/arrow-up-circle-fill.png"
// import ar_dw from "../../assets/arrow-down-circle-fill.png"

function ProfilePage() {
    const itemd = [
        {
            img: "https://media.newyorker.com/photos/656f99f019bfb6c2c8a8c521/4:3/w_2748,h_2061,c_limit/Galchen_Illegal_Cactus_Trade_v2.jpg",
            rank: "1"
        },        {
            img: "https://inwfile.com/s-cm/qfcfos.jpg",
            rank: "2"
        },        {
            img: "https://s359.kapook.com/pagebuilder/bda4b905-ef50-4291-b046-5c83e32b5872.jpg",
            rank: "3"

        },        {
            img: "https://upload.wikimedia.org/wikipedia/commons/5/55/Ferocactus_pilosus1.jpg",
            rank: "4"
        },
        // {
        //     img: "https://upload.wikimedia.org/wikipedia/commons/5/55/Ferocactus_pilosus1.jpg",
        //     rank: "5"
        // },
    ];
    return ( 
        <>
        <Navbar/>
        <div className="bo-pro">
            
            <div className="bopro-center">
                <div className="pro-img">
                    <div className="p1">
                        <img style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?cs=srgb&dl=pexels-evg-kowalievska-1170986.jpg&fm=jpg" alt="" />
                    </div>

                    <div className="p2">
                      <h1 style={{fontWeight: "bold", margin: "0 0 30px 20px",color: "white" }}>PMazy</h1>  
                    </div>

                    <div className="p3">
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center",height: "100%", justifyContent: "center"}}>
                           <button style={{cursor: "pointer", backgroundColor: "#74BC38", color: "white", width: "100px", height: "30px", borderRadius: "5px", border: "none"}}>Edit Profile</button> 
                           <p style={{color: "red", marginTop: "10px", cursor: "pointer"}}>Change Passeord</p>
                        </div>
                    </div>
                </div>


                <div className="photo-profile">
                {
                    itemd.map((item) => (
                    <div className="photo">
                        {/* img */}
                        <div style={{borderRadius: "5px", display: "flex", width: "250px", height: "250px"}}>
                            <img style={{borderRadius: "5px", width: "100%", height: "100%", objectFit: "cover"}} src={item.img} alt="" />
                        </div>  

                        {/* data */}
                        <div style={{color: "white",margin: "10px",borderRadius: "5px",backgroundColor: "rgba(31, 31, 31, 0.7)", width: "150px", height: "250px", display: "flex", flexDirection: "column"}}>
                            <div className="i1" style={{height: "50%", display: "flex", alignItems: "center", marginLeft: "20px"}}>
                            <p>Ranking</p>
                                <h1 style={{marginLeft: "10px"}}>#{item.rank}</h1>
                            </div>

                            <div className="i2" style={{height: "50%",display: "flex", alignItems: "center", marginLeft: "20px"}}>
                                <div style={{display: "flex", flexDirection: "column"}}>
                                <p>Yesterday</p>
                                <div style={{display: "flex", alignItems: "center"}}>
                                    <p style={{marginRight: "5px"}}>#6 (+2)</p> 
                                    <img style={{width: "30px"}} src={ar_up} alt="" />
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
                {
                    itemd.length < 5 && (
                    <div className="add-img" >
                        <img style={{cursor: "pointer",width: "100%"}} src={add} alt="" />
                    </div>
                    )
                }

                </div>



            </div>
        </div>
        </>
     );
}

export default ProfilePage;
