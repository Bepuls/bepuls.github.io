import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import './style.css';

class SideNav extends Component {
  render() {
    return (
      <aside id="sidebar-wrapper">
        <div className="my-name">
          <a id="name-link" href="#hero" onClick={ (e) => this.props.onClickNavLink(e)}>
            <div className="first-name">
              <span className="name-cap">M</span><span className="name-back">yles</span>
            </div>
            <div className="last-name">
              <span className="name-cap">C</span><span className="name-back">arey</span>
            </div>
          </a>
        </div>
      <nav>
        <Scrollspy className="sidebar-nav"
          items={["about", "skills", "projects","education","experience",
                  "contact","resume"]}
          currentClassName="active-nav"
          offset={this.props.scrollSpyOffset}
        >
            <li>
              <a href="#about" onClick={ (e) => this.props.onClickNavLink(e)}>
                <i className="fa fa-address-card"></i>About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={ (e) => this.props.onClickNavLink(e)}
                ><i className="fa fa-wrench"></i>Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={ (e) => this.props.onClickNavLink(e)}>
                <i className="fa fa-laptop-code"></i>Projects
              </a>
            </li>
            <li>
              <a href="#education" onClick={ (e) => this.props.onClickNavLink(e)}>
                <i className="fa fa-graduation-cap"></i>Education
              </a>
            </li>
            <li>
              <a href="#experience" onClick={ (e) => this.props.onClickNavLink(e)}>
                <i className="fa fa-building"></i>Experience
              </a>
            </li>
            <li>
              <a href="#contact" onClick={ (e) => this.props.onClickNavLink(e)}>
                <i className="fa fa-envelope"></i>Contact
              </a>
            </li>
            <li>
              <a href="#resume" onClick={ (e) => this.props.onClickNavLink(e)}>
                <i className="fa fa-file-pdf"></i>Resume
              </a>
            </li>
            <li className="li-sidebar-close">
              <a href="#home" className="sidebar-close" onClick={ (e) => this.props.onClickSideNav(e)}
                ><i id="close" className="fa fa-window-close fa-lg"></i>Close
              </a>
            </li>
        </Scrollspy>
      </nav>
    </aside>
    )
  }
}

export default SideNav;