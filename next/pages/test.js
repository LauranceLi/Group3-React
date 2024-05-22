import React, { useState } from 'react'
import OtpInput from 'react-otp-input'
import Modal from '@/components/layout/modal'

export default function App() {
  const [otp, setOtp] = useState('')
  const handleChange = (otp) => {
    if (otp.length <= 6 && 0 < otp.length) {
      setOtp(otp)
    }
  }

  // const clear = () => {
  //   setOtp('');
  // }

  return (
    <>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
      <Modal></Modal>
      {/* <button type='button' onClick={clear}>清除</button> */}
    </>
  )
}
