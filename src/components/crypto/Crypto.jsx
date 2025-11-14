import React, { useState } from 'react';

function AddNumbers() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    fetch(`http://YOUR_VPS_IP:8000/add?a=${num1}&b=${num2}`)
      .then(res => res.json())
      .then(data => {
        if (data.result !== undefined) {
          setResult(data.result);
          setError(null);
        } else {
          setError('خطا در دریافت نتیجه');
          setResult(null);
        }
      })
      .catch(err => {
        setError('خطا: ' + err.message);
        setResult(null);
      });
  };

  return (
    <div style={{ direction: 'rtl', fontFamily: 'Tahoma, sans-serif', maxWidth: '300px', margin: 'auto', padding: '20px' }}>
      <h2>جمع دو عدد</h2>
      <input
        type="number"
        placeholder="عدد اول"
        value={num1}
        onChange={e => setNum1(e.target.value)}
        style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
      />
      <input
        type="number"
        placeholder="عدد دوم"
        value={num2}
        onChange={e => setNum2(e.target.value)}
        style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
      />
      <button onClick={handleCalculate} style={{ width: '100%', padding: '10px' }}>
        محاسبه
      </button>
      {result !== null && <p>نتیجه: {result}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default AddNumbers;
