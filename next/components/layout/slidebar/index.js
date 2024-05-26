import React, { useState, useEffect } from 'react'
import styles from '@/styles/layout/navbar.module.css'
import { ImFacebook2 } from 'react-icons/im'
import { FaShoppingCart } from 'react-icons/fa'
import { RiMenuFoldFill } from 'react-icons/ri'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header
      className={`header-area ${isSticky ? styles.sticky : ''} m-0 pt-0 pb-0`}
    >
      <div className="container-fluid">
        <div className="row d-flex justify-content-center h-100">
          <div className="col-lg-12 col-xl-10">
            <div className={styles.nav}>
              {/* Logo Area  */}
              <div className={styles.logoBox}>
                <a href="index.html" className={styles.logo}>
                  締杉旅遊
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
              {/* Nav */}
              <nav className={styles.rowNav}>
                <ul>
                  <li className="nav-item">
                    <a className={styles.navLink} href="index.html">
                      關於締杉
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className={styles.navLink} href="about-me.html">
                      各國行程
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className={styles.navLink} href="services.html">
                      旅遊講座
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className={styles.navLink} href="blog.html">
                      締杉商城
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className={styles.navLink} href="contact.html">
                      優惠活動
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className={styles.navLink} href="elements.html">
                      締杉會員
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="menu-content-area d-flex align-items-center">
                {/* Header Social Area */}
                <div className={styles.icons}>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Twitter"
                  >
                    <FaShoppingCart size={25} />
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Instagram"
                  >
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Facebook"
                  >
                    <ImFacebook2 size={23} className={styles.facebookIcon} />
                  </a>
                </div>
                <div className={styles.menuIcon}>
                  <button type="button" className={styles.menuBtn}>
                    <RiMenuFoldFill size={25} />
                  </button>
                </div>
                {/* Menu Icon */}
                {/* <span className="navbar-toggler-icon" id="menuIcon" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
