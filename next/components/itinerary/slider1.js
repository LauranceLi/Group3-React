import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function SliderDemo() {
  const [range, setRange] = useState([200, 10000])
  const [days, setDays] = useState(1)

  const onChangeComplete = (e) => {
    setRange([parseInt(e.target.value), range[1]])
  }

  const onChangeMaxValue = (e) => {
    setRange([range[0], parseInt(e.target.value)])
  }

  const onChangeDaysComplete = (e) => {
    setDays(parseInt(e.target.value))
  }

  return (
    <>
      <Row>
        <Col xs={12} md={6}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <input
              type="range"
              min={0}
              max={300000}
              step={1000}
              value={range[0]}
              onChange={onChangeComplete}
            />
            <input
              type="range"
              min={0}
              max={300000}
              step={1000}
              value={range[1]}
              onChange={onChangeMaxValue}
            />
          </div>
          <p style={{ width: '280px' }}>
            NT${range[0]} ~ NT${range[1]}
          </p>
        </Col>
      </Row>
    </>
  )
}
