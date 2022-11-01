  import React from 'react';
import './Schedule.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import { agendaData} from '../../utils/data';
import SEO from '../SEO';

const Schedule = () => {


  return (
    <div className="main-content" id="#top">
    <SEO title={'Conference Schedule -- GIS Festival 2022'} url={'https://gisfest.org/schedule'}/>
      <PageHeader title={'Agenda Sneak Peek'} 
        color={'#084f41'} 
      />
      <div className='page-content schedule-container '>              
              <div className='agenda-content'>
                {agendaData.map((agendaItem, index) => {
                  return (
                    <div key={index} className="agenda-day-content">
                      <div className='date-container'>{agendaItem.day}</div>
                      {agendaItem.timeContent.map((agendaSchedule,id) => {
                        return (
                          <div className='agenda-schedule-container' key={id}>
                          <div className='agenda-time'>{agendaSchedule.time}</div>
                            <div className='agenda-schedule-content'>
                              <h3>{agendaSchedule.title}</h3>
                              <h3> { agendaSchedule.sessionTitle && 'Session Title:'} {agendaSchedule.sessionTitle}</h3>
                              <p className='session-speaker'>{ agendaSchedule.Speaker && 'Speaker:'} <span style={{fontWeight:'bold'}}>{agendaSchedule.Speaker}</span></p>
                              <p className='session-content'>{ agendaSchedule.sessionContent && 'Abstract:'} {agendaSchedule.sessionContent}</p>
                            </div>
                          </div>
                        )
                      })}
                       
                    </div>
                  )
                })}

              </div>

             
      </div>
    </div>  
  )
} 
export default Schedule;

