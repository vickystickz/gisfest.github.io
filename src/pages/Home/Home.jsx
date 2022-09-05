import React, {useEffect } from "react";
import EmailSubscription from "../../components/EmailSubscription.jsx/EmailSubscription";
import './home.css';
import AOS from "aos";
import "aos/dist/aos.css";
import SEO from '../SEO'
import {Link} from 'react-router-dom';

import '../Schedule/Schedule.css';
import { agendaData,teamData,talkTypes,workshopTypes} from '../../utils/data';
import TeamCard from '../../components/TeamCard/TeamCard';
import CountDown from "../../components/CountDown/CountDown";


const HomePage = () =>{

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


    return(
            <div className="home-container">
            <SEO title={'GIS Festival 2022'} url={'https://gisfest.org'}/>
                <div className="hero" id="top">
                    <div className="hero-content">
                        <div>
                            <img src="/assets/logo_colored.png" alt="Background"></img>
                        </div>
                        <div className="hero-info">
                            <h2>11 - 12th | November, 2022.</h2>
                            <h2>Hybrid</h2>
                            <CountDown/>
                        </div>
                        <div className="cta-button">
                            <Link to="/call-for-speakers"><button type="submit">Submit An Abstract</button></Link>
                            <button><a href="https://forms.gle/8i92Wr8wcDjRm7Zg9" rel="noreferrer" target='_blank'>Register Now!</a></button>
                        </div>
                        
                    </div>
                    
                </div>

                <main>
                    <aside>
                        <h1>LEARN.</h1>
                        <h1>NETWORK.</h1>
                        <h1>Discover.</h1>
                    </aside>
                    <aside className="main-about"> 
                        <p>GISfest is a conference bringing together geospatial professionals and enthusiasts in Africa and beyond to discuss geospatial technologies and its applications in numerous industries. This event is primed to put a spotlight on geospatial technology with respect to modern tools and innovation.
                        This 2 days event will feature workshops, presentations, panel discussions, hackathons and will provide a good way to connect with community members from all over Africa. If you are a Geospatial enthusiasts, students, engineer, analysts, technician, developer, manager or you use geospatial data and/or technology then GISfest is for YOU!</p>
                    </aside>
                </main>
                
                <EmailSubscription />

                <div className="sponsors">
                    <h1>Sponsors</h1>
                    <p>Coming Soon!</p>
                    <div className="sponsor-logo">
                        Your Logo here
                    </div>
                    <h1>Call for Sponsorship</h1>
                    <p>If your organization is interested in sponsoring the GISfest event, kindly go through our sponsorship deck.</p>
                    <p>Please click <a href="https://drive.google.com/file/d/1VG_UmUuGMQV0opTafsMTKSBP_2QJ6ai3/view?usp=sharing" rel="noreferrer" target='_blank' style={{textDecoration:'underline'}}>here</a> to download our sponsorship deck.</p>
                </div>

                <h1 className="section-title">Agenda</h1>
                <div className='page-content schedule-container '>
                               
                    <div className='agenda-content'>
                        {agendaData.map((agendaItem, index) => {
                        return (
                            <div key={index} className="agenda-day-content">
                            <div className='date-container'>{agendaItem.day}</div>
                            {agendaItem.timeContent.map((agendaSchedule,id) => {
                                return (
                                <div className='agenda-schedule-container' key={id}>
                                    <div className='agenda-schedule-content'>
                                    <h3>{agendaSchedule.title}</h3>
                                    <p className='session-content'>Focus: {agendaSchedule.sessionContent}</p>
                                    </div>
                                </div>
                                )
                            })}
                            
                            </div>
                        )
                        })}

                    </div>
                </div>

                <h1 className="section-title">Call for speakers</h1>
                <div className='page-content grid-container column-2'>
                <div className='paper-info'>
                  <div className='paper-requirements'>
                    <h1>Submit an Abstract</h1>
                    <p>GISfest is a conference bringing together geospatial professionals and enthusiasts in Africa and beyond to discuss geospatial technologies and it applications in numerous industries. This event is primed to put a spotlight on geospatial technology with respect to modern tools and innovation. 
                      We aspire to organize GISfest with a wide range of trending topics that will put a spotlight on innovation and inspire participants to gather ideas for their own use-cases.</p>
                    <p>This 2 days event will feature workshops, presentations, panel discussions, hackathons and will provide a good way to connect with community members from all over Africa.</p>
        
                  </div>
                  <div className='paper-requirements'>
                    <h1>Tracks</h1>
                    <p>We are accepting abstract submission for the following tracks: (More details below)</p>
                    
                    <ul>
                      <li>Geospatial Development (GeoDev)</li>
                      <li>Spatial Analytics</li>
                      <li>Geo AI</li>
                      <li>Cloud Computing</li>
                      <li>Geospatial Innovation </li>
                    </ul>
                  </div>
                  <div className='paper-requirements'>
                    <h1>Submission Types</h1>
                    <ul>
                      <li>Workshop (1hr)</li> 
                      <li>Talk (25 mins, 5 mins Q&A)</li>
                    </ul>
                  </div>
                  <div className='paper-requirements'>
                  <h1>WorkShops</h1>
                  <p>We are looking for workshop focused on the following areas:</p>
                  <ul>
                  {
                    workshopTypes.map((talk,id)=>(
                      <>
                        <li key={id} style={{fontWeight:'bold'}}>{talk.title}</li>
                        <p>{talk.description}</p>
                      </>
                      
                    ))
                  }
                  </ul>
                  </div>
        
                  <div className='paper-requirements'>
                      <h1>Talks</h1>
                      <p>Share Innovative/Enterprise use case of geospatial technology/Innovative solution integrating geospatial technology. For this session, we want to focus on Geo-Innovation.</p>
                      <p>We are looking for startup and enterprise in the following (but not limited) sectors:</p>
                      <ul>
                        {
                          talkTypes.map((talk,id)=>(
                            <li key={id}>{talk}</li>
                          ))
                        }
                      </ul>
                  </div>
                </div>
                <div className='column'>
                   <div className='poster-deadline'>
                      <h1>Deadline</h1>
                      <h3>11th</h3>
                      <h3>September</h3>
                      <h3>2022</h3>
                      <button type="submit"><a href="https://bit.ly/gisfest" target={'blank_'}>Submit Now! ➚</a></button>
                   </div>
                   
                </div>
        
               
        
                </div> 
                <h1 className="section-title">The planning team!</h1>
                <div className='page-content'>
                {teamData.map((Team,index) => {
                      return (
                          <div key={index} className="team-content">
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
            </div>
    )
}

export default HomePage;
