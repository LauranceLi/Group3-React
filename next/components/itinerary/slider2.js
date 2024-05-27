import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function SliderDemo() {
  const [days, setDays] = useState(1)

  const onChangeDaysComplete = (e) => {
    setDays(parseInt(e.target.value))
  }

  return (
    <>
      <Row>
        <Col xs={12} md={6}>
          <input
            type="range"
            min={1}
            max={20}
            value={days}
            onChange={onChangeDaysComplete}
            style={{ width: '280px' }}
          />
          <p>{days} 天</p>
        </Col>
      </Row>
    </>
  )
}

