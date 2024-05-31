import { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Overlay from 'react-bootstrap/Overlay'
import { FaGear } from 'react-icons/fa6'

export default function TestBtn({testInput_1, testInput_2, testInput_3, testInput_4, testInput_5, testInput_6, testInput_7}) {
  const [show, setShow] = useState(false)
  const target = useRef(null)


  return (
    <>
      <Button
        variant="danger"
        ref={target}
        onClick={() => setShow(!show)}
        title="開發用一鍵輸入工具"
        className="gear"
      >
        <FaGear size={25} />
      </Button>
      <Overlay target={target.current} show={show} placement="top-end">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div {...props} className="overlayBody">
            <Button variant="danger" className="testBtn" onClick={testInput_1}>
              登入（帳號錯誤）
            </Button>
            <Button variant="danger" className="testBtn" onClick={testInput_2}>
              登入（密碼錯誤）
            </Button>
            <Button variant="success" className="testBtn" onClick={testInput_3}>
              登入（帳密正確）
            </Button>
            <Button variant="warning" className="testBtn" onClick={testInput_7}>
              已註冊帳號
            </Button>
            <Button variant="info" className="testBtn" onClick={testInput_4}>
              註冊完整
            </Button>
            <Button variant="success" className="testBtn" onClick={testInput_5}>
              新用戶登入
            </Button>
            <Button variant="info" className="testBtn" onClick={testInput_6}>
              資料編輯
            </Button>
          </div>
        )}
      </Overlay>
    </>
  )
}
