import React from 'react';

const Header = () => (
  <header className="header-area">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="menu-area d-flex justify-content-end">
            <div className="menu-content-area d-flex align-items-center">
              <div className="header-social-area d-flex align-items-center">
                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest">
                  <i className="fa fa-pinterest" aria-hidden="true"></i>
                </a>
                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Linkedin">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </div>
              <span className="navbar-toggler-icon" id="menuIcon"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
