// Import necessary libraries
import React, { useEffect } from 'react';
// import $ from 'jquery';
import 'moment';
import 'daterangepicker';
import 'daterangepicker/daterangepicker.css';
import $ from 'jquery';
import 'moment';
import 'daterangepicker';
import '@fullcalendar/core';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import '@fullcalendar/daygrid/main.css';

const CalendarPage = () => {
  useEffect(() => {
    const calendarData = async () => {
      const firstAjax = new Promise((resolve, reject) => {
        $.ajax({
          url: '/attend/vacationAllList',
          type: 'get',
          success: function (data) {
            console.log("휴가 data", data);
            var events = data.map(function (event) {
              return {
                id: event.id,
                title: '[' + event.vacationType.name + '] ' + event.user.name + '님',
                start: event.startDate,
                end: event.endDate,
                textColor: 'white',
                color: "rgb(255,136,0)",
                extendedProps: {
                  user: event.user.name,
                  title: '[' + event.vacationType.name + '] ' + event.user.name + '님',
                  contents: event.reason
                }
              };
            });
            resolve(events);
          },
          error: function (e) {
            console.log("error" + e);
            reject(e);
          }
        });
      });

      const secondAjax = new Promise((resolve, reject) => {
        $.ajax({
          url: '/attend/scheduleAllList',
          type: 'get',
          success: function (data) {
            console.log("일정 data", data);
            const events = data.map(function (event) {
              return {
                id: event.id,
                title: '[일정] ' + event.user.name + '님',
                start: event.startDate,
                end: event.endDate,
                textColor: 'white',
                color: "rgb(72,151,255)",
                extendedProps: {
                  user: event.user.name,
                  title: '[일정] ' + event.user.name + '님',
                  subtitle: event.title,
                  contents: event.contents
                }
              };
            });
            resolve(events);
          },
          error: function (e) {
            console.log("error" + e);
            reject(e);
          }
        });
      });

      try {
        const [events, additionalEvents] = await Promise.all([firstAjax, secondAjax]);
        const allEvents = events.concat(additionalEvents);
        // Use allEvents as needed, e.g., initialize the calendar with the events
        console.log(allEvents);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the function to fetch and process calendar data
    calendarData();
  }, []); // Run useEffect only once on component mount

  return (
    <div>
      {/* Your JSX content goes here */}
    </div>
  );
};

export default CalendarPage;
