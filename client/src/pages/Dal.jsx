import React, { Component, useEffect } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import dayGridPlugin from "@fullcalendar/timeGrid";
// import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from '@fullcalendar/interaction';
// import index_golbal from "./index.global";

<<<<<<< HEAD
=======




>>>>>>> fa97d1557ed7d55f96fb2938c77a5353231516b0
class Dal extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      events: 
        this.loadEventsFromLocalStorage(),
  
=======
      events: [
       
      { title: 'Long Event',
        start: '2023-12-07',
        end: '2023-01-10'  },
       
        ...this.loadEventsFromLocalStorage(),  
    ]
      
>>>>>>> fa97d1557ed7d55f96fb2938c77a5353231516b0
    };

    // 메서드를 클래스에 바인딩
    this.handleDateSelect = this.handleDateSelect.bind(this);
  }

  loadEventsFromLocalStorage = () => {
    const storedEvents = localStorage.getItem('events');
    return storedEvents ? JSON.parse(storedEvents) : [];
  };

  saveEventsToLocalStorage = (events) => {
    localStorage.setItem('events', JSON.stringify(events));
  };

  handleDateSelect(selectInfo) {
    const title = prompt('일정을 입력하세요:');
    if (title) {
      const newEvent = {
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      };

      const updatedEvents = [...this.state.events, newEvent];
      this.setState({ events: updatedEvents });
      this.saveEventsToLocalStorage(updatedEvents);
    }
  }
  handleEventClick = (clickInfo) => {
    if (window.confirm(`'${clickInfo.event.title}' 이벤트를 삭제하시겠습니까?`)) {
      const updatedEvents = this.state.events.filter(event => event.title !== clickInfo.event.title);
      this.setState({ events: updatedEvents });
      this.saveEventsToLocalStorage(updatedEvents);

    }
  };
  
  

  render() {

    const wrapperStyle = {
        marginLeft: '100px',  // 좌측 여백
        marginRight: '100px'  // 우측 여백
      };


    return (
      <div className="mypage-body">
        <div className="body-wrapper box" style={wrapperStyle}>
          <div className="body-info-container">
            <div className="calendar-wrapper">
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}

                initialView="dayGridMonth"
                
                events={this.state.events}
                
                selectable={true}
                
                select={this.handleDateSelect}
                
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                  }}
<<<<<<< HEAD


=======
                  aspectRatio={1.5}
                  contentHeight={1000} // 달력 내용의 높이를 500px로 고정
                //   height={600} 
>>>>>>> fa97d1557ed7d55f96fb2938c77a5353231516b0
                  navLinks={ true} // can click day/week names to navigate views
                  selectables={ true} 
                  selectMirrors={ true} 
                  editables={true} 
                  dayMaxEventss={ true} 
                  eventClick={this.handleEventClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

<<<<<<< HEAD
export default Dal;
=======
export default Dal;


// class Dal extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         events: [
//           { title: '기말고사',
//             start: '2023-12-07T16:00:00',
//             end: '2023-01-10'  },
//           ...this.loadEventsFromLocalStorage(),
//         ]
//       };
  
//       this.handleDateSelect = this.handleDateSelect.bind(this);
//     }
  
//     loadEventsFromLocalStorage = () => {
//       const storedEvents = localStorage.getItem('events');
//       return storedEvents ? JSON.parse(storedEvents) : [];
//     };
  
//     saveEventsToLocalStorage = (events) => {
//       localStorage.setItem('events', JSON.stringify(events));
//     };
  
//     handleDateSelect = (selectInfo) => {
//       const title = prompt('일정을 입력하세요:');
//       if (title) {
//         const newEvent = {
//           title,
//           start: selectInfo.startStr,
//           end: selectInfo.endStr,
//           allDay: selectInfo.allDay,
//         };
  
//         const updatedEvents = [...this.state.events, newEvent];
//         this.setState({ events: updatedEvents });
//         this.saveEventsToLocalStorage(updatedEvents);
//       }
//     };
  
//     handleEventClick = (clickInfo) => {
//       if (window.confirm(`'${clickInfo.event.title}' 이벤트를 삭제하시겠습니까?`)) {
//         const updatedEvents = this.state.events.filter(event => event.title !== clickInfo.event.title);
//         this.setState({ events: updatedEvents });
//         this.saveEventsToLocalStorage(updatedEvents);
//       }
//     };
  
//     render() {
//       return (
//         <div className="mypage-body">
//           <div className="body-wrapper box">
//             <div className="body-info-container">
//               <div className="calendar-wrapper">
//                 <FullCalendar
//                   plugins={[dayGridPlugin, interactionPlugin]}
//                   initialView="dayGridMonth"
//                   events={this.state.events}
//                   selectable={true}
//                   select={this.handleDateSelect}
//                   headerToolbar={{
//                     left: 'prev,next today',
//                     center: 'title',
//                     right: 'dayGridMonth,timeGridWeek,timeGridDay'
//                   }}
//                   navLinks={true}
//                   selectables={true}
//                   selectMirrors={true}
//                   editables={true}
//                   dayMaxEventss={true}
//                   eventClick={this.handleEventClick}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   export default Dal;
>>>>>>> fa97d1557ed7d55f96fb2938c77a5353231516b0
