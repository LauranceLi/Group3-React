import { useState } from 'react'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { RiMenuFoldFill } from 'react-icons/ri'
import styles from '@/styles/layout/navbar.module.css'

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="primary" onClick={handleShow} className={styles.drawerBtn}>
        {name}
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        className={styles.drawerContainer}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link href="/" className={styles.navLink}>
            締杉旅遊
          </Link>
          <Link href="/itinerary/country-all" className={styles.navLink}>
            各國行程
          </Link>
          <Link href="/lectures" className={styles.navLink}>
            旅遊講座
          </Link>
          <Link href="/product/product" className={styles.navLink}>
          締杉商城
          </Link>
          <Link href="/" className={styles.navLink}>優惠活動</Link>
          <Link href="/members" className={styles.navLink}>
            締杉會員
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

function Drawer() {
  return (
    <>
      <OffCanvasExample placement={'end'} name={<RiMenuFoldFill size={26}/>}  />
    </>
  )
}

export default Drawer
