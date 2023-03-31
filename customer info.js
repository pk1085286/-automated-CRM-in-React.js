import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CustomerInfoPage() {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    // Call API to fetch customer data based on ID
    fetch(`/api/customers/${customerId}`)
      .then(response => response.json())
      .then(data => setCustomer(data))
      .catch(error => console.error(error));
  }, [customerId]);

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Customer Info</h1>
      <div>
        <h2>Contact Information</h2>
        <p>Name: {customer.name}</p>
        <p>Email: {customer.email}</p>
        <p>Phone: {customer.phone}</p>
      </div>
      <div>
        <h2>Notes</h2>
        <ul>
          {customer.notes.map(note => <li key={note.id}>{note.content} - {note.date}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default CustomerInfoPage;
