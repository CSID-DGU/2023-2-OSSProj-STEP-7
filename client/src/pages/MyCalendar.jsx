import React, {Component} from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import rrulePlugin from '@fullcalendar/rrule'
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
// import bootstrapPlugin from '@fullcalendar/bootstrap';




// import "../Assets/calendar.scss";

class MyCalendar extends Component {
    constructor(props){
        super(props);
    }
    state = {
        events : [
            { title: 'All Day Event',
              start: '2023-01-01'
            },
            { title: 'Long Event',
              start: '2023-01-07',
              end: '2023-01-10'
            },
            {
              groupId: 999,
              title: 'Repeating Event',
              start: '2023-01-09T16:00:00'
            },
            {
              groupId: 999,
              title: 'Repeating Event',
              start: '2023-01-16T16:00:00'
            },
            {
              title: 'Conference',
              start: '2023-01-11',
              end: '2023-01-13'
            },
            {
              title: 'Meeting',
              start: '2023-01-12T10:30:00',
              end: '2023-01-12T12:30:00'
            },
            {
              title: 'Lunch',
              start: '2023-01-12T12:00:00'
            },
            {
              title: 'Meeting',
              start: '2023-01-12T14:30:00'
            },
            {
              title: 'Happy Hour',
              start: '2023-01-12T17:30:00'
            },
            {
              title: 'Dinner',
              start: '2023-01-12T20:00:00'
            },
            {
              title: 'Birthday Party',
              start: '2023-01-13T07:00:00'
            },
            {
              title: 'Click for Google',
              url: 'http://google.com/',
              start: '2023-01-28'
            }
          ]
    }

    handleDateSelect = (selectInfo) => {
        const title = prompt('일정을 입력하세요:');
        const calendarApi = selectInfo.view.calendar;
    
        if (title) {
          calendarApi.addEvent({
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay,
          });
        }
      };


    render(){
        return(
            <div className="mypage-body"> 
                <div className="body-wrapper box">
                    <div className="body-info-container">
                        <div className="calendar-wrapper">
                            {/* <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]}/> */}
                            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={this.state.events}
                selectable={true}
                select={this.handleDateSelect}
              />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default MyCalendar;
