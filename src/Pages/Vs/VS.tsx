import './Vs.css'
import vs from '../../assets/vs.png'
import Navbar from '../../Components/Navbar/Navbar';

import { useEffect, useState } from 'react';
import { CactusServices } from '../../services/CactusServices';
import { PhotoGetResponse } from '../../models/PhotoGetResponse';
import { Link } from 'react-router-dom';

import { UsersGetRasponse } from "../../models/UsersGetResponse";

function VsPage() {
    const cactusservice = new CactusServices();
    const role = localStorage.getItem("role");

    
    const [data, setData] = useState<PhotoGetResponse[]>([]);


    const [dataU, setDataU] = useState<UsersGetRasponse[]>([]);
    // console.log(dataU[]?.id == 3 );
    

    const [randomDataA, setRandomDataA] = useState<PhotoGetResponse | undefined>(undefined);
    const [randomDataB, setRandomDataB] = useState<PhotoGetResponse | undefined>(undefined);
    const kValue: number = 32;

    const currentDate = new Date();

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    useEffect(() => {
        async function fetchData() {
            const res = await cactusservice.getAllphoto();
            setData(res);
            const resU = await cactusservice.getallusers();
            setDataU(resU);
        }
        fetchData();
    }, []);


    useEffect(() => {
        if (data.length >= 2) {
            const randomIndexA = Math.floor(Math.random() * data.length);
            let randomIndexB;
            do {
                randomIndexB = Math.floor(Math.random() * data.length);
            } while (randomIndexA === randomIndexB);

            setRandomDataA(data[randomIndexA]);
            setRandomDataB(data[randomIndexB]);
        }
    }, [data]);

    function votePhoto(side: 'A' | 'B', A: number, B: number  ) {

        console.log(currentDay);
        console.log(currentMonth);
        console.log(currentYear);
        
        if (side === 'A') {
            console.log("A Winner");
            console.log("A => "+A);
            console.log("B => "+B);
            // A winer
            // A
            const expectedScoreA: number = calculateExpectedScore(A, B);
            const actualScoreA: number = 1; 
            const updatedRatingA: number = Math.floor(updateEloRating(A, expectedScoreA, actualScoreA, kValue));
            console.log("New Elo A = "+updatedRatingA);
            console.log("A Winner = "+ (updatedRatingA - A));
            
            // B
            const expectedScoreB: number = calculateExpectedScore(B, A); // คำนวณคะแนนคาดการณ์สำหรับผู้เล่น B
            const actualScoreB: number = 0; // ผู้เล่น B แพ้ (ในตัวอย่างนี้)
            const updatedRatingB: number = Math.floor(updateEloRating(B, expectedScoreB, actualScoreB, kValue)); // ปรับคะแนน ELO Rating สำหรับผู้เล่น B
            console.log("New Elo B = "+updatedRatingB);
            console.log("B Losser = " + (B-updatedRatingB));
            

            let newDataB: PhotoGetResponse | undefined;            
            do {
                newDataB = data[Math.floor(Math.random() * data.length)];
            } while (newDataB?.phoId === randomDataA?.phoId || newDataB?.phoId === randomDataB?.phoId);
            setRandomDataB(newDataB);
            

        } else if (side === 'B') {
            console.log("B Winner");
            console.log("A => "+A);
            console.log("B => "+B);

            // B winer
            // A
            const expectedScoreA: number = calculateExpectedScore(A, B);
            const actualScoreA: number = 0;
            const updatedRatingA: number = Math.floor(updateEloRating(A, expectedScoreA, actualScoreA, kValue)); 
            console.log("New Elo A = "+updatedRatingA);
            console.log("A Losser = "+ (A - updatedRatingA));

            // B
            const expectedScoreB: number = calculateExpectedScore(B, A); 
            const actualScoreB: number = 1; 
            const updatedRatingB: number = Math.floor(updateEloRating(B, expectedScoreB, actualScoreB, kValue)); // ปรับคะแนน ELO Rating สำหรับผู้เล่น B
            console.log("New Elo B = "+updatedRatingB);
            console.log("B Winner = " + (updatedRatingB - B))
            
            let newDataA: PhotoGetResponse | undefined;
            do {
                newDataA = data[Math.floor(Math.random() * data.length)];
            } while (newDataA?.phoId === randomDataB?.phoId || newDataA?.phoId === randomDataA?.phoId);
            setRandomDataA(newDataA);
        }
    }

    // Function to calculate expected score
    function calculateExpectedScore(ratingA: number, ratingB: number): number {
        return 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
    }

    // Function to update ELO rating after a match
    function updateEloRating(currentRating: number, expectedScore: number, actualScore: number, kValue: number): number {
        return currentRating + kValue * (actualScore - expectedScore);
    }

    return (
        <>
            <Navbar/>
            <div className='bo-vs'>
                <div style={{width: '1000px', height: "550px", display: "flex", justifyContent: "space-between"}}>
                    {/* A */}
                    <div className='vs-img'>
                        <div className='vs-user'>
                            <div className='vs-usernsme'>
                            {role !== null ? (
                                <Link  to={`/profile/${randomDataA?.userId}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center'}}>
                                    <img className="imguser" src={dataU.find(item => item.id === Number(randomDataA?.userId))?.avatar} alt="" />
                                    <p>{dataU.find(item => item.id === Number(randomDataA?.userId))?.username}</p>
                                </Link>
                            ) : (
                                <Link to={`/login`}>
                                    <div style={{display: "flex", alignItems: "center"}}>
                                        <img className="imguser" src={dataU.find(item => item.id === Number(randomDataA?.userId))?.avatar} alt="" />
                                        <p>{dataU.find(item => item.id === Number(randomDataA?.userId))?.username}</p>   
                                    </div>
                                </Link>
                            )}
                            </div>
                        </div>

                        <div className='cac-img' onClick={() => votePhoto('A', Number(randomDataA?.elo), Number(randomDataB?.elo))}>
                            <img src={randomDataA?.filename} alt="" />
                        </div>

                        <div className='score'>
                            <h1>{randomDataA?.elo}</h1>
                        </div>
                        <h1>{randomDataA?.rank}</h1>
                    </div>

                    <div style={{height: "100%", width: "150px", display: "flex", alignItems: "center"}}>
                        <div style={{width: "150px", height: "100px"}}>
                            <img style={{width: "100%"}} src={vs} alt="" />
                        </div>
                    </div>

                    {/* B */}
                    <div className='vs-img'>

                        <div className='vs-user'>
                            <div className='vs-usernsme'>
                            {role !== null ? (
                                <Link  to={`/profile/${randomDataB?.userId}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center'}}>
                                    <img src={dataU.find(item => item.id === Number(randomDataB?.userId))?.avatar} alt="" />
                                    <p>{dataU.find(item => item.id === Number(randomDataB?.userId))?.username}</p>
                                </Link>
                            ) : (
                                <Link to={`/login`}>
                                    <div style={{display: "flex", alignItems: "center"}}>
                                        <img className="imguser" src={dataU.find(item => item.id === Number(randomDataB?.userId))?.avatar} alt="" />
                                        <p>{dataU.find(item => item.id === Number(randomDataB?.userId))?.username}</p>
                                    </div>
                                </Link>
                            )}
                            </div>
                        </div>

                        <div className='cac-img' onClick={() => votePhoto('B', Number(randomDataA?.elo), Number(randomDataB?.elo))}>
                            <img src={randomDataB?.filename} alt="" />
                        </div>

                        <div className='score'>
                            <h1>{randomDataB?.elo}</h1>
                        </div>
                        <h1>{randomDataB?.rank}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VsPage;
