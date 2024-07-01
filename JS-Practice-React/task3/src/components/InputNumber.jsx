import React, { useState } from 'react';

function InputNumber() {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setNumber(value);
    if (value === '') {
      setMessage('');
    } else if (isNaN(value)) {
      setMessage('Введите корректное число');
    } else if (Number(value) > 0) {
      setMessage('Число больше нуля');
    } else if (Number(value) < 0) {
      setMessage('Число меньше нуля');
    } else {
      setMessage('Число равно нулю');
    }
  };

  return (
    <div>
      <input type="text" value={number} onChange={handleChange} />
      <Message message={message} />
    </div>
  );
}

function Message({ message }) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default InputNumber;