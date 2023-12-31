import React, { useEffect, useState } from 'react'
import Header from './header'
import { useParams } from 'react-router-dom'
import './CSS/leaderboard.css'
const Leaderboard = () => {
    const [leaderboardData,setLeaderboardData] = useState([]);
    let {contestcode} = useParams();
    function rankcolor(){
        const gold = document.getElementsByClassName('rank')[0]
        const silver = document.getElementsByClassName('rank')[1]
        const bronze = document.getElementsByClassName('rank')[2]
        if (gold) gold.classList.add("gold-style");
        if(silver) silver.classList.add("silver-style");
        if(bronze) bronze.classList.add("bronze-style");
    }
    useEffect(() => {
        rankcolor();
        fetch("https://samparc.onrender.com/responses")
        .then(response => response.json())
        .then(data =>setLeaderboardData(rankingParticipants(data)));
    }, [leaderboardData]);
    function convertTimeToSeconds(timeString) {
        let timeInSeconds = 0;
        const timeParts = timeString.split(" ");
      
        for (const part of timeParts) {
          if (part.endsWith("h")) {
            timeInSeconds += parseInt(part) * 3600; 
          } else if (part.endsWith("m")) {
            timeInSeconds += parseInt(part) * 60; 
          } else if (part.endsWith("s")) {
            timeInSeconds += parseInt(part);
          }
        }
      
        return timeInSeconds;
      }
    function rankingParticipants(data){
        const upadtedData = [];
        for(let i =0;i<data.length;i++){
          if(data[i].details.personal.contestCode === contestcode){
            const scoredata = {
              participantName:data[i].details.personal.name,
              timetaken:data[i].details.personal.timetaken,
              score:parseInt(data[i].score.scores.score),
              totalQuestions:data[i].score.scores.numberOfQuestions
          }
          upadtedData.push(scoredata)
          }
        }
        upadtedData.sort((a, b) => {
            if (b.score === a.score) {
              return convertTimeToSeconds(a.timetaken) - convertTimeToSeconds(b.timetaken);
            }
            return b.score - a.score;
          });            
        return upadtedData
    }
  return (
    <div className='leaderboard-div'>
      <Header/>
      <section className='leaderbaord'>
        <p className='leaderboard-heading'>Leaderboard - JEE Advanced</p>
        <table className='leaderboard-table'>
        <tr className='columns-name'>
            <th className='ranking'>Ranking</th>
            <th className='participant'>Participant Name</th>
            <th className='leaderboard-time'>Time</th>
            <th className='score'>Score</th>
        </tr>
        {
            leaderboardData.map(data=>{
                return(
                    <tr className='student-ranks'>
                        <td><p className='rank'>{leaderboardData.indexOf(data)+1}</p></td>
                        <td className='Participant-Name'>{data.participantName}</td>
                        <td>{data.timetaken}</td>
                        <td className='score'>{data.score+'/'+data.totalQuestions}</td>
                    </tr>
                )
            })
        }
        </table>
      </section>
    </div>
  )
}

export default Leaderboard
