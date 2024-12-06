import React, { useState } from 'react';
import './EventForm.css'

const EventForm = ({ date, onClose, onAddEvent }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    participants: '',
    date: date, 
    time: '',
    duration: '',
    sessionNotes: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent(formData);
    onClose(); 
  };

  return (
    <div>
      <h3>Create Event</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Participants:
          <input
            type="text"
            name="participants"
            value={formData.participants}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Duration (hours):
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Session Notes:
          <textarea
            name="sessionNotes"
            value={formData.sessionNotes}
            onChange={handleInputChange}
          />
        </label>
        <div>
          <button type="submit">Add Event</button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
