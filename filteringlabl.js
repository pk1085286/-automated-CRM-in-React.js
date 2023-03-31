// In the email page component
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const EmailPage = () => {
  const [messages, setMessages] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState('inbox');

  useEffect(() => {
    // Fetch messages from server based on selected label
    fetch(`/api/messages/${selectedLabel}`)
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.log(err));
  }, [selectedLabel]);

  const handleLabelChange = (e) => {
    setSelectedLabel(e.target.value);
  };

  const handleDelete = (id) => {
    // Delete message from server
    fetch(`/api/messages/${id}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const handleSend = (message) => {
    const serviceId = 'your_service_id';
    const templateId = 'your_template_id';
    const userId
  