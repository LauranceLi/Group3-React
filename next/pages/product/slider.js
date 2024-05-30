import { useState } from 'react'
import { Slider, Row, Col } from 'antd'

export default function Slide() {
  const [values, setValues] = useState([200, 10000])
  const [days, setDays] = useState(1)

  //   const onChange = (value) => {
  //     console.log('onChange: ', value)
  //   }
  const onChangeComplete = (value) => {
    console.log('onChangeComplete: ', value)
    setValues(value)
  }

  const onChangeDaysComplete = (value) => {
    console.log('onChangeDaysComplete: ', value)
    setDays(value)
  }

  return (
    <>
      <Row>
        <Col span={6}>
          <Slider
            range
            step={1000}
            min={0}
            max={28000}
            defaultValue={values}
            onChangeComplete={onChangeComplete}
          />
          <p>
            NT${values[0]} ~ NT${values[1]}
          </p>
        </Col>
      </Row>
    </>
  )
}