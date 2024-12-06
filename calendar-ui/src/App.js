import React, { useState, useEffect } from 'react';
import Calendar from './components/calendar/Calendar'; 
import EventForm from './components/eventForm/EventForm'; 
import axios from 'axios';

const App = () => {
  const [events, setEvents] = useState([]); 
  const [showForm, setShowForm] = useState(false); 
  const [selectedDate, setSelectedDate] = useState(null); 

  useEffect(() => {
    axios.get('http://localhost:5000/events')
      .then((response) => setEvents(response.data))
      .catch((error) => console.error(error));
  }, []);

 
  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowForm(true);
  };

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
    axios.post('http://localhost:5000/events', newEvent)
      .then((response) => console.log('Event saved:', response.data))
      .catch((error) => console.error(error));
    setShowForm(false); 
  };

  return (
    <div>
   
      <Calendar
        events={events}
        onDateClick={handleDateClick} 
      />

   
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <EventForm
              date={selectedDate}
              onClose={() => setShowForm(false)} 
              onAddEvent={handleAddEvent} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
