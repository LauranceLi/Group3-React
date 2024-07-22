// VerificationComponent.jsx
import React, { useState } from 'react';
import axios from 'axios';

const VerificationComponent = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState('');

  const sendVerificationEmail = async () => {
    try {
      await axios.post('http://localhost:3005/api/members/send-verification-email', { email });
      setStep(2);
    } catch (error) {
      setMessage('Error sending email');
    }
  };

  const verifyCode = async () => {
    try {
      const response = await axios.post('http://localhost:3005/api/members/verify-code', { email, code });
      if (response.data.success) {
        alert('認證成功');
      } else {
        alert('認證碼不正確');
      }
    } catch (error) {
      setMessage('Verification failed');
    }
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={sendVerificationEmail}>認證信箱按鈕</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <input
            type="text"
            placeholder="Enter verification code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button onClick={verifyCode}>驗證碼驗證</button>
        </div>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default VerificationComponent;
