import './Vs.css'
import vs from '../../assets/vs.png'
import Navbar from '../../Components/Navbar/Navbar';

import user from "../../assets/account-circle-fill.png"

function VsPage() {
    return ( 
        <>
        <Navbar/>
        <div className='bo-vs'>
            <div style={{width: '1000px', height: "550px", display: "flex", justifyContent: "space-between"}}>
                
                <div className='vs-img'>

                    <div className='vs-user'>
                        <img src={user} alt="" />
                        <p>Coconut</p>
                    </div>

                    <div className='cac-img'>
                        <img src="https://media.houseandgarden.co.uk/photos/6533f30248dabdf8da5de601/1:1/pass/undefined" alt="" />
                    </div>

                    <div className='score'>
                        <h1>1500</h1>
                    </div>

                </div>

                <div style={{height: "100%", width: "150px", display: "flex", alignItems: "center"}}>
                    <div style={{width: "150px", height: "100px"}}>
                        <img style={{width: "100%"}} src={vs} alt="" />
                    </div>
                </div>

                <div className='vs-img'>

                    <div className='vs-user'>
                        <img src={user} alt="" />
                        <p>PMazy</p>
                    </div>

                    <div className='cac-img'>
                        <img src="https://hips.hearstapps.com/hmg-prod/images/thimble-cactus-royalty-free-image-1695063544.jpg" alt="" />
                    </div>

                    <div className='score'>
                        <h1>1500</h1>
                    </div>

                </div>
            </div>
        </div>
        </>
    
     );
}

export default VsPage;