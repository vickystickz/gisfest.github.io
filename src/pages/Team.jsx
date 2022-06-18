import React from 'react';
import '../styles/Team.css';
import { teamData } from '../utils/data';
import TeamCard from '../components/TeamCard';


const Team = () => {
  return (
    <div className="main-content">
        <div className='teamheader-container flexbox'>
          <h2>Organizers</h2>
        </div>
        <div className='page-content'>
          {teamData.map((Team,index) => {
                return (
                    <div key={index} className="team-content">
                      <div className="team-name flexbox">
                        <h1 className="team-title">{Team.team}</h1>
                        <img src={Team.emoji} alt="emoji" className="team-emoji"/>
                       </div>
                       <div className="team-member-card grid-container">
                        {Team.members.map((member,id)=> {
                          return (
                               <TeamCard key={id} className="Teamcard"
                               name={member.name}
                               img ={member.img}
                               twitter_link ={member.twitter}
                               linkedin_link ={member.linkedin}
                               />  
                          )
                        })}
                       </div>
                    </div>
                )
            })}
        </div>
        <div>
        </div>
    </div>
  )
}

export default Team
