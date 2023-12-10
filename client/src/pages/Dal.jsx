import React, { Component } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import dayGridPlugin from "@fullcalendar/timeGrid";
// import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from '@fullcalendar/interaction';

class Dal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: 
        this.loadEventsFromLocalStorage(),
  
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

                  contentHeight={900} // 달력 내용의 높이를 500px로 고정
                  aspectRatio={1.5} // 가로 세로 비율을 조절, 1.5는 예시이므로 필요에 따라 수정
                  // height={800}
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

export default Dal;