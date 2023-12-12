import React, { Component } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from '@fullcalendar/interaction';

class MyCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.loadEventsFromLocalStorage(),
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

  render() {
    return (
      <div className="mypage-body">
        <div className="body-wrapper box">
          <div className="body-info-container">
            <div className="calendar-wrapper">
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
