import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = 'your_service_id';
    const templateId = 'your_template_id';
    const userId = 'your_user_id';

    emailjs.send(serviceId, templateId, message, userId).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input type='text' id='name' name='name' onChange={handleChange} value={message.name} />

      <label htmlFor='email'>Email:</label>
      <input type='email' id='email' name='email' onChange={handleChange} value={message.email} />

      <label htmlFor='message'>Message:</label>
      <textarea id='message' name='message' onChange={handleChange} value={message.message} />

      <button type='submit'>Send</button>
    </form>
  );
};
