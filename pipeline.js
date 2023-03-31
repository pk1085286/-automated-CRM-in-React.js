import React, { useState } from 'react';

function Pipeline() {
  const [customers, setCustomers] = useState([
    { name: 'Customer 1', stage: 'Stage 1' },
    { name: 'Customer 2', stage: 'Stage 1' },
    { name: 'Customer 3', stage: 'Stage 2' },
    { name: 'Customer 4', stage: 'Stage 3' },
  ]);

  const moveCustomer = (name, newStage) => {
    const updatedCustomers = customers.map((customer) => {
      if (customer.name === name) {
        return { ...customer, stage: newStage };
      }
      return customer;
    });
    setCustomers(updatedCustomers);
    // Call API to update customer stage in the database
  };

  return (
    <div>
      <h2>Stage 1</h2>
      <ul>
        {customers.filter((customer) => customer.stage === 'Stage 1').map((customer) => (
          <li key={customer.name}>
            {customer.name}
            <button onClick={() => moveCustomer(customer.name, 'Stage 2')}>Move to Stage 2</button>
          </li>
        ))}
      </ul>
      <h2>Stage 2</h2>
      <ul>
        {customers.filter((customer) => customer.stage === 'Stage 2').map((customer) => (
          <li key={customer.name}>
            {customer.name}
            <button onClick={() => moveCustomer(customer.name, 'Stage 3')}>Move to Stage 3</button>
          </li>
        ))}
      </ul>
      <h2>Stage 3</h2>
      <ul>
        {customers.filter((customer) => customer.stage === 'Stage 3').map((customer) => (
          <li key={customer.name}>{customer.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Pipeline;
