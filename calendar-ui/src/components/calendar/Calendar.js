import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = ({ events, onDateClick }) => {
  const handleDateClick = (info) => {
    onDateClick(info.dateStr);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events.map((event) => ({
        title: event.title,
        start: event.date,
      }))}
      dateClick={handleDateClick} 
    />
  );
};

export default Calendar;
