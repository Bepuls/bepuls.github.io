import React from 'react';
import './style.css';

const Contact = (props) => (
        <li className={`contact-list  ${props.class}`}>
          <a className={props.class} href={props.url} rel="noopener noreferrer" target="_blank">
            <div className="icon-box">
              <i className={props.icon}></i>
            </div>
            <span className="contact-name">{props.name}</span>
          </a>
        </li>
    )

export default Contact
