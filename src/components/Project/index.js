import React from 'react';
import './style.css';
import '../app.css';

const Project = (props) => (
      <div className="col-sm-6 col-xl-4 project">
        <div className="project-box box-border d-inline-block my-5">
          <div className="image-box">
            <img className="project-img img-fluid" src={process.env.PUBLIC_URL + props.img} alt={props.title}></img>
          </div>
          <p className="project-title">{props.title}</p>
          <ul className="project-desc-list">
            <li className="project-p2">{props.description}</li>
            <li className="project-p3">{props.tech}</li>
          </ul>
          <div className="project-links">
            <a className={`project-link1 ${props.noLink}`} href={props.extLink} rel="noopener noreferrer" target="_blank">
              <i className={props.extLinkIcon}></i>
              <span className="project-link-desc">{props.linkDesc}</span>
            </a>
            <a  className="project-link2" href={props.repoLink} rel="noopener noreferrer" target="_blank">
              <i className={props.repoLinkIcon}></i>
              <span className="project-link-desc">{props.repoDesc}</span>
            </a>
          </div>
        </div>   
      </div>
    )

export default Project;