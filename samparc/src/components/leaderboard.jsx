import React, { useEffect } from 'react'
import Header from './header'
import './CSS/leaderboard.css'
const Leaderboard = () => {
    function rankcolor(){
        const gold = document.getElementsByClassName('rank')[0]
        const silver = document.getElementsByClassName('rank')[1]
        const bronze = document.getElementsByClassName('rank')[2]
        if (gold) gold.classList.add("gold-style");
        if(silver) silver.classList.add("silver-style");
        if(bronze) bronze.classList.add("bronze-style");
        
    }
    useEffect(()=>{
        rankcolor();
    },[])
    
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
        <tr>
            <td><p className='rank'>1</p></td>
            <td className='Participant-Name'>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td className='score'>Germany</td>
        </tr>
        <tr>
            <td><p className='rank'>2</p></td>
            <td className='Participant-Name'>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td className='score'>Mexico</td>
        </tr>
        <tr>
            <td><p className='rank'>3</p></td>
            <td className='Participant-Name'>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td className='score'>Mexico</td>
        </tr>
        <tr>
            <td><p className='rank'>4</p></td>
            <td className='Participant-Name'>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td className='score'>Mexico</td>
        </tr>
        <tr>
            <td><p className='rank'>5</p></td>
            <td className='Participant-Name'>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td className='score'>Mexico</td>
        </tr>
        </table>
      </section>
    </div>
  )
}

export default Leaderboard
