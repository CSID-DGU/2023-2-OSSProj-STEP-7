// ExternalHtmlLoader.jsx

import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarComponent = () => {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        initialDate="2023-01-12"
        navLinks={true}
        selectable={true}
        selectMirror={true}
        select={(arg) => {
          const title = prompt('Event Title:');
          if (title) {
            // Add your logic to handle the event creation in React state or Redux
            console.log('Event Title:', title);
          }
        }}
        eventClick={(arg) => {
          if (window.confirm('Are you sure you want to delete this event?')) {
            // Add your logic to handle the event deletion in React state or Redux
            console.log('Event Deleted:', arg.event);
          }
        }}
        editable={true}
        dayMaxEvents={true}
        events={[
          // ... your events array ...
        ]}
      />
    </div>
  );
};

export default CalendarComponent;
