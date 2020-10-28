import React from 'react';
import './style.css';
import '../app.css';

const Resume = (props) => (
  
      <div className="resume-box box-border d-inline-block">
        <div className="resume-div text-left">
          <a id="resume-link" href={props.url} title="opens in google docs" rel="noopener noreferrer" target="_blank">
            <i className={props.icon}></i>
            <span className="resume-name">{props.name}</span>
          </a>
        </div>
      </div>   
    )

export default Resume;