import "./Topten.css"
import Navbar from "../../Components/Navbar/Navbar";
import user from "../../assets/account-circle-fill.png"

function ToptenPage() {
    const item = [
        {
            name: "1"
        },
        {
            name: "2"
        },
        {
            name: "3"
        },
        {
            name: "4"
        },
        {
            name: "5"
        },
        {
            name: "6"
        },
        {
            name: "7"
        },
        {
            name: "8"
        },
        {
            name: "9"
        },
        {
            name: "10"
        },
    ]
    return ( 
        <>
        <Navbar/>
            <div className="bo-top">
                <div className="botop-center">


                {item.map((item, index) => (
                    <div className='top-img' key={index}>
                        <div className='rank'>
                            <h1># {item.name}</h1>
                        </div>

                        <div className='topcac-img'>
                            <img src="https://media.houseandgarden.co.uk/photos/6533f30248dabdf8da5de601/1:1/pass/undefined" alt="" />
                        </div>

                        <div className='vs-user'>
                            <img src={user} alt="" />
                            <p>PMazy</p>
                        </div>

                    </div>
                ))}

                </div>
            </div>
        </>
     );
}

export default ToptenPage;